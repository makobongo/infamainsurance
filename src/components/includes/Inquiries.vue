<template>
  <div>
    <v-card outlined color="black">
      <v-container>
        <v-card-text class="text-center">
          <v-row>
            <v-col class="inquries-text" v-for="(inq, i) in inqs" :key="i">
              <v-icon color="yellow">{{ inq.icon }}</v-icon
              >&nbsp;{{ inq.msg }}
              <br />
              {{ inq.email }}</v-col
            >
          </v-row>
        </v-card-text>
      </v-container>
    </v-card>
    <v-spacer></v-spacer>
  </div>
</template>
<script>
export default {
  data: () => ({
    inqs: [
      { icon: "mdi-phone-classic", msg: "Call Us", email: "0737433760 / 0709852000" },
      {
        icon: "mdi-email-fast",
        msg: "Insurance Inquiries",
        email: "insure@infama.com",
      },
      {
        icon: "mdi-email-fast",
        msg: "Claims Inquiries",
        email: "claims@infama.com",
      },
      {
        icon: "mdi-email-fast",
        msg: "Other inquiries",
        email: "insurance@infama.com",
      },
    ],
  }),
};
</script>
<style scoped>
.inquries-text {
  color: #ffff00;
}
.inquries-color {
  background-color: #000000;
}
</style>