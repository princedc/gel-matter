<template>
  <button class="gel-button">
    <slot/>
  </button>
</template>

<script>
  // ...
</script>

<style lang="sass" rel="stylesheet/scss">
  @import '../common';

  .gel-button {
    border: solid 1px #404040;
    padding: 16px;
    @include gel-typography('double-pica');
  }
</style>
