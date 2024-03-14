<template>
  <div id="app">
    <v-app>
      <v-card color="grey lighten-4" flat height="200px" tile>
        <Header/>
        <br />
        <!-- router outlet -->
        <v-container fluid>
          <router-view></router-view>
          <Inquiries/>
          <Subques/>
        </v-container>
        <Footer/>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import { Subques,Footer,Header, Inquiries } from './components/includes';
export default {
  components: {
    Subques,
    Footer,
    Header,
    Inquiries
  }
};
</script>