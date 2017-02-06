<template>
  <div id="notification-wrapper">
    <transition appear name="slide-fade" v-on:after-enter="afterEnter" v-on:before-leave="beforeExit">
      <gel-notification :class="classes" ref="notification" @dismiss="handleDismiss">
        <slot>{{ message }}</slot>
      </gel-notification>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import GelNotification from '../atoms/Notification.vue'

  import inView from 'in-view';

  const allowedTypes = ["error"];
  const allowedDirections = ["top"];
  let placeHolder;


  export default {
    components: {GelNotification},
    props: {
      direction: {
        type: String,
        validation: function (value) {
          return allowedDirections.indexOf(value) !== -1;
        },
      }
    },
    data: function () {
      return {
        message: null,
        type: 'error',
        visible: false,
      }
    },
    mounted: function () {
      // attach listener to fix the notification panel to the top of the screen
      inView("#notification-wrapper")
        .on('enter', () => {
          this.$el.classList.remove('is-pinned');
        })
        .on('exit', () => {
          this.$el.classList.add('is-pinned');
        });

    },
    computed: {
      classes: function () {
        return [
          "gel-notification-panel",
          "gel-notification-panel--" + this.type,
          "js-notification-panel",
        ]
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
      afterEnter: function () {
        if (typeof window !== 'undefined') {
          console.log('updating height to: ', this.$el, `${this.$refs.notification.offsetHeight}px`);
          this.$el.style.height = `${this.$refs.notification.offsetHeight}px`;
          // inView.offset(this.$el.offsetHeight);
        }
      },
      beforeExit: function () {
        this.$el.style.height = "auto";
      },
      handleDismiss: function () {
        this.visible = false;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-notification-panel {
    overflow: hidden;
    width: 100%;
    background: transparent;
    max-height: 100px;
    z-index: $gel-z-index-6--notification-panel;
    /* These two lines are so the bar has no height when in place normally, allowing
    for some kind of placeholder to be used to keep the page height correct */
    // top: auto;
    // position: absolute;

    .is-pinned > & {
      position: fixed;
      top: 0;
    }
  }

  .slide-fade-enter-active {
    transition: all 300ms $accelerationCurve;
  }

  .slide-fade-leave-active {
    transition: all .3s $decelerationCurve;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    max-height: 0;
  }
</style>
