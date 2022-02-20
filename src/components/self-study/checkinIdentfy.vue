<template>
  <div>
    <v-text-field
        prepend-icon="mdi-account"
        label="簽到者"
        type="text"
        value="黃油成"
        disabled
    ></v-text-field>
    <v-text-field
        prepend-icon="mdi-clock"
        label="簽到時間"
        type="time"
        value=""
        disabled
    ></v-text-field>

  </div>
</template>

<script>
export default {
  name: "checkinIdentfy"
}
</script>

<style scoped>

</style>