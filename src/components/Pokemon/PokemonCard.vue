<script>
export default {
  props: {
    name: String,
    number: Number,
    image: String,
    type: String
  }
}
</script>

<template>
  <div class="poke-card bg-dark-subtle">
    <figure>
      <img class="img-fluid rounded-circle" :src="image" :alt="name">
    </figure>
    <div>{{ number }}</div>
    <strong>{{ name }}</strong>
    <i>{{ type }}</i>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/style.scss' as *;

.poke-card {
  @include center-flex;
  height: 250px;
  width: 200px;
  flex-direction: column;
  border-radius: 20px;
  padding: 10px 0 10px;


  figure {
    @include center-flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;

    img {
      object-fit: contain;
      height: 150px;
      width: 150px;
    }
  }
}
</style>