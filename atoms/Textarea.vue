<template>
    <textarea v-bind:id="id"
              v-bind:value="value"
              v-on:input="updateValue($event.target.value)"
              class="gel-textarea"
              rows="3"
    ></textarea>
</template>

<script>
  export default {
    props: ["value", "id"],
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  @import '../common';

  .gel-textarea {
    box-sizing: border-box;
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
