<template>
  <div class="container">
    <v-card
        class="mx-auto my-7"
        color="light"
        width="700px"
    >
      <v-card-title>
        哈囉哈囉，歡迎回來 &#62;&#60;
      </v-card-title>
      <v-card-text>
        <v-alert
          type="warning"
        >
          請直接使用學校的 Google 帳號登入！
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <div class="justify-center align-center">
          <v-btn
              elevation="2"
              color="primary"
          >
            透過 Google 登入
          </v-btn>
          <v-btn
              elevation="0"
              color="white"
          >
            透過 LINE 登入
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>