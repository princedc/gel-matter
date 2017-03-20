<template>
    <textarea
      rows="3"
      :aria-invalid="isInvalid"
      :id="id"
      :class="classes"
      :value="value"
      @input="updateValue($event.target.value)"
      @blur="$emit('blur')"
    ></textarea>
</template>

<script>
  export default {
    props: {
      value: String,
      id: String,
      errors: {
        type: Array,
        default() { return []; },
      },
    },
    computed: {
      classes() {
        return {
          'gel-textarea': true,
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

  .gel-textarea {
    display: block;
    border: solid 1px $gel-color--input-border;
    padding: 12px;
    width: 100%;
    max-width: 100%;
    background: $gel-color--input-bg;
    @include gel-typography('pica');

    .is-invalid & {
      border: solid 1px $gel-color--error;
      outline-color: $gel-color--error;
    }
  }
</style>
