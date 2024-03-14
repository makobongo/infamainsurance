<template>
  <div>
    <v-hover>
      <v-card outlined slot-scope="{ hover }">
        <v-card-title class="justify-center">
          <v-btn color="black" depressed outlined><h1>Careers</h1></v-btn>
        </v-card-title>
        <v-card-text class="justify-center">
          <v-img :src="src" :lazy-src="src" class="grey darken-4" height="300">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%"
              >
                Welcome to Careers
              </div>
            </v-expand-transition>
          </v-img>
          <hr />
          <v-container fluid>
            <v-row>
              <v-col cols="10">
                <v-row>
                  <v-col
                    ><h4>
                      INFAMA provides an energized, challenging work environment
                      for hardworking, disciplined, skilled, intelligent,
                      driven, aspiring minds who have integrity and are
                      passionate about providing excellent service. All
                      candidates MUST meet the company’s stringent
                      qualification, experience and training criteria which will
                      be assessed at the various stages of the recruitment
                      process. The company also provides internship work study
                      programs when possible for specific areas of relevant
                      professional and technical training. These positions will
                      be advertised from time to time when available.
                    </h4></v-col
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  data: () => ({
    src: require("@/assets/careers/careers-top.e14b9cf5b566a9849bfb.jpg"),
  }),
};
</script>
<style scoped>
.header-text {
  font-size: 40px;
  font-weight: bold;
  color: black;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>