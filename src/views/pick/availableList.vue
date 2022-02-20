<template>
  <div class="container my-7">
    <div class="text-center">
      <h1>取餐列表</h1>
      <p>
        <v-chip>
          班級：307
        </v-chip>
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <v-card
              class="mx-auto my-2"
              color="light"
              width="450px"
          >
            <v-card-title>
              御饌坊
            </v-card-title>
            <v-card-text class="text-center align-center">
              <v-btn
                  elevation="0"
                  fab
                  x-large
                  color="white"
                  style="font-size: 88px;"
                  class="my-15"
              >
                14份
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  color="primary"
                  property="2"
                  block
                  to="/pick/御饌坊"
              >
                我要領這個
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>