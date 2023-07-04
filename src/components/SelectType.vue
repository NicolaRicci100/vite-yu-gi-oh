<script>
export default {
  data() {
    return {
      pokemonTypes: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
      ]
    }
  }
}
</script>

<template>
  <section class="container d-flex justify-content-center align-items-center mb-4">
    <div id="select-list">
      <select class="form-select">
        <option selected>All Types</option>
        <option v-for="pokemontype in pokemonTypes" :key="i">{{ pokemontype }}</option>
      </select>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#select-list {
  width: 15%;
}
</style>