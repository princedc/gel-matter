<template>
  <transition appear name="slide"
              v-on:enter="onEnter"
              v-on:after-enter="afterEnter"
              v-on:before-leave="onBeforeLeave"
              v-on:leave="onLeave"
  >
    <div :class="classes" v-if="isVisible">
      <div :class="fullWidth ? 'gel-wrap' : ''">
        <div class="gel-layout">
          <div class="gel-layout__item gel-1/1">
            <gel-notification :type="type" @dismiss="handleDismiss" :dismissible="dismissible"
                :light="light">
              <slot>{{ message }}</slot>
            </gel-notification>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script type="text/ecmascript-6">
  import GelNotification from '../atoms/Notification.vue';

  const allowedTypes = ['error', 'success'];

  export default {
    components: { GelNotification },
    props: {
      type: {
        type: String,
        default: 'error',
        validation(value) {
          return allowedTypes.includes(value);
        },
      },
      visible: Boolean,
      dismissible: {
        type: Boolean,
        default: true,
      },
      light: Boolean,
      /**
       * Use when expecting the notification to span the full page width.
       * When set to true, wraps the notification within a gel-wrap.
       * @type {[type]}
       */
      fullWidth: Boolean,
    },
    data() {
      return {
        message: null,
        isVisible: this.visible,
      };
    },
    computed: {
      classes() {
        const light = this.light ? '-light' : '';

        return [
          'gel-notification-panel',
          `gel-notification-panel--${this.type}${light}`,
        ];
      },
    },
    methods: {
      show(message, type) {
        this.message = message;
        this.type = type;
        this.isVisible = true;
        this.$emit('shown');
      },
      forceShow() {
        if (this.isVisible === true) {
          this.$emit('shown');
        }
        this.isVisible = true;
      },
      onEnter(el) {
        // height: auto cannot be transitioned with css, so explicitly set the height for transition
        el.style.height = `${el.scrollHeight}px`;
      },
      afterEnter(el) {
        // now that animation has finished, set to auto so it picks up content changes
        el.style.height = 'auto';
        this.$emit('shown');
      },
      onBeforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
      },
      onLeave(el) {
        // set the height back to a specific one for transition, after the before-
        // -leave change has been applied. Next tick doesn't work for some reason.
        setTimeout(() => {
          el.style.height = 0;
        }, 0);
      },
      handleDismiss() {
        this.isVisible = false;
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-notification-panel {
    overflow: hidden;
    width: 100%;
    background: transparent;

    &.slide-enter-active {
      transition: all 300ms $accelerationCurve;
    }

    &.slide-leave-active {
      transition: all 300ms $decelerationCurve;
    }

    &.slide-enter, &.slide-leave-to {
      height: 0;
    }
  }

  .gel-notification--error-light {
    background-color: transparent;
    color: $gel-color--error;
  }

  .gel-notification-panel--error {
    background-color: $gel-color--error;
  }

  .gel-notification-panel--success {
    background-color: $gel-color--success;
  }
</style>
