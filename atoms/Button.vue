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
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .gel-button--primary {
    background: $gel-color--text;
    color: $gel-color--white;
    transition: background-color 200ms ease;

    &:hover {
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

    &:hover {
      background: $gel-color--success-hover;
    }
  }

  .gel-button--danger {
    background: $gel-color--error;
    color: $gel-color--white;

    &:hover {
      background: $gel-color--error-hover;
    }
  }

  .gel-button__icon {
    margin-right: 6px;
    display: inline-block;
  }
</style>
