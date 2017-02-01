<template>
    <div v-if="helpText" class="gel-break-out-box">
      <h4><gel-icon class="gel-icon" set="core" icon="info" size="small" />{{ helpText }}</h4>
      <p v-if="helpTextDetails">{{ helpTextDetails }}</p>
    </div>
</template>

<script>
  import GelIcon from '../atoms/Icon.vue';

  export default {
    components: {GelIcon},
    props: ["helpText", "helpTextDetails"]
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-break-out-box {
    background: #ccc;
    padding: 8px;
    width: 100%;
    @include gel-typography('brevier');

    .gel-icon {
      margin: 0px 8px 0px 0px;
    }
  }
</style>