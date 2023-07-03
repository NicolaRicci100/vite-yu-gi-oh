<script>
import PokemonCard from './PokemonCard.vue';
import { store } from '../../data/store.js'
export default {
  components: { PokemonCard },
  data() {
    return { store }
  }
}
</script>

<template>
  <div id="pokemons">
    <div class="row row-cols-5 g-3 bg-danger pt-2 pb-4 px-4 border border-dark-subtle border-5 rounded">
      <div class="col" v-for="pokemon in store.pokemons" :key="pokemon._id">
        <PokemonCard :name="pokemon.name" :type="pokemon.type1" :image="pokemon.imageUrl" :number="pokemon.number" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as *;

.row .col {
  @include center-flex;
}
</style>