<template>
  <transition name="fade" @after-leave="onLeave">
    <div class="gel-mask" v-show="isOpen" @click="closeFromEvent" ref="mask">
      <div class="gel-modal" tabindex="-1" @keydown.esc="dismissOnEsc && closeFromEvent($event)" ref="container">
        <slot></slot>
        <div
          class="ui-modal__focus-redirect"
          tabindex="0"

          @focus.stop="redirectFocus"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    width: String,
    dismissOnEsc: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: false,
      previousScrollLocation: 0,
    };
  },

  watch: {
    isOpen() {
      this.$nextTick(() => {
        this[this.isOpen ? 'onOpen' : 'onClose']();
      });
    },
  },

  methods: {
    close() {
      this.isOpen = false;
    },

    onClose() {
      document.body.classList.remove('is-masked');
      window.scrollTo(0, this.previousScrollLocation);
    },

    closeFromEvent(e) {
      // Make sure the element clicked was the mask and not a child whose click
      // event has bubbled up
      if (e.currentTarget === this.$refs.mask && e.target !== e.currentTarget) {
        return;
      }

      this.close();
    },

    redirectFocus() {
      this.$refs.container.focus();
    },

    restrictFocus(e) {
      if (!this.$refs.container.contains(e.target)) {
        e.stopPropagation();
        this.$refs.container.focus();
      }
    },

    teardownModal() {
      // classlist.remove(document.body, 'ui-modal--is-open');
      document.removeEventListener('focus', this.restrictFocus, true);
      if (this.lastfocusedElement) {
        this.lastfocusedElement.focus();
      }
    },

    open() {
      this.isOpen = true;
      this.previousScrollLocation = window.pageYOffset;
      document.body.style.top = `-${this.previousScrollLocation}px`;
      document.body.classList.add('is-masked');
    },

    onOpen() {
      this.previousFocusedElement = document.activeElement;
      this.$refs.container.focus();

      document.addEventListener('focus', this.restrictFocus, true);
    },

    onLeave() {
      this.$emit('closed');
    },
  },
};
</script>

<style lang="scss">

@import '../common';

.gel-mask {
  background-color: rgba($gel-color--mask-bg, 0.7);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: $gel-z-index-6--mask;
  transition: opacity 500ms ease;
}

.gel-modal {
  background: $gel-color--modal-bg;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  max-width: 600px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
