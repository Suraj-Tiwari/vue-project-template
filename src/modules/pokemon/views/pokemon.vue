<template>
  <b-container>
    <b-card-group columns>
      <b-skeleton-wrapper :loading="!$store.state['pokemon'].pokemons || !$store.state['pokemon'].pokemons.length">
        <template #loading>
          <b-card v-for="i in 20" :key="i">
            <b-skeleton-img></b-skeleton-img>
            <b-card-body>
              <b-row>
                <b-skeleton width="85%"></b-skeleton>
              </b-row>
              <b-row>
                <b-skeleton width="75%"></b-skeleton>
              </b-row>
              <b-row>
                <b-skeleton width="95%"></b-skeleton>
              </b-row>
              <b-row>
                <b-skeleton width="35%"></b-skeleton>
              </b-row>
              <b-row>
                <b-skeleton width="65%"></b-skeleton>
              </b-row>

            </b-card-body>
          </b-card>
        </template>
        <b-card
            :key="i"
            img-top
            v-for="(pokemon,i) in $store.state['pokemon'].pokemons"
            :title="pokemon.name"
            :img-src="`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`"
            :img-alt="pokemon.name"
        >
          <b-card-text>
            <b-row class="mb-1" :key="statsIndex" v-for="(stats, statsIndex) in pokemon.stats">
              <b-col cols="6"> {{ stats.stat.name }}</b-col>
              <b-col cols="6" class="pt-1">
                <b-progress :value="stats.base_stat" :max="100" class="mb-1"></b-progress>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-skeleton-wrapper>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('pokemon/getPokemons')
  }
}
</script>
