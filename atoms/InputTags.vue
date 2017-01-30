<template>
  <div style="position: relative;">
    <gel-icon set="core" icon="down" size="small" class="gel-tags__handle" />
    <v-select :id="inputId"
              class="gel-tags"
              multiple
              :value="value"
              :options="options"
              v-on:input="updateValue(arguments[0])"
    />
  </div>
</template>

<script>
  import GelIcon from './Icon.vue';
  import VSelect from 'vue-select/src/components/Select.vue';

  export default {
    components: { GelIcon, VSelect },
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

  .clearfix:before,
  .clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
  }

  .clearfix:after {
    clear: both;
  }

  .v-select {
    padding: 12px;
    border: 1px solid $gel-color--black;
  }

  .gel-tags__handle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .gel-tags.gel-tags {
    position: relative;

    [type="button"] {
      -webkit-appearance: initial;
      border-radius: 0;
      border: 0;
    }

    input {
      @include gel-typography('pica');
    }

    .selected-tag {
      background: $gel-color--tundora;
      color: $gel-color--white;
      border-radius: 0;
      border: 0;
      margin: 0 12px 0 0;
      height: auto;
      @include gel-typography('pica');
    }

    .close {
      background: transparent;
      border: 0;
      cursor: pointer;
      color: $gel-color--white;
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
      padding: 12px;
      width: calc(100% + 2px);
      z-index: $gel-z-index-6--dropdown;

      li a, li a:visited {
        @include gel-typography('pica');
        background: $gel-color--white;
        padding: 3px 0;
        display: block;
        color: $gel-color--tundora;
      }

      li.highlight a, li.highlight.active a {
        background: $gel-color--alto;
      }

      li.active a {
        background: $gel-color--gallery;
      }
    }
  }
</style>
