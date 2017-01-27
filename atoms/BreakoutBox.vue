<template>
    <div v-if="helpText" class="gel-break-out-box">
      <h4>{{ helpText }}</h4>
      <p v-if="helpTextDetails">{{ helpTextDetails }}</p>
    </div>
</template>

<script>
  export default {
    props: ["helpText", "helpTextDetails"]
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-break-out-box {
    background: #ccc;
    padding: 8px;
    width: 100%;
  }
</style>