<template>
  <svg :class="`gel-icon--${iconSize}`">
    <use :xlink:href="`${svgUrl}#gel-icon-${icon}`"></use>
  </svg>
</template>

<script>
  const validSizes = ['small', 'medium', 'large'];

  export default {
    props: {
      set: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: 'medium',
        validator: function (value) {
          return validSizes.indexOf(value) > -1
        }
      }
    },
    created () {
      this.svgUrl = require(`gel-iconography-assets/dist/${this.set}/set/gel-icons-${this.set}-set.svg`);
    },
    computed: {
      iconSize: function() {
        return validSizes.indexOf(this.size) > -1 ? this.size : 'medium';
      }
    }
  }
</script>

<style lang="sass">
  body {
    background-color: #EEE;
  }

  .gel-icon--small {
    height: 16px;
    width: 16px;
  }

  .gel-icon--medium {
    height: 32px;
    width: 32px;
  }

  .gel-icon--large {
    height: 64px;
    width: 64px;
  }

  /*[class^="gel-icon-"] {*/

  /*}*/
</style>
