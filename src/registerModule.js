import {camelCase, cloneDeep, forOwn, kebabCase} from "lodash";
import router from "./router";
import store from "./store";

/**
 * Dynamically Load Module Config data
 */
const registerModuleConfigs = async (availableModuleConfigs, app) => {
  const availableModules = {}
  const dataSetup = Object.keys(availableModuleConfigs).map(async (fileName) => {
    const moduleName = camelCase(fileName.split('/').pop().replace(/\.(.*)/, ''))
    const moduleConfigData = availableModuleConfigs[fileName]?.default || await availableModuleConfigs[fileName]()
    if (!moduleConfigData.exclude) {
      availableModules[moduleName] = moduleConfigData
      const registeredComponents = {}
      /**
       * This allows global component registration and component sharing
       * every module can export certain components
       * naming convection will be kebabCase [module-name-my-component-name]
       * to allow dynamic exclusion check if component exist using
       * $options.components['todos-fancy-box'] if exist then proceed else skip the render
       */
      if (moduleConfigData.components && Array.isArray(moduleConfigData.components)) {
        await Promise.all(moduleConfigData.components.map(async (data) => {
          const componentName = kebabCase(`${moduleName}-${data.name}`);
          const component = await data.component()
          app.component(
            componentName,
            component.default
          )
          registeredComponents[componentName] = true;
        }))
      }
      availableModules[moduleName].components = registeredComponents
    }
  })
  await Promise.all(dataSetup);
  return availableModules;
}

/**
 * Get all files ending with .route.ts or .route.js
 * Extract name from {filename}.route.ts
 * register route
 *
 * Dynamic exclusion isn't working thus need to validate while adding
 * (?<!/todos)\.(route.js|route.ts)$
 */
const addRoutes = async (availableRoutes, availableModules = {},) => {
  const dataSetup = Object.keys(availableRoutes).map(async (fileName) => {
    const moduleName = camelCase(fileName.split('/').pop().replace(/\.(.*)/, ''));
    if (!availableModules[moduleName]) {
      return;
    }
    const availableRoute = availableRoutes[fileName]?.default || await availableRoutes[fileName]();
    (availableRoute.default || availableRoute).map((r) => router.addRoute(r));
  });
  await Promise.all(dataSetup)
}

/**
 * Get all files ending with .store.ts or .store.js
 * Extract name from {filename}.store.ts
 * register module with {filename}
 */
const addStoreModules = async (availableStores, availableModules = {}) => {
  const dataSetup = Object.keys(availableStores).map(async (fileName) => {
    const moduleName = camelCase(fileName.split('/').pop().replace(/\.(.*)/, ''))
    if (!availableModules[moduleName]) {
      return;
    }
    const availableStore = availableStores[fileName]?.default || await availableStores[fileName]()
    store.registerModule(moduleName, availableStore.default || availableStore)
  });
  await Promise.all(dataSetup)
}

export default async (app) => {
  const availableModuleConfigs = import.meta.globEager('./modules/**/*.config.js|./modules/**/*.config.ts')
  const availableModules = await registerModuleConfigs(availableModuleConfigs, app)

  const availableRoutesList = import.meta.globEager('./modules/**/*.route.js|./modules/**/*.route.ts|./router/**/*.route.js|./router/**/*.route.ts')
  await addRoutes(availableRoutesList, availableModules)

  const availableStoreList = import.meta.globEager('./modules/**/*.store.js|./modules/**/*.store.ts|./store/**/*.store.js|./store/**/*.store.ts')
  await addStoreModules(availableStoreList, availableModules)

  /**
   * Call this.$store.commit('resetState') to reset all the states without crashing
   * @defaultState copies the data in current
   */
  const defaultState = cloneDeep(store.state);
  store.hotUpdate({
    getters: {
      availableModules() {
        return availableModules;
      }
    },
    mutations: {
      resetState(state) {
        forOwn(defaultState, (value, key) => {
          state[key] = cloneDeep(value);
        });
      },
    }
  })
  return availableModules;
}
