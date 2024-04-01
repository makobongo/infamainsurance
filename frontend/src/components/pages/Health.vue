<template>
  <div>
    <v-card outlined>
      <v-card-title class="justify-center">
        <v-btn color="black" depressed outlined
          ><h1>Health Insurance</h1></v-btn
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
                    INFAMA Health insurance plans cater for the needs of
                    individuals, families, affinity groups, organisations ,
                    employees and international travellers and provide a variety
                    of benefits for the insured. Group Health Insurance Schemes
                    meet the unique requirements of organisations and provide
                    benefits based on various categories of staff and the
                    flexibility of adding as many extra benefits as required.
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
                  <h4>Health Insurance</h4>
                </v-card-title>
                <v-card-text>
                  <v-img max-height="250" max-width="250" :src="sdr" :lazy-src="sdr"></v-img>
                  <v-card-title class="justify-center">
                    <h5>How do I buy</h5>
                    <h3><b>Health Insurance?</b></h3>
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
    src: require("@/assets/health/health-top.478bb8cd9711de81c048.jpg"),
    mtr: require("@/assets/health/health-m.jpg"),
    sdr: require("@/assets/health/health-b.jpg"),
    msgs1: [
      { msg: "Inpatient Benefits" },
      { msg: "Outpatient Benefits" },
      { msg: "Chronic Illness benefits" },
      { msg: "Personal Accidental Death" },
      { msg: "Dental and Optical Cover" },
    ],
    msgs2: [
      { msg: "Psychiatric treatment" },
      { msg: "Emergency medical evacuation" },
      { msg: "Home Nursing following discharge of terminal ailments" },
      { msg: "Special schemes for senior citizens" },
    ],
    msgs3: [
      {
        title: "Insured Categories",
        src: require("@/assets/health/health-1.jpg"),
        msg: [
          { cont: "Individuals and Families, New born - upto 75yrs" },
          { cont: "Students" },
          { cont: "Employees" },
          { cont: "Affinity Groups – Chamas, Extended Family" },
          { cont: "Religious Groups – Members , Employees" },
          { cont: "Companies and Institutions" },
          {
            cont: "Self Fund Outpatient Options",
          },
        ],
      },
      {
        title: "In and Outpatient Benefits",
        src: require("@/assets/health/health-2.jpg"),
        msg: [
          { cont: "Standard and Enhanced covers" },
          { cont: "Diagnostic examinations , injections and procedures" },
          { cont: "Pre-existing and congenital conditions" },
          { cont: "Maternity Pre, Post and Ante Natal" },
          { cont: "Baby Friendly vaccines" },
          { cont: "Dental and Ophthalmology" },
          { cont: "Psychiatric Cover" },
          {
            cont: "HIV services",
          },
        ],
      },
      {
        title: "Other Benefits",
        src: require("@/assets/health/health-3.jpg"),
        msg: [
          { cont: "Annual Well Person Checkup" },
          { cont: "Rehabilitation Cover" },
          { cont: "Home Care Services" },
          { cont: "Funeral Expenses" },
          { cont: "International Emergency Cover" },
          { cont: "Oversees Evacuation and Treatment" },
          { cont: "Pre-Accident Cover" },
        ],
      },
    ],
    msgs4: [
      {
        msg: "Call us on 0709 852 000 / 0714 674 354 or email health@infama.com with a request to provide a quotation",
      },
      {
        msg: "Provide the information required i.e. individual, family, Employee, Group Names, number of dependants, Ages and required benefits and limits of cover",
      },
      {
        msg: "Get a quotation",
      },
      {
        msg: "Fill the proposal forms and provide the required documents",
      },
      {
        msg: "Make payment via MPESA Paybill: 822430, Account Number : YOUR NAME, Cheque Payable : INFAMA INSURANCE*",
      },
      {
        msg: "Receive Medical Cards once processed*",
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