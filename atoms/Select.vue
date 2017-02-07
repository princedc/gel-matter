<template>
  <div :class="classes">
    <gel-icon set="core" icon="down" size="small" class="gel-select__icon" />
  <select class=""
          :value="value"
          @change="updateValue($event.target.value)"
          @focus="selectIsFocused = true"
          @blur="handleBlur"
  >
    <option v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
  </div>
</template>

<script>
  import GelIcon from './Icon.vue';
  export default {
    components: { GelIcon },
    data: function() {
      return {
        selectIsFocused: false,
      }
    },
    props: {
      value: String,
      options: Array,
      errors: {
        type: Array,
        default: function() {return [];}
      }
    },
    computed: {
      classes: function() {
        return {
          'gel-select': true,
          'is-invalid': this.errors.length > 0,
          'is-focused': this.selectIsFocused,
        }
      }
    },
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      },
      handleBlur: function(value) {
        this.selectIsFocused = false;
        this.$emit('blur');
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
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

    .gel-select.is-invalid & {
      fill: $gel-color--error;
    }
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

  .gel-select.is-focused {
    @include form-field-outline;
  }

  .is-invalid {
    border-color: $gel-color--error;
  }
</style>
