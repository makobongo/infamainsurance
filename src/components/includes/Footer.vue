<template>
  <div>
    <v-card color="black" outlined>
      <v-card-text class="text-center">
        <v-row>
          <v-col class="footer-text"
            >Copyright © {{ currentYear }} |
            <v-btn color="yellow" depressed x-small outlined
              >INFAMA INSURANCE</v-btn
            ></v-col
          >
          <v-col class="footer-text">
            <v-btn
              class="mx-2"
              fab
              dark
              x-small
              color="yellow"
              v-for="(link, i) in socialLinks"
              :key="i"
              :href="link.link"
              target="_blank"
            >
              <v-icon dark small color="black">{{ link.icon }}</v-icon>
            </v-btn>
          </v-col>
          <v-col class="footer-text">
            <v-btn color="yellow" depressed x-small outlined rounded
              >Terms and Conditions</v-btn
            >
            | Privacy Policy | <v-btn x-small color="yellow" href="https://gitlab.com/makobongo" target="_blank" outlined depressed rounded >Designer's Desk</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    socialLinks: [
      { icon: "mdi-facebook", link: "https://www.facebook.com/INFAMAGroup/" },
      { icon: "mdi-instagram", link: "https://www.instagram.com/infamagroup/" },
      { icon: "mdi-twitter", link: "https://twitter.com/infamagroup" },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/company/11364391/",
      },
    ],
  }),
  computed: {
    currentYear() {
      let currYear = new Date().getFullYear();
      return currYear;
    },
  },
};
</script>
<style scoped>
.footer-text {
  color: #ffff00;
}
</style>