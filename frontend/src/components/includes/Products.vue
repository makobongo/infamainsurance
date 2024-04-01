<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">
        <v-btn depressed outlined><h2>__Our Insurance Products__</h2></v-btn>
      </v-card-title>
      <carousel-3d height="350" width="500">
        <slide v-for="(card, i) in cards" :index="i" :key="i">
          <v-card-title class="justify-center">
            <v-btn depressed outlined color="black" :to="card.url"
              ><h3>{{ card.title }}</h3></v-btn
            >
          </v-card-title>
          <v-card-text class="text-center">{{ card.msg }}</v-card-text>
          <v-img
            :src="card.src"
            :lazy-src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>
          <v-card-actions class="justify center">
            <v-btn depressed color="black" :to="card.url" small block outlined
              >Read More.. <v-icon>mdi-hand-pointing-right</v-icon></v-btn
            >
          </v-card-actions>
          <!-- <figure>
          <v-img
            :src="`https://image.tmdb.org/t/p/w500/${trend.poster_path}`"
          ></v-img>
          <figcaption>
            <h3 v-if="trend.title">{{ trend.title }}</h3>
            <h3 v-if="trend.name">{{ trend.name }}</h3>
          </figcaption>
        </figure> -->
        </slide>
      </carousel-3d>
    </v-card>
    <!-- <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-card-title class="justify-center">
              <v-btn outlined :to="card.url"
                ><h3>{{ card.title }}</h3></v-btn
              >
            </v-card-title>
            <v-card-text>{{ card.msg }}</v-card-text>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn depressed outlined rounded small :to="card.url">
                More <v-icon large>mdi-menu-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    img: require("@/assets/home/infama-home-1.jpg"),
    cards: [
      {
        title: "Motor Insurance",
        src: require("@/assets/home/motor-h.jpg"),
        flex: 3,
        url: "motor",
        msg: "INFAMA’s Motor insurance covers and protects your vehicle ...",
      },
      {
        title: "Property Insurance",
        src: require("@/assets/home/property-h.jpg"),
        flex: 3,
        url: "property",
        msg: "Our Property insurance policy provides financial ...",
      },
      {
        title: "Health Insurance",
        src: require("@/assets/home/health-h.jpg"),
        flex: 3,
        url: "health",
        msg: "Our Health Insurance helps you create a plan that is ...",
      },
      {
        title: "Travel Insurance",
        src: require("@/assets/home/travel-h.jpg"),
        flex: 3,
        url: "travel",
        msg: "When travelling we take time to plan for visa’s, travel ...",
      },
      {
        title: "Business Insurance",
        src: require("@/assets/home/business-h.jpg"),
        flex: 3,
        url: "business",
        msg: "Through our Business Risk Management Solutions, our ...",
      },
    ],
  }),
};
</script>
<style scoped>
.prod-text {
  font-family: Gotham, Helvetica, Arial, sans-serif;
  color: #444;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.4px;
}
</style>