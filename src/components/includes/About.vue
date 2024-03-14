<template>
  <div>
    <v-container fluid>
      <v-card color="#EAECEE">
        <v-row>
          <v-col>
            <!-- <v-img class="white--text align-end" height="600px" :src="img">
            </v-img> -->
            <v-hover>
              <v-img
                slot-scope="{ hover }"
                v-if="hover"
                :src="img1"
                height="600px"
              >
              </v-img>
              <v-img v-else :src="img2" height="600px"> </v-img>
            </v-hover>
          </v-col>
          <v-col>
            <v-card outlined>
              <v-card-title class="justify-center">
                <v-btn depressed outlined><h2>ABOUT US</h2></v-btn>
              </v-card-title>
              <v-card-text class="text-center">
                INFAMA Insurance as a company and a brand offers innovative and
                competitively priced Insurance cover for a wide range of risks
                for Personal, Corporate and Commercial Customers. INFAMA
                Insurance was established in 2006 and was previously known as
                Auto Assured Insurance. Our brand focus is to understand and
                recognize the needs of busy customers who require a premium
                service that respects their time, protects their lives and
                assets while reducing the human trauma, economic costs and
                inconveniences they suffer by offering them insurance that
                includes premium rescue, security, motoring and risk services.
                Our insurance brand unlike other players in the market is
                uniquely placed to offer a 24 hour , 365 day a year support for
                all lines of insurance.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    img1: require("@/assets/home/infama-home-1.jpg"),
    img2: require("@/assets/home/infama-home-2.jpg"),
  }),
};
</script>
<style scoped>
.ad-insurance {
  color: red;
  font-family: GothamBold, Helvetica, Arial, sans-serif;
}
</style>