<template>
  <button
    class="gel-button"
    :class="classes"
    :type="buttonType"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="gel-button__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <gel-icon class="gel-button__icon" :set="icon.set" :icon="icon.icon" size="small"></gel-icon>
      </slot>
    </div>

    <slot></slot>

  </button>
</template>

<script>
  import GelIcon from './Icon.vue';

  const allowedTypes = ['primary', 'secondary', 'publish', 'minor', 'danger'];

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
      buttonType: {
        type: String,
        default: 'button',
      },
      icon: {
        default: false,
        validation(value) {
          return value === false || ('set' in value && 'icon' in value);
        },
      },
      disabled: Boolean,
    },
    data() {
      return { something: 'value' };
    },
    computed: {
      classes() {
        return {
          [`gel-button--${this.type}`]: true,
          'is-disabled': this.disabled,
        };
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
    text-decoration: none;

    &:hover:not(.is-disabled) {
      text-decoration: underline;
    }

    &.is-disabled {
      cursor: default;
      opacity: 0.6;
    }
  }

  .gel-button--primary {
    background: $gel-color--text;
    color: $gel-color--white;
    transition: background-color 200ms ease;

    &:hover:not(.is-disabled) {
      background-color: $gel-color--black;
    }
  }

  .gel-button--secondary {
    border: solid 1px $gel-color--text;
    color: $gel-color--text;
    background: transparent;
  }

  .gel-button--minor {
    background: transparent;
  }

  .gel-button--publish {
    background: $gel-color--success;
    color: $gel-color--white;

    &:hover:not(.is-disabled) {
      background: $gel-color--success-hover;
    }
  }

  .gel-button--danger {
    background: $gel-color--error;
    color: $gel-color--white;

    &:hover:not(.is-disabled) {
      background: $gel-color--error-hover;
    }
  }

  .gel-button__icon {
    margin-right: 6px;
    display: inline-block;
  }
</style>
