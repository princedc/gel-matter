<template>
  <button class="gel-button gel-button--transparent" @click="handleClick">
    <gel-icon set="core" icon="no" size="small" />
  </button>
</template>

<script>
  import GelIcon from './Icon.vue';

  export default {
    components: {GelIcon},
    methods: {
      handleClick: function(e) {
        e.preventDefault();
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
