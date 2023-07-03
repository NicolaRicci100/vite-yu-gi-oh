import {reactive} from 'vue';
export const store = reactive({
  pokemons: [],
  pages: {prev: null, next: null}
})