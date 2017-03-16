<template>
  <div class="gel-feedback-banner">
    <div class="gel-wrap">
      <div class="gel-layout">
        <div class="gel-feedback-banner__icon gel-layout__item gel-1/6@m gel-1/5@l">
          <gel-icon set="social" icon="feedback" size="large" />
        </div>
        <div class="gel-layout__item gel-2/3@m gel-3/5@l">
          <slot name="title">
            <h2 class="gel-feedback-banner__title">How are we doing?</h2>
          </slot>
          <slot></slot>
          <gel-link-button class="gel-feedback-banner__cta" :href="feedbackLink">
            <gel-icon slot="icon" class="gel-button__icon" set="core" icon="external-link" size="small" /> Tell us what you think
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
    components: { GelIcon, GelLinkButton },
    props: {
      feedbackLink: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

  .gel-feedback-banner {
    background-color: $gel-color--beta-background;
    color: $gel-color--text;
    padding: 48px 0;
    @include gel-typography('great-primer');
  }

  .gel-feedback-banner__icon {
    padding-bottom: 24px;
  }

  .gel-feedback-banner__title {
    @include gel-typography('trafalgar-bold');
    margin-bottom: 24px;
    margin-top: 0;
  }

  .gel-feedback-banner__cta {
    margin-top: 16px;
  }

  .u-float-right {
    float: right;
  }
</style>
