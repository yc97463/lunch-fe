<template>
  <div class="container mx-auto">
    <v-card
        class="mx-auto my-2"
        color="light"
        width="700px"
    >
      <v-card-title>
        早ㄚ，今天想發點什麼呢
      </v-card-title>
      <v-card-text>
        <v-text-field
            prepend-icon="mdi-account"
            label="發布人"
            hint="此欄位僅供核對用，無法修改。"
            persistent-hint
            type="text"
            value="訓育組"
            disabled
        ></v-text-field>
        <v-select
            prepend-icon="mdi-bell-ring-outline"
            v-model="e7"
            :items="weekly"
            label="推送範圍"
            multiple
            chips
            hint="請選擇推送範圍"
            persistent-hint
        ></v-select>
        <v-text-field
            prepend-icon="mdi-pencil-outline"
            label="推播標題"
            type="text"
        ></v-text-field>
        <v-textarea
            prepend-icon="mdi-pencil"
            name="input-7-1"
            label="推播訊息內文"
            auto-grow
            counter
        ></v-textarea>
        <v-file-input
            prepend-icon="mdi-camera"
            multiple
            label="內置圖檔（不限張數）"
            hint="點按選擇、上傳內置圖檔"
            persistent-hint
        ></v-file-input>
        <v-text-field
            prepend-icon="mdi-link-variant"
            label="外部連結"
            hint="分享大檔，請善用雲端硬碟。"
            type="url"
            placeholder="請在此貼上網站或雲端檔案分享連結。"
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-alert type="warning">
          請注意，一經推送的訊息即無法進行任何修改。
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <div class="row">
          <div class="d-flex justify-sm-start col">
            <v-switch
                inset
                v-model="autosave"
                :label="`自動暫存於此瀏覽器`"
            ></v-switch>
          </div>
          <div class="d-flex justify-end col align-center">
            <v-btn
                elevation="0"
                color="white"
            >
              清除表單
            </v-btn>
            <v-btn
                elevation="2"
                color="primary"
            >
              確認發布
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "postForm",
  data () {
    return {
      e7: [],
      weekly: [
        '高一', '高二', '高三', '教職員'
      ],
      autosave: true
    }
  }
}
</script>

<style scoped>

</style>