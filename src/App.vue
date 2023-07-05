<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import { apiUri } from './data/index.js';
import { store } from './data/store.js';
import AppMain from './components/AppMain.vue';
import SelectType from './components/SelectType.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: { AppMain, SelectType },
  methods: {
    fetchPokemon(endpoint = apiUri) {
      axios.get(endpoint).then(res => {
        const pokemons = res.data.docs;
        store.pokemons = pokemons.map(pokemon => {
          const { name, number, type1, imageUrl } = pokemon;
          return { name, number, type1, imageUrl };
        })
      });
    },
    fetchTypes() {
      axios.get(apiUri + '/types1').then(res => {
        store.types = res.data;

      });
    },
    filterPokemon(type) {
      const uri = `${apiUri}?eq[type1]=${type}`;
      this.fetchPokemon(uri);
    },
  },
  created() {
    this.fetchPokemon();
    this.fetchTypes();
  }
}
</script>


<template>
  <h1 class="text-danger text-center my-4">Pokévuex</h1>
  <SelectType standardLabel="Select Type" :options='store.types' @option-change="filterPokemon" />
  <AppMain />
</template>


<style lang="scss"></style>