<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import { store } from './data/store.js'
import AppMain from './components/AppMain.vue';
import SelectType from './components/SelectType.vue';
export default {
  components: { AppMain, SelectType },
  created() {
    axios.get(endpoint).then(res => {
      store.pokemons = res.data.docs;
    });
  }
}
</script>


<template>
  <h1 class="text-danger text-center my-4">Pokévuex</h1>
  <SelectType />
  <AppMain />
</template>


<style lang="scss"></style>