import moduleConfig from "./dogs.config";

export default [
  {
    path: moduleConfig.basePath,
    component: () => import("./dogs.module"),
    children: [
      {
        path: "/",
        name: "Dogs",
        component: () => import("./views/dogs"),
      },
    ],
  },
];
