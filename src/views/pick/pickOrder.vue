<template>
  <div class="container my-7">
    <div class="text-center">
      <h1>{{orderId}}</h1>
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
            <v-card-title class="text-center">
              取餐
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
              <div class="row">
                <div class="d-flex justify-start col">
                  <v-btn
                      block
                      to="/pick"
                      color="white"
                  >
                    返回取餐列表
                  </v-btn>
                </div>
                <div class="d-flex justify-end col">
                  <v-btn
                      color="primary"
                      property="2"
                      block
                  >
                    確認取餐
                  </v-btn>
                </div>
              </div>


            </v-card-actions>
          </v-card>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pickOrder",
  computed: {
    orderId() {
      return this.$route.params.orderId
    }
  }
}
</script>

<style scoped>

</style>