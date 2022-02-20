<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="container">
        <div class="d-flex align-center">
          揪餐小幫手
          <!--        <v-img
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
                  />-->

          <v-btn
              to="/portal"
              text
          >
            功能首頁
          </v-btn>
          <v-btn
              to="/account/login"
              text
          >
            帳戶管理
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <!--<v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>-->
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
        padless
        color="gray"
    >
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} &#169; <strong>Deershark Technology Studio.</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links: [
        'Home'
    ]
  }),
};
</script>
