<template>
  <div class="container my-7">
    <div class="text-center">
      <h1>{{orderId}} 揪餐囉</h1>
      <p>
        發起人：YC
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
              product_name
            </v-card-title>
            <v-card-text>
              <v-img
                  :src="`https://s3.ap-northeast-1.amazonaws.com/assets-cip.deershark.com/order/SCR-20220220-es.jpeg`"
                  :lazy-src="``"
                  aspect-ratio="1"
                  class="grey lighten-2"
              ></v-img>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                property="2"
                block
              >
                我要這個
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
  name: "orderView",
  computed: {
    orderId() {
      return this.$route.params.orderId
    }
  }
}
</script>

<style scoped>

</style>