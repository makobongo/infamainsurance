<template>
  <div>
    <v-card outlined>
      <v-card-text class="justify-center">
        <v-img :src="src" :lazy-src="src" class="grey darken-4">
          <InquiryBtns />
        </v-img>
        <hr />
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="1"> </v-col>
                <v-col cols="10">
                  <v-card>
                    <v-card-title class="justify-center"
                      ><h3>Frequently Asked Questions</h3></v-card-title
                    >
                    <v-card-title class="justify-center">
                      <v-btn
                        v-for="(btn, i) in btns"
                        :key="i"
                        class="v-btnn"
                        color="#FFFF00"
                        >{{ btn.name }}</v-btn
                      >
                    </v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="1"> </v-col>
              </v-row>
              <v-row> </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <br />
  </div>
</template>
<script>
import { InquiryBtns } from "../includes";
export default {
  data: () => ({
    src: require("@/assets/faq/faq-top.4f50583f122d128ee00d.jpg"),
    btns: [
      { name: "motor" },
      { name: "property" },
      { name: "health" },
      { name: "travel" },
      { name: "business" },
      { name: "Rescue" },
      { name: "Jumpstart" },
    ],
  }),
  components: {
    InquiryBtns,
  },
};
</script>
<style scoped>
.v-btnn {
  width: 110px;
  min-height: 110px;
  font-weight: bold;
  font-size: 15px;
}
</style>