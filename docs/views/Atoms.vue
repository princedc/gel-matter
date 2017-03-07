<template>
  <div class="gel-layout">
    <div class="gel-layout__item">

      <h2>Atoms</h2>

      <div class="gel-layout">
        <div class="gel-layout__item">
          <h3>GEL Button</h3>
          <gel-button>Submit</gel-button>
        </div>

        <div class="gel-layout__item">
          <h3>Breakout Box</h3>
          <gel-breakout-box>My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.</gel-breakout-box>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import * as Atoms from '../../src/atoms';

  export default {
    components: { ...Atoms },
  };
</script>

<style lang="scss">
  // ...
</style>
