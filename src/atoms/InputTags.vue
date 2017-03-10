<template>
  <div style="position: relative;" class="gel-tags" :class="errors ? 'is-invalid' : ''">
    <v-select :id="id"
              multiple
              :value="value"
              :options="options"
              v-on:input="updateValue(arguments[0])"
              pushTags
              taggable
              ignoreCase
              hideSelectedOptions
    />
  </div>
</template>

<script>
  import GelIcon from './Icon.vue';
  import VSelect from './VueSelect.vue';

  export default {
    components: { GelIcon, VSelect },
    props: {
      options: Array,
      id: String,
      value: Array,
      errors: Array,
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

  .clearfix:before,
  .clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
  }

  .clearfix:after {
    clear: both;
  }

  .v-select.open {
    @include form-field-outline;

    .is-invalid & {
      outline-color: $gel-color--error;
    }
  }

  .gel-tags__handle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .gel-tags.gel-tags {
    position: relative;
    border: 1px solid $gel-color--input-border;

    [type="button"] {
      -webkit-appearance: initial;
      border-radius: 0;
      border: 0;
    }

    .v-select__input, .v-select__input:focus {
      @include gel-typography('pica');
      padding: 24px 12px;
    }

    .selected-tag {
      background: $gel-color--text;
      color: $gel-color--input-bg;
      border-radius: 0;
      border: 0;
      margin: 12px 0 0 12px;
      height: auto;
      padding: 12px;
      @include gel-typography('pica');
      display: flex;
    }

    .close {
      background: transparent;
      border: 0;
      cursor: pointer;
      color: $gel-color--input-bg;
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
      background: $gel-color--input-bg;
      border: solid 1px $gel-color--input-border;
      list-style: none;
      margin-left: 0;
      padding: 0;
      width: calc(100% + 2px);
      max-height: 220px;
      z-index: $gel-z-index-6--dropdown;

      li a, li a:visited {
        @include gel-typography('pica');
        background: $gel-color--input-bg;
        padding: 12px 12px;
        display: block;
        color: $gel-color--text;
      }

      li.highlight a, li.highlight.active a {
        background: $gel-color--menu-hover;
      }

      li.active a {
        background: $gel-color--menu-selected;
      }
    }
  }
</style>
