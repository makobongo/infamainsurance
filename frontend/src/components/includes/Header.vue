<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title
        ><img alt="INFAMA Logo" src="@/assets/logo.png" lazy-src="@/assets/logo.png"
      /></v-toolbar-title>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <v-row>
        <!-- <v-btn depressed v-for="(link, i) in links" :key="i" :to="link.url">
              <b>{{ link.name }}</b>
            </v-btn> -->
        <v-hover
          v-slot="{ hover }"
          v-for="(link, i) in links"
          :key="i"
          :to="link.url"
        >
          <v-btn
            class="black--text mx-1 px-6"
            elevation="2"
            x-small
            rounded
            depressed
            outlined
            :style="{ 'color': hover ? 'red' : 'black' }"
            :to="link.url"
            >{{ link.name }}</v-btn
          >
        </v-hover>
      </v-row>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    links: [
      { name: "home", url: "home" },
      { name: "motor", url: "motor" },
      { name: "property", url: "property" },
      { name: "health", url: "health" },
      { name: "travel", url: "travel" },
      { name: "business insurance", url: "business" },
      { name: "road rescue", url: "rescue" },
      { name: "contact", url: "contact" },
    ],
  }),
};
</script>