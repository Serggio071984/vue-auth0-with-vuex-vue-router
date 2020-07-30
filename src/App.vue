<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text  class="mr-2" > Home </v-btn>
      <v-btn to="/about"  text  class="mr-2" > About </v-btn>
      <v-btn to="/contact" text  class="mr-2" > Contact </v-btn>
      <v-btn to="/members"  text  class="mr-2" > Members  </v-btn>
      <v-btn @click="logout" v-if="this.$store.state.userIsAuthorized">LogOut</v-btn>
    </v-app-bar>

    <v-main>
      {{clientid}}
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    
  },
  data() {
    return{
      clientid: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN
    }
  },
  methods:{
    logout(){
      
    }
  },
  beforeCreate(){

  }
};
</script>
