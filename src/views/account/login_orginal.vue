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
        <v-text-field
            prepend-icon="mdi-account"
            hint="早餐喝什麼呢"
            placeholder="奶茶好喝❤️"
            label="帳號"
            type="text"
        ></v-text-field>
        <v-text-field
            prepend-icon="mdi-key"
            hint="午餐想吃啥咧"
            placeholder="油條好吃🤤"
            label="密碼"
            type="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <div class="row">
          <div class="d-flex justify-start col">
            <v-btn
                elevation="0"
                color="white"
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
          <div class="d-flex justify-end col">
            <v-btn
                elevation="0"
                color="white"
            >
              忘記密碼
            </v-btn>
            <v-btn
                elevation="2"
                color="primary"
            >
              登入
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>