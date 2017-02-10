<template>
    <input :id="id"
           :type="type"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)"
           :class="classes"
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
    },
    computed: {
      classes() {
        return {
          'gel-input': true,
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

  .gel-input {
    border: solid 1px $gel-color--black;
    padding: 12px;
    width: 100%;
    background: #fff;
    @include gel-typography('pica');

    .is-invalid & {
      border: solid 1px $gel-color--error;
      outline-color: $gel-color--error;
    }
  }
</style>
