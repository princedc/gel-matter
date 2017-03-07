<template>
    <span class="gel-label">
        <slot />
    </span>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../common";

  .gel-label {
    text-transform: uppercase;
    background-color: #e6711b;
    color: white;
    padding: 0 3px;

    @include gel-typography('minion-bold');

    .is-invalid & {
      color: red;
    }
  }
</style>
