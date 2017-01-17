<template>
    <input v-bind:id="id"
           type="text"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)"
           class="gel-input"
    />
</template>

<script>
  export default {
    props: ["type","value", "id"],
    computed: {

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
