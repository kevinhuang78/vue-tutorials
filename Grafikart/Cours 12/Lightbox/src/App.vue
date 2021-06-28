<template>
  <div id="app">
    <a :href="'https://picsum.photos/800/600?image='+n" v-lightbox v-on:click="url" v-for="n in 9">
      <img :src="'https://picsum.photos/150/150?image='+n" />
    </a>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox.vue'
export default {
  components: {
    Lightbox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
