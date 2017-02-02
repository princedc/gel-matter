<template>
    <div v-if="helpText" class="gel-break-out-box">
      <gel-icon class="gel-icon gel-icon--inline" set="core" icon="info" size="small" />
      <h4>{{ helpText }}</h4>
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
    background: #dcdcdc;
    padding: 8px;
    width: 100%;
    @include gel-typography('brevier');

    h4 {
      overflow: hidden;
      margin: 0px;
      font-weight: normal;
      @include gel-typography('long-primer');
    }

    p {
      margin: 8px 0px 0px 0px;
    }

    .gel-icon {
      float: left;
      display: inline;
      margin: 0px 8px 0px 0px;
    }

    .gel-icon--inline {
      width: 16px;
      height: 16px;
      position: relative;
      top: 2px;
    }
  }
</style>