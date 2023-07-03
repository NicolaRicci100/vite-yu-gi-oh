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
  <div class="poke-card">
    <figure>
      <img class="img-fluid rounded-circle" :src="image" :alt="name">
    </figure>
    <div>{{ number }}</div>
    <strong>{{ name }}</strong>
    <i>{{ type }}</i>
  </div>
</template>

<style lang="scss" scoped>
.poke-card {
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-radius: 20px;
  padding: 10px 0 10px;

  figure {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: contain;
      height: 200px;
      width: 200px;
    }
  }
}
</style>