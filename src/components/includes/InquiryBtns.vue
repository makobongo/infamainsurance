<template>
  <div class="d-flex align-end flex-column mr-10 mt-12">
    <div class="pa-4" outlined v-for="name in quoteBtn" :key="name.btn">
      <v-btn color="red"  @click.stop="quote = true" small rounded>
        {{ name.btn }}<v-icon large>mdi-menu-right</v-icon>
      </v-btn>
      <v-dialog v-model="quote" max-width="500">
        <v-card>
          <v-card-title class="justify-center">
            <h4>Choose a Product</h4>
          </v-card-title>

          <v-card-text>
            <v-row class="mt-5 mb-5">
              <v-col
                cols="4"
                class="mt-5 mb-5"
                v-for="btn in btns"
                :key="btn.sub"
              >
                <v-hover v-slot="{ hover }">
                  <v-btn
                  outlined
                    :style="{ 'background-color': hover ? 'red' : 'yellow' }"
                    height="120"
                    width="120"
                    to="quotes"
                  >
                    <h3>{{ btn.name }}</h3>
                  </v-btn>
                </v-hover>
                <!-- <v-btn class="v-btnn" :to="btn.url">
                  <v-card
                    ><v-card-title class="justify-center">
                      <h1>{{ btn.sub }}</h1> </v-card-title
                    ><v-card-title class="justify-center">{{
                      btn.name
                    }}</v-card-title></v-card
                  >
                </v-btn> -->
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green"
              outlined
              x-small
              class="mt-3"
              @click="quote = false"
            >
              <v-icon small>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div class="pa-4" outlined v-for="name in claimBtn" :key="name.btn">
      <v-btn color="red"  @click.stop="claim = true" small rounded>
        {{ name.btn }}<v-icon large>mdi-menu-right</v-icon>
      </v-btn>
      <v-dialog v-model="claim" max-width="500">
        <v-card>
          <v-card-title class="text-h5 justify-center" > Claims </v-card-title>

          <v-card-text class="text-center">
            Get started with claims
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="black" text @click="dialog = false" outlined rounded x-small>
              submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div class="pa-4" outlined v-for="name in feedbackBtn" :key="name.btn">
      <v-btn color="red"  @click.stop="feedback = true" small rounded>
        {{ name.btn }}<v-icon large>mdi-menu-right</v-icon>
      </v-btn>
      <v-dialog v-model="feedback" max-width="500">
        <v-card>
          <v-card-title class="text-h5 justify-center"> Feedback </v-card-title>

          <v-card-text class="text-center">
            Submit your feedback
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="black" outlined rounded small text @click="dialog = false">
              submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    quote: false,
    claim: false,
    feedback: false,
    quoteBtn: [{ btn: "Get a Quote" }],
    claimBtn: [{ btn: "Claims" }],
    feedbackBtn: [{ btn: "Feedback" }],
    btns: [
      { sub: "M", name: "motor", url: "motor" },
      { sub: "B", name: "business", url: "business" },
      { sub: "P", name: "property", url: "property" },
      { sub: "T", name: "travel", url: "travel" },
      { sub: "H", name: "health", url: "health" },
      { sub: "R", name: "rescue", url: "rescue" },
    ],
  }),
};
</script>
<style scoped>
.v-btnn {
  width: 110px;
  min-height: 110px;
}
</style>