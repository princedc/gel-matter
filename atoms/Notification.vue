<template>
  <div :class="classes">
    <slot>{{ displayMessage }}</slot>
    <gel-dismiss-button class="gel-notification__dismiss" @click="handleDismiss" v-if="dismissible"></gel-dismiss-button>
  </div>
</template>

<script>
  import GelDismissButton from './DismissButton.vue';

  const allowedTypes = ['error', 'success'];

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
      dismissible: {
        type: Boolean,
        default: true,
      },
      message: {
        type: String,
      },
      light: Boolean,
    },
    computed: {
      classes() {
        const light = this.light ? '-light' : '';
        return [
          'gel-notification',
          `gel-notification--${this.type}${light}`,
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
    padding: 12px 0;

    background: $gel-color--error;
    color: $gel-color--white;
    display: flex;

  }

  .gel-notification--error-light {
    background: transparent;
    color: $gel-color--error;
  }

  .gel-notification--success {
    background-color: $gel-color--success;
  }

  .gel-notification__message {
    margin: 0;
    padding: 0;
    @include gel-typography('pica');
  }

  .gel-notification__icon {
    margin-right: 12px;
    display: inline-block;
    fill: $gel-color--white;
    color: $gel-color--white;
    vertical-align: -0.35em;
    @include gel-typography('pica');
  }

  .gel-notification__title {
    margin-top: 0;
    margin-bottom: 6px;
    @include gel-typography('pica');
    font-weight: normal;
  }

  .gel-notification__error {
    list-style: none;
    @include gel-typography('long-primer-bold');
    margin-bottom: 4px;
  }

  .gel-notification__error-list {
    padding-left: 0;
    margin: 0;
  }

  .gel-notification__dismiss {
    color: $gel-color--white;
    position: absolute;
    right: 0;
    top: 1em;
  }
</style>
