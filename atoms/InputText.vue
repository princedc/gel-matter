<template>
    <input v-bind:id="id"
           type="text"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)"
           :class="classes"
    />
</template>

<script>
  export default {
    props: {
      type: String,
      value: String,
      id: String,
      errors: {
        type: Array,
        default: function() { return []; },
      }
    },
    computed: {
      classes: function () {
        return {
          'gel-input': true,
          'is-invalid': this.errors.length > 0,
        }
      }
    },
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-input {
    border: solid 1px black;
    padding: 12px;
    width: 100%;
    background: #fff;
    @include gel-typography('pica');

    .is-invalid & {
      border: solid 1px red;
    }
  }
</style>
