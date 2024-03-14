<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined><h1>Contact Us</h1></v-btn>
      </v-card-title>
      <v-card-text class="justify-center">
        <v-img :src="src" :lazy-src="src" class="grey darken-4" height="300">
          <InquiryBtns />
        </v-img>
        <hr />
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                  <v-card outlined>
                    <v-card-title class="justify-center"
                      ><h2>Get in touch with us today</h2>
                      &nbsp;<v-icon large>mdi-phone</v-icon></v-card-title
                    >
                    <v-card-text>
                      <v-row>
                        <v-col v-for="(msg, i) in msgs" :key="i">
                          <v-card outlined>
                            <v-card-title class="justify-center">
                              <v-btn color="yellow" depressed
                                ><v-icon>{{ msg.icon }}</v-icon
                                >{{ msg.header }}</v-btn
                              >
                            </v-card-title>
                            <v-card-text class="text-center"
                              >{{ msg.cont1 }} <br />{{
                                msg.cont2
                              }}</v-card-text
                            >
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
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
    src: require("@/assets/contact/contact-top.df6e02af6206512d7e23.jpg"),
    msgs: [
      {
        header: "Insurance",
        cont1: "insure@infama.com",
        cont2: "claims@infama.com",
        icon: "mdi-shield-car",
      },
      {
        header: "Health",
        cont1: "health@infama.com",
        cont2: "health@infamainsurance.com",
        icon: "mdi-bottle-tonic-plus",
      },
      {
        header: "Road Rescue",
        cont1: "rescue@infama.com",
        cont2: "membership@infama.com",
        icon: "mdi-road-variant",
      },
      {
        header: "Help Line",
        cont1: "0704 670 636",
        cont2: "0734 802 360",
        icon: "mdi-phone-classic",
      },
    ],
  }),
  components: {
    InquiryBtns,
  },
};
</script>
<style>
.header-text {
  font-size: 40px;
  font-weight: bold;
  color: black;
}
</style>