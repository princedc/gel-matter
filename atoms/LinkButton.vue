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
        default: false,
        validation(value) {
          return value === false || ('set' in value && 'icon' in value);
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
    color: $gel-color--text;
    border: solid 1px $gel-color--text;
    padding: 16px;
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: $gel-color--text;
    }
  }
</style>
