<template>
  <div class="u-clickable" @click="handleClick">
    <gel-icon set="core" icon="no" size="small" />
  </div>
</template>

<script>
  import GelIcon from './Icon.vue';

  export default {
    components: { GelIcon },
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
