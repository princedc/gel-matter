<template>
  <button :class="classes" v-on:click="handleClick">
    <slot/>
  </button>
</template>

<script>
  const allowedTypes = ['primary', 'secondary', 'publish', 'transparent'];

  export default {
    props: {
      type: {
        type: String,
        default: 'primary',
        validation(value) {
          return allowedTypes.indexOf(value);
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
    background: #404040;
    color: #fff;

    &:hover {
      background-color: #000;
      text-decoration: underline;
    }
  }

  .gel-button--transparent {
    background: transparent;
    padding: 0;
  }

  .gel-button--publish {
    background: rgba(0, 143, 17, 0.8);
    color: #fff;

    &:hover {
      background: rgba(0, 143, 17, 1);
      text-decoration: underline;
    }
  }

  .gel-button--secondary {
    background: transparent;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .u-full-width {
    display: block;
    width: 100%;
  }
</style>
