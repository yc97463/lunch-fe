<template>
  <div>
    <v-text-field
        prepend-icon="mdi-account"
        label="申請人"
        hint="此欄位僅供核對用，無法修改。"
        persistent-hint
        type="text"
        value="奶茶先生"
        disabled
    ></v-text-field>
    <v-select
        prepend-icon="mdi-calendar"
        v-model="e7"
        :items="weekly"
        label="留讀日"
        multiple
        chips
        hint="請選擇留讀日"
        persistent-hint
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "applyForm",
  data () {
    return {
      e7: [],
      weekly: [
          '一', '二', '三', '四', '五'
      ]
    }
  }
}
</script>

<style scoped>

</style>