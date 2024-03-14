<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined
          ><h1>Business Insurance</h1></v-btn
        >
      </v-card-title>
      <v-card-text class="justify-center">
        <v-img :src="src" :lazy-src="src" class="grey darken-4">
          <InquiryBtns />
        </v-img>
        <hr />
        <v-container fluid>
          <v-row>
            <v-col cols="9">
              <v-row>
                <v-col
                  ><h4>
                    Through our Business Risk Management Insurance Solutions,
                    our focus is to understand and recognize the needs of your
                    business and provide solutions that protect your Commercial
                    Activities from losses due to events that may occur during
                    the normal course of business. Our experience provides a
                    platform that enables creation, implementation and servicing
                    of insurance plans created to protect specific needs of the
                    insured in the various sectors of our economy –
                    Manufacturing, Agriculture Service, Food, Trade retail and
                    distribution , Automotive etc.
                  </h4></v-col
                >
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-img :src="mtr" :lazy-src="mtr" class="grey darken-4"> </v-img>
                </v-col>
                <v-col cols="8">
                  <v-card outlined>
                    <v-card-title
                      >Our Business Insurance solutions provide coverage
                      for:-</v-card-title
                    >
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <ul v-for="(msg, i) in msgs1" :key="i">
                            <li>{{ msg.msg }}</li>
                          </ul>
                        </v-col>
                        <v-col> </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col v-for="(sbtmm, i) in msgs3" :key="i" cols="4">
                  <v-card>
                    <v-card-title class="justify-center"
                      ><v-btn outlined color="black" small rounded
                        ><h5>
                          <b>{{ sbtmm.title }}</b>
                        </h5></v-btn
                      >
                    </v-card-title>
                    <v-card-text>
                      <v-img
                        max-height="500"
                        max-width="500"
                        :src="sbtmm.src"
                        :lazy-src="sbtmm.src"
                      ></v-img>
                      <v-card-text>
                        <ul>
                          <li v-for="(sbtmnn, i) in sbtmm.msg" :key="i">
                            {{ sbtmnn.cont }}
                          </li>
                        </ul>
                      </v-card-text>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-card outlined>
                <v-card-title class="justify-center">
                  <h4>Business Insurance</h4>
                </v-card-title>
                <v-card-text>
                  <v-img max-height="250" max-width="250" :src="sdr" :lazy-src="sdr"></v-img>
                  <v-card-title class="justify-center">
                    <h5>How do I buy</h5>
                    <h3><b>Business Insurance?</b></h3>
                  </v-card-title>
                  <ol>
                    <li v-for="(msg, i) in msgs4" :key="i">{{ msg.msg }}</li>
                  </ol>
                </v-card-text>
              </v-card>
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
    src: require("@/assets/business/business-top.47bab7e30ea80c6a69b7.jpg"),
    mtr: require("@/assets/business/business-m.jpg"),
    sdr: require("@/assets/business/business-b.jpg"),
    msgs1: [
      { msg: "Property/ Asset damage –furniture, equipment" },
      { msg: "Inventory" },
      { msg: "Legal liability" },
      { msg: "Employee-related risks" },
      { msg: "Business Risk" },
    ],
    msgs3: [
      {
        title: "Industrial & Manufacturing",
        src: require("@/assets/business/business-1.jpg"),
        msg: [
          { cont: "Fire and Burglary" },
          { cont: "Fire consequential loss" },
          { cont: "Plant All risk" },
          {
            cont: "Product liability",
          },
          {
            cont: "GPA/ WIBA",
          },
          {
            cont: "Plant machinery breakdown",
          },
          {
            cont: "Comprehensive Motor Commercial",
          },
          {
            cont: "Goods in Transit",
          },
          {
            cont: "Stock Policy",
          },
        ],
      },
      {
        title: "Other Business Insurance",
        src: require("@/assets/business/busniess-2.jpg"),
        msg: [
          { cont: "Political Violence and Terrorism cover extension" },
          { cont: "Group Medical cover" },
          { cont: "Money policy" },
          { cont: "Marine cover" },
          { cont: "Employer's Liability" },
          { cont: "Fidelity guarantee" },
          { cont: "Business interruption" },
          { cont: "Plate Glass" },
          { cont: "Directors and Officers Liability" },
        ],
      },
      {
        title: "Service industry",
        src: require("@/assets/business/business-3.jpg"),
        msg: [
          {
            cont: "Fire and Burglary",
          },
          { cont: "Product liability" },
          {
            cont: "Public Liability",
          },
          { cont: "All risk" },
          { cont: "WIBA" },
          { cont: "Professional Indemnity" },
          { cont: "Premium payment Warranty" },
          { cont: "Personal Accident cover for the insured" },
          { cont: "Excess Protection Extension" },
        ],
      },
    ],
    msgs4: [
      {
        msg: "Call us on 0709 852 000 / 0714 674 354 or email us insure@infama.com service and requirements",
      },
      {
        msg: "Set an appointment and we will come to you",
      },
      {
        msg: "Fill out a membership form",
      },
      {
        msg: "Make payment via MPESA Paybill: 822430, Account Number : YOUR NAME, Cheque Payable : INFAMA INSURANCE",
      },
      {
        msg: "Cover starts upon receipt of payment & membership form. Starter pack, member sticker or gate plate will be delivered to you within 7 days of signing",
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