<template>
  <div>
    <Carousel />
    <hr />
    <Advert />
    <Products />
    <About />
  </div>
</template>
  <script>
import { Carousel, Products, Advert, About } from "../includes";
export default {
  components: {
    Carousel,
    Products,
    Advert,
    About,
  },
};
</script>