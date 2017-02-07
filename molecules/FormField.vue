<template>
  <div v-bind:class="{ 'is-invalid': hasErrors, 'gel-form-field': true }">
    <div class="gel-layout">
      <div class="gel-layout__item gel-6/12@m gel-5/12@xxl">
        <label :for="id" :class="'gel-input-label' + (hasErrors ? ' is-invalid' : '')">{{ label }}{{ requiredIndicator }}</label>
        <slot />
        <div class="gel-form-field__errors">
          <p v-for="error in errors">{{ error }}</p>
        </div>
      </div>
      <div class="gel-layout__item gel-5/12@m gel-4/12@xxl">
        <gel-breakout-box class="gel-breakout-box" :helpText="helpText"/>
      </div>
    </div>
  </div>
</template>

<script>
  import GelBreakoutBox from '../atoms/BreakoutBox.vue';

  let blah = [];
  blah.push(
    1,
    2,
    3
  );

  export default {
    components: { GelBreakoutBox },
    props: ["label", "helpText", "errors", "id", "required"],
    computed: {
      hasErrors: function() {
        return this.errors && this.errors.length;
      },
      requiredIndicator: function() {
        return this.required ? '*' : '';
      },
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

    .gel-breakout-box {
      margin-top: 8px;

      @include mq($from: gel-bp-m) {
        margin-top: 30px;
      }
    }
  }

  .gel-form-field__errors {
    color: $gel-color--errorRed;
    @include gel-typography('pica');
  }

</style>
