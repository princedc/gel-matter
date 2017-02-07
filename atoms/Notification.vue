<template>
  <div :class="classes">
    <slot>{{ displayMessage }}</slot>
    <gel-dismiss-button class="gel-notification__dismiss" @click="handleDismiss"></gel-dismiss-button>
  </div>
</template>

<script>
  import GelDismissButton from './DismissButton.vue';

  const allowedTypes = ['error'];

  export default {
    components: { GelDismissButton },
    data() {
      return {
        displayMessage: this.message || undefined,
      };
    },
    props: {
      type: {
        type: String,
        validation(value) {
          return allowedTypes.indexOf(value) !== -1;
        },
      },
      message: {
        type: String,
      },
    },
    computed: {
      classes() {
        return [
          'gel-notification',
          `gel-notification--${this.type}`,
        ];
      },
    },
    methods: {
      handleDismiss() {
        this.$emit('dismiss');
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-notification {
    width: 100%;
    overflow: hidden;
    position: relative;
    // padding: 16px 32px 16px 16px;
    padding: 0;

    background: $gel-color--error;
    color: $gel-color--white;
  }

  .gel-notification__title {
    margin-top: 0;
    margin-bottom: 12px;
  }

  .gel-notification__error {
    list-style: none;
  }

  .gel-notification__error-list {
    padding-left: 0;
    margin-top: 12px;
  }

  .gel-notification__dismiss {
    fill: $gel-color--white;
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>
