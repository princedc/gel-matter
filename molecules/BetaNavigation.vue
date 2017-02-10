<template>
  <div class="gel-beta-nav">
    <div class="gel-wrap">
      <div class="gel-layout">
        <div class="gel-layout__item gel-2/3">
          <p class="gel-beta-nav__intro">You are looking at our new site.</p>
          <p class="gel-beta-nav__detail">Take a look at our <a href="">Foundations</a> and
            example <a href="">Design Patterns</a>.</p>
        </div>
        <div class="gel-guideline-beta-cta gel-layout__item gel-1/3">
          <gel-link-button href="/gel-styleguide">
            <gel-icon set="core" icon="previous" size="small" /> Go Back to the old site
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
    }
    a:hover {
      color: #121212;
    }
  }



</style>
