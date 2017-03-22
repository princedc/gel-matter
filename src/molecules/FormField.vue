<template>
  <div class="gel-layout" :class="{ 'is-invalid': hasErrors, 'gel-form-field': true }">
    <div class="gel-layout__item gel-6/12@m gel-5/12@xxl gel-form-field__control">
      <label :for="id" :class="'gel-input-label' + (hasErrors ? ' is-invalid' : '')">
        <span class="u-flex-grow u-margin-right">{{ label }} <em class="gel-input-label__optional" v-if="!required">(optional)</em></span>
        <span class="gel-form-field__character-count" v-if="maxLength">Character limit ({{ currentCharCount }}/{{ maxLength }})</span>
      </label>
      <slot></slot>
      <div class="gel-form-field__errors" v-if="errors && errors.length">
        <p v-for="error in errors.slice(0, 1)" class="gel-form-field__error">{{ error }}</p>
      </div>
    </div>
    <div class="gel-layout__item gel-6/12@m gel-5/12@xxl" v-if="helpText || $slots.helpText">
      <gel-breakout-box class="gel-breakout-box"><slot name="helpText"><p>{{ helpText }}</p></slot></gel-breakout-box>
    </div>
  </div>
</template>

<script>
  import GelBreakoutBox from '../atoms/BreakoutBox.vue';

  export default {
    components: { GelBreakoutBox },
    props: ['label', 'helpText', 'errors', 'id', 'required', 'maxLength', 'value'],
    computed: {
      hasErrors() {
        return this.errors && this.errors.length;
      },
      currentCharCount() {
        return this.value ? this.value.length : 0;
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-form-field {
    margin-bottom: 18px;
    align-items: flex-start;

    .gel-input-label {
      display: flex;
      margin-bottom: 8px;
    }

    .gel-breakout-box {
      margin-top: 8px;

      @include mq($from: gel-bp-m) {
        margin-top: 28px;
      }
    }
  }

  .gel-input-label {
    @include gel-typography('pica-bold');

    &.is-invalid {
      color: $gel-color--error;
    }
  }

  .gel-input-label__optional {
    font-weight: normal;
    font-style: normal;
  }

  .gel-form-field__character-count {
    flex-shrink: 0;
    align-self: flex-end;
    @include gel-typography('brevier');
  }

  .gel-form-field__control {
    position: relative;
    @include mq($from: gel-bp-m) {
      padding-bottom: 1.25em;
    }
  }

  .gel-form-field__errors {
    padding-top: 8px;
    color: $gel-color--error;
    width: 100%;
    @include gel-typography('long-primer');
    @include mq($from: gel-bp-m) {
      padding-top: 0;
      position: absolute;
      bottom: 0;
    }
  }

  .gel-form-field__error {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 8px;
  }

</style>
