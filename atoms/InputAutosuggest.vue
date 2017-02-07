<template>
  <div style="position: relative;" class="gel-autosuggest" :class="(errors && errors.length) > 0 ? 'is-invalid' : ''">
    <v-select :id="id"
              :value="value"
              :options="options"
              v-on:input="updateValue(arguments[0])"
              taggable
              @blur="$emit('blur')"
    />
  </div>
</template>

<script>
  import VSelect from './VueSelect.vue';

  export default {
    components: { VSelect },
    props: {
      options: Array,
      id: String,
      value: String,
      errors: Array,
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

  .gel-tags__handle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .gel-autosuggest.gel-autosuggest {
    position: relative;
    border: 1px solid $gel-color--black;

    &.is-invalid {
      border-color: $gel-color--error;
    }

    [type="button"] {
      -webkit-appearance: initial;
      border-radius: 0;
      border: 0;
    }

    input[type=search], input[type=search]:focus {
      @include gel-typography('pica');
      padding: 12px;
    }

    .selected-tag {
      background: none;
      color: $gel-color--black;
      border-radius: 0;
      border: 0;
      height: auto;
      @include gel-typography('pica');
      display: flex;
      padding: 12px;
    }

    .close {
      background: transparent;
      border: 0;
      cursor: pointer;
      color: $gel-color--white;
      fill: currentColor;
      margin-left: 12px;
    }

    .open-indicator {
      display: none;
    }

    .dropdown-menu {
      position: absolute;
      left: -1px;
      top: 100%;
      background: $gel-color--white;
      border: solid 1px $gel-color--black;
      list-style: none;
      margin-left: 0;
      padding: 12px 0;
      width: calc(100% + 2px);
      z-index: $gel-z-index-6--dropdown;

      li a, li a:visited {
        @include gel-typography('pica');
        background: $gel-color--white;
        padding: 3px 12px;
        display: block;
        color: $gel-color--tundora;
      }

      li.highlight a, li.highlight.active a {
        background: $gel-color--alto;
      }

      li.active a {
        background: $gel-color--cod-gray;
        color: $gel-color--white;
      }
    }
  }
</style>
