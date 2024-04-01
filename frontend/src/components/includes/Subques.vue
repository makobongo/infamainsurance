<template>
  <v-card class="overflow-hidden" outlined>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      prominent
      :src="img"
      :lazy-src="img"
      height="650"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.5), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-row>
        <v-container fluid>
          <v-row>
            <v-col cols="5">
              <v-container>
                <v-row>
                  <v-col>
                    <v-card-text class="text-center">
                      <h1>
                        Do you have any questions?<br />Contact Us
                      </h1></v-card-text
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="7">
              <v-container>
                <v-card outlined color="black">
                  <v-card-text>
                    <form>
                      <v-row>
                        <v-col>
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              label="Name"
                              required
                              outlined
                              dense
                              color="yellow"
                              v-model="inq.name"
                            ></v-text-field>
                            <v-alert
                              text
                              prominent
                              type="error"
                              dense
                              icon="mdi-alert-circle-outline"
                              v-if="errors[0]"
                            >
                              {{ errors[0] }}
                            </v-alert>
                          </ValidationProvider>
                        </v-col>
                        <v-col>
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              label="E-mail"
                              required
                              outlined
                              dense
                              color="yellow"
                              v-model="inq.email"
                            ></v-text-field>
                            <v-alert
                              text
                              prominent
                              type="error"
                              dense
                              icon="mdi-alert-circle-outline"
                              v-if="errors[0]"
                            >
                              {{ errors[0] }}
                            </v-alert>
                          </ValidationProvider>
                        </v-col>
                        <v-col>
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              label="Phone No."
                              required
                              outlined
                              dense
                              color="yellow"
                              v-model="inq.phone"
                            ></v-text-field>
                            <v-alert
                              text
                              prominent
                              type="error"
                              dense
                              icon="mdi-alert-circle-outline"
                              v-if="errors[0]"
                            >
                              {{ errors[0] }}
                            </v-alert>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="3">
                          <v-select
                            :items="inquire_me"
                            label="Inquiring About?"
                            outlined
                            dense
                            color="yellow"
                          ></v-select>
                        </v-col>
                        <v-col cols="3">
                          <v-select
                            :items="reach_me"
                            label="Reach Me On:"
                            outlined
                            dense
                            color="yellow"
                          ></v-select>
                        </v-col>
                        <v-col>
                          <ValidationProvider
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <v-textarea
                              outlined
                              name="input-7-4"
                              label="Message"
                              color="#FFFF00"
                              dense
                              v-model="inq.message"
                            ></v-textarea>
                            <v-alert
                              text
                              prominent
                              type="error"
                              dense
                              icon="mdi-alert-circle-outline"
                              v-if="errors[0]"
                            >
                              {{ errors[0] }}
                            </v-alert>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <v-btn
                        class="mr-4"
                        color="yellow"
                        block
                        outlined
                        @click="submitData"
                      >
                        submit &nbsp;<v-icon small color="yellow"
                          >mdi-send-circle-outline</v-icon
                        ></v-btn
                      >
                    </form>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-container>
                <v-row>
                  <v-col>
                    <p v-for="(icn, i) in conts" :key="i">
                      <v-btn small depressed outlined
                        ><v-icon>{{ icn.icon }}</v-icon
                        >&nbsp;{{ icn.msg }}</v-btn
                      >
                    </p>
                  </v-col>
                  <v-col v-for="(msg, i) in msgs" :key="i"
                    >{{ msg.sm }} <br />
                    <ul>
                      <li v-for="(ms, i) in msg.links" :key="i">
                        <v-btn
                          x-small
                          rounded
                          :to="ms.url"
                          color="#DFFF00"
                          outlined
                          >{{ ms.cont }}</v-btn
                        >
                      </li>
                    </ul></v-col
                  >
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-app-bar>
    <v-sheet max-height="650">
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    inq:{},
    img: require("@/assets/home/infama-footer.jpg"),
    reach_me: ["Phone", "Email"],
    inquire_me: ["Insurance", "Rescue"],
    conts: [
      { icon: "mdi-home", msg: "INFAMA Insurance" },
      {
        icon: "mdi-map-marker-account",
        msg: "Mombasa Road, Nairobi",
      },
      { icon: "mdi-email-fast", msg: "insure@infama.com" },
      { icon: "mdi-phone", msg: "0709852000 / 0714674354" },
    ],
    msgs: [
      {
        sm: "Quick Links",
        links: [
          { cont: "Careers", url: "careers" },
          { cont: "Contact Us", url: "contact" },
          { cont: "FAQs", url: "faqs" },
        ],
      },
      {
        sm: "Personal Insurance",
        links: [
          { cont: "Motor Insurance", url: "motor" },
          { cont: "Property Insurance", url: "property" },
          { cont: "Health Insurance", url: "health" },
          { cont: "Travel Insurance", url: "travel" },
        ],
      },
      {
        sm: "Business Insurance",
        links: [
          { cont: "Fire Insurance", url: "business" },
          { cont: "Theft Insurance", url: "business" },
          { cont: "Burglary Insurance", url: "business" },
          { cont: "WIBA Insurace", url: "business" },
          { cont: "GPA Insurance", url: "business" },
        ],
      },
    ],
  }),
  methods: {
    submitData() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Success!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>