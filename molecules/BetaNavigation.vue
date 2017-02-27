<template>
  <div class="gel-beta-nav">
    <div class="gel-wrap">
      <div class="gel-layout">
        <div class="gel-layout__item gel-2/3 gel-beta-nav__content">
          <slot></slot>
        </div>
        <div class="gel-beta-nav__cta gel-layout__item gel-1/3">
          <gel-link-button href="https://www.bbc.co.uk/gel" class="u-float-right">
            Go the the GEL site
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
    color: $gel-color--text;
    padding: 16px 0;
  }

  .gel-beta-nav__content {
    @include gel-typography('body-copy');
    a {
      font-weight: bold;
    }

    a:hover {
      color: $gel-color--black;
    }
  }

  .gel-beta-nav__intro {
    @include gel-typography('double-pica');
    margin-bottom: 8px;
    margin-top: 0;
  }

  .gel-beta-nav__cta {
    text-align: right;
  }

  .gel-beta-nav__detail {
    margin: 0;
  }

  .u-float-right {
    float: right;
  }

  /**
   * TODO: These rules should be moved to global css
   */
  a {
    color: $gel-color--text;
    transition: color 300ms;
  }
  a:hover {
    color: $gel-color--link-hover;
  }



</style>
