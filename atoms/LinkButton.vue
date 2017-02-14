<template>
  <a class="gel-button gel-button-secondary gel-long-primer-bold" :href="href">
    <span class="gel-button__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <gel-icon class="gel-button__icon" :set="icon.set" :icon="icon.icon" size="small" />
      </slot>
    </span>
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
        validation(value) {
          return allowedTypes.indexOf(value);
        },
      },
      icon: {
        type: Object,
        default: false,
        validation(value) {
          return ('set' in value && 'icon' in value);
        },
      },
    },
    computed: {
      classes() {
        return [
          'gel-button',
          `gel-button--${this.type}`,
        ];
      },
    },
  };
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
