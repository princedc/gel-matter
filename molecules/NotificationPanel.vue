<template>
    <transition appear
                name="slide-fade"
                v-on:enter="onEnter"
                v-on:before-leave="onBeforeLeave"
                v-on:leave="onLeave"
                v-on:after-enter="afterEnter"
    >
      <gel-notification :class="classes" ref="notification"  @dismiss="handleDismiss" v-if="visible">
        <slot>{{ message }}</slot>
      </gel-notification>
    </transition>
</template>

<script type="text/ecmascript-6">
  import GelNotification from '../atoms/Notification.vue';

  const allowedTypes = ["error"];
  const allowedDirections = ["top"];

  export default {
    components: { GelNotification },
    props: {
      direction: {
        type: String,
        validation(value) {
          return allowedDirections.indexOf(value) !== -1;
        },
      },
    },
    data() {
      return {
        message: null,
        type: 'error',
        visible: false,
      };
    },
    mounted() {
      // attach listener to fix the notification panel to the top of the screen
      inView('#notification-wrapper')
        .on('enter', () => {
          this.$el.classList.remove('is-pinned');
        })
        .on('exit', () => {
          this.$el.classList.add('is-pinned');
        });
    },
    computed: {
      classes() {
        return [
          'gel-notification-panel',
          `gel-notification-panel--${this.type}`,
          'js-notification-panel',
        ];
      },
    },
    methods: {
      show: function (message, type) {
        console.log(typeof message);

        if (typeof message == 'object') {
          console.log(this.message, 'was the message');
          this.$slots.default = this.$createElement('div', 'test');
        } else {
          this.message = message;
        }
        this.type = type;
        this.visible = true;
      },
      forceShow() {
        this.visible = true;
      },
      onEnter(el) {
        if (typeof window !== 'undefined') {
          // height: auto cannot be transitioned with css, so explicitly set the height for transition
          el.style.height = `${el.scrollHeight}px`;
        }
      },
      afterEnter(el) {
        // now that animation has finished, set to auto so it picks up content changes
        el.style.height = 'auto';
      },
      onBeforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
      },
      onLeave(el) {
        this.$nextTick(() => {
          // set the height back to a specific one for transition
          el.style.height = 0;
        });
      },
      handleDismiss() {
        this.visible = false;
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

  .slide-fade-enter-active {
    transition: all 300ms $accelerationCurve;
  }

  .slide-fade-leave-active {
    transition: all .3s $decelerationCurve;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    height: 0;
  }
</style>
