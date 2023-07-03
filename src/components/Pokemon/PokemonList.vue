<script>
import axios from 'axios';
import PokemonCard from './PokemonCard.vue';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
export default {
  components: { PokemonCard },
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
    <div class="row row-cols-5 g-3">
      <div class="col" v-for="pokemon in pokemons" :key="pokemon._id">
        <PokemonCard :name="pokemon.name" :type="pokemon.type1" :image="pokemon.imageUrl" :number="pokemon.number" />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.row .col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>