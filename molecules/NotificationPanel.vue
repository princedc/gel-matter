<template>
  <transition appear name="slide-fade" v-on:after-enter="afterEnter" v-on:after-leave="afterExit">
    <div :class="classes" v-show="visible" ref="notificationPanel">
      <gel-notification :message="message" :type="type" @dismiss="handleDismiss">
        <div class="gel-layout">
          <div class="gel-layout__item" v-html="message">
          </div>
        </div>
      </gel-notification>
    </div>
  </transition>
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
      // create a empty div just above this, which will be used to hold space for the notification
      // panel when it is fixed to the window
      if (typeof window !== 'undefined') {
        placeHolder = document.createElement('div');
        placeHolder.classList.add('test');
        this.$el.parentNode.insertBefore(placeHolder, this.$el.nextSibling);
      }

      // attach listener to fix the notification panel to the top of the screen
      inView('.test')
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
        this.message = message;
        this.type = type;
        this.visible = true;
      },
      afterEnter: function () {
        if (typeof window !== 'undefined') {
          console.log('updating height to: ', this.$el, `${this.$el.offsetHeight}px`);
          placeHolder.style.height = `${this.$el.offsetHeight}px`;
          inView.offset(this.$el.offsetHeight);

        }
      },
      afterExit: function () {
        placeHolder.style.height = 0
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
    top: auto;
    position: absolute;

    &.is-pinned {
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
