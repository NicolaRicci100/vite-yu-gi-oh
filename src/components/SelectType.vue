<script>
export default {
  props: {
    options: Array,
    standardLabel: String
  },
  emits: ['option-change'],
  data() {
    return {
      selectedOption: '',
    }
  }
}
</script>

<template>
  <section class="container d-flex justify-content-center align-items-center mb-4">
    <div id="select-list">
      <select class="form-select" v-model="selectedOption" @change="$emit('option-change', selectedOption)">
        <option value="">{{ standardLabel || '...' }}</option>
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#select-list {
  width: 15%;
}
</style>