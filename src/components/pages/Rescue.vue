<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined
          ><h1>Rescue Insurance</h1></v-btn
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
                    INFAMA is a premier road rescue provider , providing its
                    members with a 24 Hour professional , customer centric
                    service that focuses on relieving the stress and
                    inconvenience caused by vehicle break downs and accidents.
                    Road Rescue-Services are offered within Greater Nairobi 30KM
                    from the Central Business District. Services beyond the
                    scope of cover are facilitated and catered for by third
                    party providers at an additional cost. The service is
                    available for vehicles upto 2.5 Tonnes. The Road Rescue
                    Membership service is either vehicle or individual based.
                    Allowing the member to pick what suites their lifestyle.
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
                      >Enjoy the most Comprehensive Road Rescue Package in the
                      industry with INFAMA’s Road Rescue with
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
                      ><v-btn outlined small rounded color="black"
                        ><h5>
                          <b>{{ sbtmm.title }}</b>
                        </h5></v-btn
                      ></v-card-title
                    >
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
                  <h4>Road Rescue</h4>
                </v-card-title>
                <v-card-text>
                  <v-img max-height="250" max-width="250" :src="sdr" :lazy-src="sdr"></v-img>
                  <v-card-title class="justify-center">
                    <h5>How do I buy</h5>
                    <h3><b>Road Rescue?</b></h3>
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
    src: require("@/assets/rescue/infama-insurance-services-kenya-2.9238a8b512226bfacb50.jpg"),
    mtr: require("@/assets/rescue/rescue-m.jpg"),
    sdr: require("@/assets/rescue/rescue-b.jpg"),
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
        title: "24hr Car Breakdown Rescue",
        src: require("@/assets/rescue/rescue-1.jpg"),
        sub: "This cover includes:-",
        msg: [
          { cont: "Battery Jumpstarting" },
          { cont: "Flat tyre change(repair of flat tyre is at members cost)" },
          { cont: "Locked keys retrieval" },
          { cont: "Fuel delivery (cost of fuel borne by member)" },
          { cont: "Mechanical and electrical first aid" },
          { cont: "24 Hour Towing and Recovery" },
          {
            cont: "Unlimited Towing and recovery with use of specialised hydraulic lift trucks within service area where the vehicle cannot move on its own power",
          },
          { cont: "We do not repair/drive members' vehicles" },
        ],
      },
      {
        title: "24hr Accident Rescue",
        src: require("@/assets/rescue/rescue-2.jpg"),
        sub: "Special Insurance programs for Groups:-",
        msg: [
          {
            cont: "Reporting and assisting with police and third parties at accident scene",
          },
          { cont: "Collection of insurance and contact details at the scene" },
          { cont: "Towing and recovery if vehicle cannot move" },
          {
            cont: "Ambulance for principle member at the scene in case of injury",
          },
          { cont: "24 Hour Towing" },
          {
            cont: "Coordination of Medical Emergency response in the event of injuries sustained from accidents",
          },
          { cont: "Subject to Service Provider Terms and Conditions" },
        ],
      },
      {
        title: "24hr Post Theft Assistance",
        src: require("@/assets/rescue/rescue-3.jpg"),
        sub: "This cover includes :-",
        msg: [
          { cont: "Assist with reporting to the police after a car theft" },
          {
            cont: "Transportation from scene of abandonment to one destination of choice and ambulance for principle member in case of injury",
          },
          {
            cont: "Towing and recovery if vehicle is recovered and cannot move",
          },
          { cont: "Advice on police procedures in obtaining an abstract" },
          { cont: "Relay urgent messages to family and colleagues" },
        ],
      },
    ],
    msgs4: [
      {
        msg: "Call or Email us for information on service and requirements",
      },
      {
        msg: "Talk to Us on 0709 852 000 / 0714 674 354 or email us on insure@infama.com on your membership cover requirements",
      },
      {
        msg: "Fill out the Membership Form and make payment for the cover as per our quotation: MPESA Paybill: 822430, Account Number : CAR REGISTRATION No., Bank RTGS ( bank details available on request)",
      },
      {
        msg: "Enjoy Rescue Services once payment is received and confirmed.",
      },
      {
        msg: "Your receipt and membership starter pack to follow. It includes stickers, telephone contacts, procedures and Membership card (which will take a few days)*",
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