<script>
const pokemonTypes = [
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
export default {

}
</script>

<template>
  <section class="container d-flex justify-content-center align-items-center mb-4">
    <div id="select-list">
      <select class="form-select">
        <option selected>Nessun Tipo</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#select-list {
  width: 15%;
}
</style>