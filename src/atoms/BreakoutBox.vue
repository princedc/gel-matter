<template>
    <div class="gel-breakout-box">
      <gel-icon class="gel-icon gel-icon--inline" color="#404040" set="core" icon="info" size="small" />
      <slot></slot>
    </div>
</template>

<script>
  import GelIcon from '../atoms/Icon.vue';

  export default {
    components: { GelIcon },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-breakout-box {
    background: #dcdcdc;
    padding: 8px;
    width: 100%;

    p {
      overflow: hidden;
      margin: 0px;
      font-weight: normal;
      @include gel-typography('long-primer');
      color: #404040;
    }

    .gel-icon {
      float: left;
      display: inline;
      margin-right: 8px;
    }
  }
</style>
