<template>
  <a class="gel-button gel-button-secondary gel-long-primer-bold" :href="href">
    <slot/>
  </a>
</template>

<script>
  const allowedTypes = ['primary', 'secondary'];

  export default {
    props: {
      href: String,
      type: {
        type: String,
        default: 'primary',
        validation: function(value) {
          return allowedTypes.indexOf(value);
        }
      }
    },
    computed: {
      classes: function() {
        return [
          'gel-button',
          'gel-button--' + this.type
        ]
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  a.gel-button {
    @include gel-typography('long-primer-bold');
    color: #404040;
    border: solid 1px #404040;
    padding: 16px;
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #121212;
    }
  }
</style>
