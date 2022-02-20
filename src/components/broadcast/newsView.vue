<template>
  <div class="container my-7">
    <h1 class="text-center">校內訊息</h1>
    <v-card
        class="mx-auto my-2"
        color="light"
        width="700px"
    >
      <v-card-title>
        【活動】2022/02/15 學長姐將到校傳教，歡迎報名。
      </v-card-title>
      <v-card-text>
        <p>
          {{broadcastId}}，這是動態路由窩❤️
        </p>
        <v-img
            :src="`https://s3.ap-northeast-1.amazonaws.com/assets-cip.deershark.com/broadcast/15553608613430.jpg`"
            :lazy-src="``"
            aspect-ratio="1"
            class="grey lighten-2"
        ></v-img>


      </v-card-text>
      <v-card-actions>
        <div class="row">
          <div class="d-flex justify-start col">
            <v-chip
                class="ma-2"
                small
            >
              僅限校內可閱覽
            </v-chip>
          </div>
          <div class="d-flex justify-end col align-center">
            <span class="caption ma-2">
              2022/02/10 13:15:44
            </span>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "newsView",
  computed: {
    broadcastId() {
      return this.$route.params.broadcastId
    }
  }
}
</script>

<style scoped>

</style>