<template>
    <textarea :id="id"
              :value="value"
              :class="classes"
              rows="3"
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
          'is-invalid': this.errors.length > 0,
        };
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
    border: solid 1px $gel-color--black;
    padding: 12px;
    width: 100%;
    background: #fff;
    @include gel-typography('pica');

    .is-invalid & {
      border: solid 1px $gel-color--errorRed;
    }
  }
</style>
