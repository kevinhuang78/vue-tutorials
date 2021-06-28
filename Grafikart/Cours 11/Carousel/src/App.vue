<template>
  <div>
    <carousel>
      <carousel-slide v-for="n in slides" :index="n - 1">
        <div class="carousel__text">Slide {{ n }}</div>
        <img :src="'https://picsum.photos/630/300?image=' + n" alt="Random Picture" width="100%" />
      </carousel-slide>
    </carousel>
    <button @click="addSlide">Ajouter un slide</button>
    <button @click="removeSlide">Supprimer un slide</button>
  </div>
</template>

<script>
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'
export default {
  data() {
    return {
      slides: 5
    }
  },
  components: {
    Carousel,
    CarouselSlide
  },
  methods: {
    addSlide() {
      this.slides++
    },
    removeSlide() {
      this.slides--
    }
  },
  name: 'App'
}
</script>

