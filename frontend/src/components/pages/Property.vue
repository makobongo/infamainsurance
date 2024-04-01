<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined
          ><h1>Property Insurance</h1></v-btn
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
                    You have worked so hard and invested in property , so why
                    not ensure that you protect it with the right Property or
                    Home insurance cover. Property insurance provides either
                    property protection coverage or liability coverage. Property
                    insurance provides financial reimbursement to the owner or
                    renter of a structure and its contents in case there is
                    damage or theft, and to a person other than the owner or
                    renter if that person is injured on the property.
                  </h4></v-col
                >
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-img :src="mtr" :lazy-src="mtr" class="grey darken-4"> </v-img>
                </v-col>
                <v-col cols="8">
                  <v-card outlined>
                    <v-card-title>Insurance covers:</v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <ul v-for="(msg, i) in msgs1" :key="i">
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
    src: require("@/assets/property/infama-insurance-services-kenya-7.3dcb8d9794ed812f48d5.jpg"),
    mtr: require("@/assets/property/property-m.jpg"),
    sdr: require("@/assets/property/property-b.jpg"),
    msgs1: [
      { msg: "Home/Domestic Insurance" },
      { msg: "Property/ Home owners Insurance" },
      { msg: "Accidental loss or damage to residential homes and contents" },
      { msg: "Valuable items carried or work" },
      { msg: "Personal Liability for household members" },
      { msg: "Includes Work Injury Benefit for household staff" },
    ],
    msgs3: [
      {
        title: "Protection Against",
        src: require("@/assets/property/property-1.jpg"),
        msg: [
          {
            cont: "Loss of or damage to buildings and landlord’s fixtures and fittings as a result of fire and special perils",
          },
          { cont: "Loss of or damage to contents (all risks)" },
          {
            cont: "External television, and radio antennae, aerial fittings, masts and towers",
          },
          {
            cont: "Death benefit for insured, spouse and children below 21 years of age residing with the insured",
          },
          {
            cont: "Work injury benefits act insurance extension (domestic staff)",
          },
          {
            cont: "Owner’s and Occupier's personal liability",
          },
          {
            cont: "24 Hour Helpline",
          },
          {
            cont: "24 Hour ambulance and emergency medical expenses",
          },
          {
            cont: "Emergency home repairs",
          },
          {
            cont: "Additional expense of alternative accommodation and loss of rent",
          },
        ],
      },
      {
        title: "Indemnity Against",
        src: require("@/assets/property/property-2.jpg"),
        msg: [
          { cont: "Fire, Lightning, Thunderbolt, Earthquake, Volcanic" },
          { cont: "Eruption, Flood and Explosion" },
          { cont: "Riot and Strike" },
          {
            cont: "Aircraft or other Aerial Device or any article dropped therefrom",
          },
          { cont: "Bursting and Overflowing of water tank apparatus or pipe" },
          {
            cont: "Theft accompanied by actual forcible and violent breaking into or out of the building",
          },
          {
            cont: "Impact by any road vehicle or animal not belonging to the insured",
          },
          { cont: "Falling Trees and Branches" },
          { cont: "Storm or Tempest" },
          { cont: "Debris Removal" },
          {
            cont: "Municipal Council charges for extinguishing any fire affecting the premises",
          },
          {
            cont: "Additional expense of Alternative Accommodation and Loss of Rent",
          },
        ],
      },
      {
        title: "Exclusions",
        src: require("@/assets/property/property-3.jpg"),
        msg: [
          {
            cont: "War, Invasion, War like operations (whether war be declared or not) Civil War",
          },
          {
            cont: "Commandeering, Confiscation, Destruction by order of the Government or other lawful Authority",
          },
          {
            cont: "Consequential Loss of any kind except as provided under Loss of Rent and alternative accommodation",
          },
          { cont: "Nuclear Weapons Material" },
          {
            cont: "Pressure Waves caused by aircraft and other aerial devices travelling at Supersonic speeds",
          },
          {
            cont: "Compensation for damages in respect of judgements obtained in the first instance otherwise than by a court of competent jurisdiction in Kenya",
          },
          {
            cont: "Costs and expenses of litigation recovered by any claimant from the insured which are not incurred in and recoverable in Kenya",
          },
          { cont: "Terrorism" },
          { cont: "Pollution and Contamination" },
          {
            cont: "Liability in connection with disposed or dumped waste materials or substances.",
          },
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