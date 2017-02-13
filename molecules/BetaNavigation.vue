<template>
  <div class="gel-beta-nav">
    <div class="gel-wrap">
      <div class="gel-layout">
        <div class="gel-layout__item gel-2/3">
          <slot>
        </div>
        <div class="gel-guideline-beta-cta gel-layout__item gel-1/3">
          <gel-link-button href="http://www.bbc.co.uk/gel">
            <gel-icon class="gel-icon--inline" set="core" icon="previous" size="small" /> Go the the GEL site
          </gel-link-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GelIcon from '../atoms/Icon.vue';
  import GelLinkButton from '../atoms/LinkButton.vue';

  export default {
    components: {GelIcon, GelLinkButton}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-beta-nav {
    background-color: $gel-color--beta-background;
    color: #404040;
    padding: 16px 0;
  }

  .gel-beta-nav__intro {
    @include gel-typography('double-pica');
    margin-bottom: 8px;
    margin-top: 0;
  }

  .gel-beta-nav__detail {
    margin: 0;

    a {
      color: #404040;
      font-weight: bold;
    }
    a:hover {
      color: #121212;
    }
  }



</style>
