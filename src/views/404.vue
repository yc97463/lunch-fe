<template>
  <div class="container my-7">
    <h1 class="text-center">404 Not Found!</h1>
    <v-card
        class="mx-auto my-2"
        color="light"
        width="700px"
    >
      <v-card-title>
        網頁找不到QQ
      </v-card-title>
      <v-card-text>
        <p>
          早！網頁找不到。
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          to="/portal"
          class="mx-auto"
        >
          回到可愛ㄉ首頁
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  computed: {
    broadcastId() {
      return this.$route.params.broadcastId
    }
  }
}
</script>

<style scoped>

</style>