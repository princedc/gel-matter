<template>
    <transition name="slide"
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

  const allowedTypes = ['error'];

  export default {
    components: { GelNotification },
    props: {
      direction: {
        type: String,
        validation(value) {
          return allowedTypes.includes(value);
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
      show(message, type) {
        this.message = message;
        this.type = type;
        this.visible = true;
      },
      forceShow() {
        this.visible = true;
      },
      onEnter(el) {
        // height: auto cannot be transitioned with css, so explicitly set the height for transition
        el.style.height = `${el.scrollHeight}px`;
      },
      afterEnter(el) {
        // now that animation has finished, set to auto so it picks up content changes
        el.style.height = 'auto';
      },
      onBeforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
      },
      onLeave(el) {
        // set the height back to a specific one for transition, after the above
        //  before leave change has been applied
        this.$nextTick(() => {
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

    &.slide-enter-active {
      transition: all 300ms $accelerationCurve;
    }

    &.slide-leave-active {
      transition: all .3s $decelerationCurve;
    }

    &.slide-enter, &.slide-leave-to {
      height: 0;
    }
  }


</style>
