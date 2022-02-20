<template>
  <div class="container my-7">
    <h1 class="text-center">自習區自主簽到</h1>
    <v-card
        class="mx-auto my-2"
        color="light"
        width="700px"
    >
      <v-card-title>
        {{ roomId }}
      </v-card-title>
      <v-card-text>
        <p>
          校方一串字的公告
        </p>
        <v-alert type="info">
          請確認以下簽到資訊，一經送出即無法進行任何修改。
        </v-alert>
        <checkin-identfy />
      </v-card-text>
      <v-card-actions>
        <v-btn
            elevation="2"
            color="primary"
            block
        >
          點按簽到
        </v-btn>
        <div class="row">
          <div class="d-flex justify-start col">

          </div>
          <div class="d-flex justify-end col">

          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import CheckinIdentfy from "@/components/self-study/checkinIdentfy";
export default {
  name: "checkin",
  components: {CheckinIdentfy},
  computed: {
    roomId() {
      return this.$route.params.roomId
    }
  }
}
</script>

<style scoped>

</style>