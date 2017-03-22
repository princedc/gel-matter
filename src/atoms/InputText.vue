<template>
  <input
    :aria-invalid="isInvalid"
    :id="id"
    :type="type"
    :class="classes"
    :placeholder="placeholder"
    :prefix="prefix"
    :value="value"
    @input="updateValue($event.target.value)"
    @blur="$emit('blur')"
  />
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text',
        validation(value) {
          return ['text', 'url', 'email'].includes(value);
        },
      },
      value: String,
      id: String,
      errors: {
        type: Array,
        default() { return []; },
      },
      placeholder: String,
      prefix: String,
    },
    computed: {
      classes() {
        return {
          'gel-input': true,
          'is-invalid': this.isInvalid,
        };
      },
      isInvalid() {
        return this.errors.length > 0;
      },
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-input {
    border: solid 1px $gel-color--input-border;
    padding: 12px;
    width: 100%;
    background: $gel-color--input-bg;
    @include gel-typography('pica');

    .is-invalid & {
      border: solid 1px $gel-color--error;
      outline-color: $gel-color--error;
    }
  }
</style>
