<template>
  <div class="container my-7">
    <h1 class="text-center">申請晚自習座位</h1>
    <v-card
        class="mx-auto my-2"
        color="light"
        width="700px"
    >
      <v-card-title>
        title，還沒想好要放什麼
      </v-card-title>
      <v-card-text>
        <p>
          校方一串字的公告
        </p>
        <apply-form />
      </v-card-text>
      <v-card-actions>
        <v-btn
            elevation="2"
            color="primary"
            block
        >
          送出申請
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
import applyForm from "@/components/self-study/applyForm";
export default {
  name: "apply",
  components: {
    applyForm
  }
}
</script>

<style scoped>

</style>