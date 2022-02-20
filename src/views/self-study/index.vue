<template>
  <div class="container">
    <h1 class="text-center">晚自習</h1>
    <v-tabs>
      <v-tab>當前申請狀況</v-tab>
      <v-tab>修改申請設定</v-tab>
      <v-tab to="/self-study/apply">
        範例申請表單
      </v-tab>
      <v-tab to="/self-study/checkin">
        簽到紀錄查閱
      </v-tab>
      <v-tab to="/self-study/checkin/三民高中第一自習室">
        範例自主簽到畫面
      </v-tab>
      <v-tab-item>
        <v-card
            flat
            class="px-2"
        >
          <apply-list />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
            flat
            class="px-2"
        >
        </v-card>
      </v-tab-item>
    </v-tabs>

  </div>
</template>

<script>
import applyList from "@/components/self-study/applyList";

export default {
  name: "dashboard",
  components: {
    applyList
  }
}
</script>

<style scoped>

</style>