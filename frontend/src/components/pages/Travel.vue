<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined
          ><h1>Travel Insurance</h1></v-btn
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
                    Always buy your travel insurance as early as possible once
                    your trip is booked and confirmed. It provides coverage
                    against the unexpected and unforeseen events and expenses
                    that would otherwise cause you great inconvenience and
                    discomfort.
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
                      >Our Health Insurance Plans include the following
                      benefits:-</v-card-title
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
                      ><v-btn outlined color="black" small rounded>
                        <h5>
                          <b>{{ sbtmm.title }}</b>
                        </h5>
                      </v-btn></v-card-title
                    >
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
                  <h4>Travel Insurance</h4>
                </v-card-title>
                <v-card-text>
                  <v-img max-height="250" max-width="250" :src="sdr" :lazy-src="sdr"></v-img>
                  <v-card-title class="justify-center">
                    <h5>How do I buy</h5>
                    <h3><b>Travel Insurance?</b></h3>
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
    src: require("@/assets/travel/infama-insurance-services-kenya-3.ac034b640bdea3307514.jpg"),
    mtr: require("@/assets/travel/travel-m.jpg"),
    sdr: require("@/assets/travel/travel-b.jpg"),
    msgs1: [
      { msg: "Sudden trip or flight cancellation/interruption." },
      { msg: "Missed travel connections." },
      { msg: "Damage or destruction to your travel destination" },
      { msg: "Terrorism attacks." },
      { msg: "Loss, delay, theft or damage of baggage." },
      { msg: "Loss of passport and travel documents." },
    ],
    msgs3: [
      {
        title: "Losses and Delays",
        src: require("@/assets/travel/travel-1.jpg"),
        msg: [
          { cont: "Loss of Baggage or personal belongings." },
          { cont: "Missed travel connection." },
          { cont: "Travel delays due to operator default." },
          {
            cont: "Information Assistance abroad about lost luggage and passport.",
          },
          {
            cont: "Compensation for in-flight loss and delay in arrival of checked-in-luggage.",
          },
        ],
      },
      {
        title: "Personal Assistance",
        src: require("@/assets/travel/travel-2.jpg"),
        msg: [
          { cont: "Pre-departure services" },
          { cont: "Contacts for local emergency services." },
          { cont: "Medical Assistance." },
          { cont: "Legal Assistance." },
          { cont: "Where locals do not speak your language." },
          { cont: "After the loss of your travel documents." },
        ],
      },
      {
        title: "Travel Assistance",
        src: require("@/assets/travel/travel-3.jpg"),
        msg: [
          {
            cont: "Loss of Passport and identification documents while abroad.",
          },
          { cont: "Trip and flight cancellation and interruption." },
          {
            cont: "Compensation for losses when an emergency or trip interruption occurs.",
          },
          { cont: "Location and forwarding of baggage and personal effects." },
        ],
      },
    ],
    msgs4: [
      {
        msg: "Call 0709 852 000 / 0714 674 354 or email insure@infama.com. Provide the: Name of Traveler, Dates of travel, Destination, Age.",
      },
      {
        msg: "Receive a quotation with the various options and premium.",
      },
      {
        msg: "Fill and return the proposal forms with the required documents: Pin Certificate copy, Passport Copy – First and Last three pages",
      },
      {
        msg: "Make payment via MPESA Paybill: 822430, Account Number : YOUR NAME, Cheque Payable : INFAMA INSURANCE",
      },
      {
        msg: "Receive the policy confirmation, debit note and policy document ( hard copy or via email )",
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