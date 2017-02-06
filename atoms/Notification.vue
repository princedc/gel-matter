<template>
  <div :class="classes">
    <slot>{{ displayMessage }}</slot>
    <gel-dismiss-button class="gel-notification__dismiss" @click="handleDismiss"></gel-dismiss-button>
  </div>
</template>

<script>
  import GelDismissButton from './DismissButton.vue';

  const allowedTypes = ["error"];

  export default {
    components: {GelDismissButton},
    beforeUpdate() {
      if (typeof this.message == 'Array') {
        console.log(this.message, 'is array');
        this.$slots.default = this.message;
      } else {
        this.displayMessage = this.message;
      }
    },
    data() {
      return {
        displayMessage: undefined,
      };
    },
    props: {
      type: {
        type: String,
        validation: function(value) {
          return allowedTypes.indexOf(value) !== -1;
        },
      },
      message: {
        type: String,
      }
    },
    computed: {
      classes: function() {
        return [
          "gel-notification",
          "gel-notification--" + "type",
        ]
      },
    },
    methods: {
      handleDismiss: function () {
        this.$emit('dismiss');
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-notification {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 16px 32px 16px 16px;

    background: darkred;
    color: #ffffff;
  }

  .gel-notification__dismiss {
    fill: #fff;
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>
