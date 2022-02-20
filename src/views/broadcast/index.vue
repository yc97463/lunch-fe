<template>
  <div class="container">
    <v-tabs>
      <v-tab>所有校內推播訊息</v-tab>
      <v-tab>發布新推播訊息</v-tab>
      <v-tab to="/broadcast/rieusjf">
        範例推播訊息
      </v-tab>
      <v-tab-item>
        <v-card
            flat
            class="px-2"
        >
          <news-list />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          flat
          class="px-2"
        >
          <post-form />
        </v-card>
      </v-tab-item>
    </v-tabs>

  </div>
</template>

<script>
import newsList from "@/components/broadcast/newsList"
import postForm from "@/components/broadcast/postForm";

export default {
  name: "list",
  components: {
    newsList, postForm,
  },
}
</script>

<style scoped>

</style>