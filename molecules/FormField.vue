<template>
  <div v-bind:class="{ 'is-invalid': hasErrors, 'gel-form-field': true }">
    <div class="gel-layout">
      <div class="gel-layout__item gel-1/1 gel-1/2@m">
        <label :for="id" :class="'gel-input-label' + (hasErrors ? ' is-invalid' : '')">{{ label }}{{ requiredIndicator }}</label>
        <slot />
        <div class="gel-form-field__errors">
          <p v-for="error in errors">{{ error }}</p>
        </div>
      </div>
      <div class="gel-layout__item gel-1/1 gel-1/2@m">
        <gel-breakout-box :helpText="helpText"
                          :helpTextDetails="helpTextDetails"
          />
      </div>
    </div>
  </div>
</template>

<script>
  import GelBreakoutBox from '../atoms/BreakoutBox.vue';

  export default {
    components: { GelBreakoutBox },
    props: ["label", "helpText", "helpTextDetails", "errors", "id", "required"],
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

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-form-field {
    margin-bottom: 18px;

    .gel-input-label {
      @include gel-typography('pica-bold');
      &.is-invalid {
        color: $gel-color--errorRed;
      }

      margin-bottom: 8px;
      display: block;
    }

    .gel-break-out-box {
      margin-top: 30px;
    }
  }

  .gel-form-field__errors {
    color: $gel-color--errorRed;
    @include gel-typography('pica');
  }

</style>

