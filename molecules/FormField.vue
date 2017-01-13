<template>
  <div v-bind:class="{ 'is-invalid': hasErrors, 'gel-form-field': true }">
    <div class="gel-layout">
      <div class="gel-layout__item gel-1/1 gel-1/2@m">
        <label :for="id" class="gel-input-label">{{ label }}{{ requiredIndicator }}</label>
        <slot />
      </div>
      <div class="gel-layout__item gel-1/1 gel-1/2@m">
        <div class="gel-break-out-box">
          <h4>{{ helpText }}</h4>
          <p v-if="helpTextDetails">{{ helpTextDetails }}</p>
        </div>
      </div>
      </div>


  </div>
</template>

<script>
  export default {
    props: ["label", "helpText", "helpTextDetails", "errors", "id"],
    computed: {
      hasErrors: function() {
        return this.errors && this.errors.length;
      },
      requiredIndicator: function() {
        return this.required ? '*' : '';
      }
    },
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  @import '../common';

  .gel-form-field {
    margin-bottom: 48px;
  }

  .gel-input-label {
    @include gel-typography('pica-bold');
    margin-bottom: 8px;
    display: block;
  }
</style>

