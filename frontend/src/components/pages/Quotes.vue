<template>
  <div>
    <v-card outlined>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text class="text-center">
                <v-row>
                  <v-col>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <v-text-field
                        label="Name"
                        outlined
                        v-model="quote.name"
                        dense
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
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <v-text-field
                        label="Email"
                        outlined
                        v-model="quote.email"
                        dense
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
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <v-text-field
                        label="Phone"
                        outlined
                        v-model="quote.phone"
                        dense
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
                    <v-select
                      :items="items"
                      label="Cover type"
                      outlined
                      dense
                      v-model="quote.cover"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn small color="yellow" @click="submitData"
                      >submit</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-card-text class="justify-center">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                  <v-card outlined>
                    <v-card-title class="justify-center"
                      ><h2>Our Quote`s Process</h2></v-card-title
                    >
                    <v-card-text>
                      <v-row>
                        <v-col v-for="(msg, i) in msgs" :key="i">
                          <v-card outlined>
                            <v-card-title class="justify-center">
                              <v-btn fab color="yellow" depressed
                                ><v-icon large>{{ msg.icon }}</v-icon></v-btn
                              >
                            </v-card-title>
                            <v-card-text class="text-center"
                              ><h3>
                                {{ msg.cont1 }} <br />{{ msg.cont2 }}
                              </h3></v-card-text
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
export default {
  data: () => ({
    quote: {},
    items: [
      "motor insurance",
      "property insurance",
      "health insurance",
      "travel insurance",
      "Business insurance",
      "Road Rescue",
    ],
    src: require("@/assets/contact/contact-top.df6e02af6206512d7e23.jpg"),
    msgs: [
      {
        cont1: "1",
        cont2: "Fill Form",
        icon: "mdi-draw-pen",
      },
      {
        cont1: "2",
        cont2: "Submit Form",
        icon: "mdi-check-circle-outline",
      },
      {
        cont1: "3",
        cont2: "Receive Feedback",
        icon: "mdi-message-reply-text-outline",
      },
    ],
  }),
  methods: {
    submitData() {
      // this.$swal("Hello Vue world!!!");
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
<style>
.header-text {
  font-size: 40px;
  font-weight: bold;
  color: black;
}
</style>