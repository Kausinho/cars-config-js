<template>
  <div>
    <HeaderCarros />
    <Carros />
  </div>
</template>

<script>
import Carros from './components/Carros.vue'
import HeaderCarros from './components/HeaderCarros.vue'

export default {
  name: 'App',
  components: {
    Carros,
    HeaderCarros
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
