<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
export default {
  data() {
    return {
      pokemons: []
    }
  },
  created() {
    axios.get(endpoint).then(res => {
      this.pokemons = res.data.docs;
    })
  }
}
</script>

<template>
  <div id="pokemons">
    <h4 v-for="pokemon in pokemons" :key="pokemon._id">{{ pokemon.name }}</h4>
  </div>
</template>

<style lang="scss" scoped></style>