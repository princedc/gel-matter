<template>
  <gel-button class="gel-button" type="transparent" @click="handleClick">
    <gel-icon set="core" icon="no" size="small" />
  </gel-button>
</template>

<script>
  import GelButton from './Button.vue';
  import GelIcon from './Icon.vue';

  export default {
    components: { GelIcon, GelButton },
    methods: {
      handleClick(e) {
        e.preventDefault();
        this.$emit('click');
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
