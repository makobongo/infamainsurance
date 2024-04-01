<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in imgs" :key="i" :src="slide.src" :lazy-src="slide.src">
      <InquiryBtns />
    </v-carousel-item>
  </v-carousel>
</template>
  <script>
import { InquiryBtns } from ".";
export default {
  data: () => ({
    imgs: [
      {
        src: require("@/assets/home/infama-s-1.jpg"),
      },
      {
        src: require("@/assets/home/infama-s-2.jpg"),
      },
      {
        src: require("@/assets/home/infama-s-3.jpg"),
      },
      {
        src: require("@/assets/home/infama-s-4.jpg"),
      },
      {
        src: require("@/assets/home/infama-s-5.jpg"),
      },
      {
        src: require("@/assets/home/infama-s-6.jpg"),
      },
    ],
  }),
  components: {
    InquiryBtns,
  },
};
</script>