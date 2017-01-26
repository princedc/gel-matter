<template>
  <div :class="classes">
    <transition appear name="slide-fade">
      <gel-notification :message="message" :type="type" v-if="message" @dismiss="handleDismiss">
        <div class="gel-wrap">
          <div class="gel-layout">
            <div class="gel-layout__item">
              {{ message }}
            </div>
          </div>
        </div>
      </gel-notification>
    </transition>
  </div>
</template>

<script>
  import GelNotification from '../atoms/Notification.vue'
  const allowedTypes = ["error"];
  const allowedDirections = ["top"];

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
    data: function() {
      return {
        message: null,
        type: 'error',
      }
    },
    computed: {
      classes: function () {
        return [
          "gel-notification-panel",
          "gel-notification-panel--" + this.type,
        ]
      },
    },
    methods: {
      show: function(message, type) {
        this.message = message;
        this.type = type;
      },
      handleDismiss: function() {
        this.message = null;
        this.type = null;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-notification-panel {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    z-index: $gel-z-index-6--notification-panel;
  }

  .slide-fade-enter-active {
    transition: all 300ms $accelerationCurve;
  }

  .slide-fade-leave-active {
    transition: all .3s $decelerationCurve;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-100%);
  }
</style>
