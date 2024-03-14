<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined><h1>Motor Insurance</h1></v-btn>
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
                    We offer a range of motor vehicle insurance products to
                    cover a variety of needs. We provide comprehensive and third
                    party covers for both commercial and private motor vehicles,
                    third party liability and property damage to the vehicle
                    including damage arising out of fire, theft, accidental
                    damage riot and political risks.
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
                      >Enjoy the most Comprehensive Motor Insurance Package in
                      the industry with INFAMA’s Motor Insurance with
                      Rescue.</v-card-title
                    >
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <ul v-for="(msg, i) in msgs1" :key="i">
                            <li>{{ msg.msg }}</li>
                          </ul>
                        </v-col>
                        <v-col>
                          <ul v-for="(msg, i) in msgs2" :key="i">
                            <li>{{ msg.msg }}</li>
                          </ul>
                        </v-col>
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
                        ><h3>
                          <b>{{ sbtmm.title }}</b>
                        </h3></v-btn
                      >
                    </v-card-title>
                    <v-card-text>
                      <v-img
                        max-height="500"
                        max-width="500"
                        :src="sbtmm.src"
                        :lazy-src="sbtmm.src"
                      ></v-img>
                      <v-card-title class="justify-center"
                        ><h5>{{ sbtmm.sub }}</h5></v-card-title
                      >
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
                  <h4>Motor Insurance</h4>
                </v-card-title>
                <v-card-text>
                  <v-img max-height="250" max-width="250" :src="sdr" :lazy-src="sdr"></v-img>
                  <v-card-title class="justify-center">
                    <h5>How do I buy</h5>
                    <h3><b>Motor Insurance?</b></h3>
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
    src: require("@/assets/motor/motor-top.54ab48cdfaea8071cb5f.jpg"),
    mtr: require("@/assets/motor/motor-m.jpg"),
    sdr: require("@/assets/motor/motor-b.jpg"),
    msgs1: [
      { msg: "All Vehicle Models" },
      { msg: "Competitive Insurance Rates" },
      { msg: "Free Vehicle Valuation" },
      { msg: "Strong Panel of Underwriters" },
      { msg: "Easy Payment Plan" },
    ],
    msgs2: [
      { msg: "Enhanced Claims Management" },
      { msg: "24 Hour Accident Management" },
      { msg: "24 Hour Road Rescue & Towing" },
      { msg: "Courtesy Car After Accident" },
      { msg: "East Africa Coverage" },
    ],
    msgs3: [
      {
        title: "Comprehensive Insurance",
        src: require("@/assets/motor/motor-1.jpg"),
        sub: "This cover includes:-",
        msg: [
          { cont: "Including Third Party Liabilities" },
          { cont: "Political Violence and Terrorism Cover" },
          { cont: "Strike, Riot and Civil Commotion Risks" },
          { cont: "Excess protector" },
          { cont: "NO Blame, NO Excess" },
          { cont: "Loss of use/Courtesy car" },
          {
            cont: "Personal Accident cover for insured driving or traveling in insured vehicle",
          },
          { cont: "Free Windscreen from Ksh. 30,000 to Ksh. 100,000" },
          { cont: "Free Radio Cassette from Ksh. 30,000 - Ksh. 50,000" },
          { cont: "Lady Handbag & Contents cover" },
        ],
      },
      {
        title: "Schemes and Affinity",
        src: require("@/assets/motor/motor-2.jpg"),
        sub: "Special Insurance programs for Groups:-",
        msg: [
          { cont: "Family Groups" },
          { cont: "Chama’s" },
          { cont: "Sacco’s" },
          { cont: "Motor Vehicle Dealers" },
          { cont: "Banks" },
          { cont: "Micro-Finance Institutions" },
          { cont: "Vehicle Leasing Companies" },
          {
            cont: "Any other Organization seeking to enhance their Affinity Relationships",
          },
          {
            cont: "Fatal Personal Accident cover for the insured or named driver",
          },
          { cont: "Excess Protection Extension" },
        ],
      },
      {
        title: "Motor Commercial",
        src: require("@/assets/motor/motor-3.jpg"),
        sub: "This cover includes :-",
        msg: [
          { cont: "Special Perils" },
          { cont: "Vehicle in Hands of motor trader" },
          { cont: "Replacement parts clause" },
          { cont: "Riot, Strike and Civil Commotion" },
          { cont: "Terrorism and Political Risks" },
          { cont: "Replacement Clause (Show Room Vehicles)" },
          { cont: "Average Condition" },
          { cont: "Premium payment Warranty" },
          {
            cont: "Fatal Personal Accident cover for the insured or named driver",
          },
          { cont: "Excess Protection Extension" },
        ],
      },
    ],
    msgs4: [
      {
        msg: "Call us on 0709 852 000 / 0714 674 354 or email us insure@infama.com. Provide the Vehicle Make and Model , Vehicle value and Year of Manufacture for a quotation.",
      },
      {
        msg: "Once quote is approved the following is required: Vehicle Log book copy/ Purchase documents ( including all clearance and custom payments ) Copy of Pin certificate National Identification Card copy / Passport , For Companies the copy of Certificate of Incorporation",
      },
      {
        msg: "Appointment for vehicle valuation at an appointed valuer, after which updated premium quote is provided for payment",
      },
      {
        msg: "Make payment via MPESA Paybill: 822430, Account Number : YOUR NAME, Cheque Payable : INFAMA INSURANCE",
      },
      {
        msg: "Collection or delivery of the insurance certificate and stickers. Where applicable Road rescue membership cards issued within 7 days. *Terms and conditions apply*",
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