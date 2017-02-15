<template>
  <button :class="classes" v-on:click="handleClick">
    <div class="gel-button__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <gel-icon class="gel-button__icon" :set="icon.set" :icon="icon.icon" size="small" />
      </slot>
    </div>
    <slot/>
  </button>
</template>

<script>
  import GelIcon from './Icon.vue';

  const allowedTypes = ['primary', 'secondary', 'publish', 'transparent'];

  export default {
    components: { GelIcon },
    props: {
      type: {
        type: String,
        default: 'primary',
        validation(value) {
          return allowedTypes.indexOf(value);
        },
      },
      icon: {
        default: false,
        validation(value) {
          return value === false || ('set' in value && 'icon' in value);
        },
      },
    },
    data() {
      return { something: 'value' };
    },
    computed: {
      classes() {
        return [
          'gel-button',
          `gel-button--${this.type}`,
        ];
      },
    },
    methods: {
      handleClick(e) {
        e.preventDefault();
        this.$emit('click', e);
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-button {
    border: none;
    padding: 16px;
    @include gel-typography('long-primer-bold');
    cursor: pointer;
  }

  .gel-button--primary {
    background: $gel-color--text;
    color: #fff;
    transition: background-color 200ms ease;

    &:hover {
      background-color: $gel-color--black;
      text-decoration: underline;
    }
  }

  .gel-button--transparent {
    background: transparent;
    padding: 0;
  }

  .gel-button--publish {
    background: lighten($gel-color--success, 10%);
    color: #fff;

    &:hover {
      background: $gel-color--success;
      text-decoration: underline;
    }
  }

  .gel-button--secondary {
    border: solid 1px $gel-color--text;
    color: $gel-color--text;
    background: transparent;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .gel-button__icon {
    margin-right: 6px;
    display: inline-block;
  }

  .u-full-width {
    display: block;
    width: 100%;
  }
</style>
