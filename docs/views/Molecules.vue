<template>
  <div class="gel-layout">
    <div class="gel-layout__item">

      <h2>Molecules</h2>

      <div class="gel-layout">
        <div class="gel-layout__item">
          <h3>Auto-suggest Field</h3>
          <gel-autosuggest-field></gel-autosuggest-field>
        </div>

        <div class="gel-layout__item">
          <h3>Beta Navigation</h3>
          <gel-beta-navigation>
            <p>You are looking at the <strong>BBC Component Library (Beta)</strong></p>
          </gel-beta-navigation>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import * as Molecules from '../../src/molecules';

  export default {
    components: { ...Molecules },
  };
</script>

<style lang="scss">
  // ...
</style>
