<template>
  <div class="gel-select">
    <gel-icon set="core" icon="down" size="small" class="gel-select__icon" />
  <select class=""
          v-bind:value="value"
          v-on:change="updateValue($event.target.value)"
  >
    <option v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
  </div>
</template>

<script>
  import GelIcon from './Icon.vue';
  export default {
    components: { GelIcon },
    props: ["value", "options"],
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  @import '../common';

  .gel-select {
    border: 1px solid #000;
    width: 100%;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    background: #fff;
  }

  .gel-select__icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .gel-select select {
    position: relative;
    padding: 10px;
    left: -1px;
    width: calc(100% + 2px);
    border: none;
    box-shadow: none;
    background: transparent none;
    @include gel-typography('pica');

    /* hide the default dropdown element */
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand {
      display: none;
    }
  }

  .gel-select select:focus {
    outline: none;
  }
</style>
