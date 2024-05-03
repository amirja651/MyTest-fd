<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CarAuction2/>
</template>

<script>
import CarAuction2 from './components/CarAuction.vue'

export default {
  name: 'App',
  components: {
    CarAuction2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
