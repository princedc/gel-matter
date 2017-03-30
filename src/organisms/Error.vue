<template>
<div class="gel-error-page">
  <div class="gel-wrap">
    <!-- <img class="gel-error-page__background-image" src="http://placehold.it/1080x786" /> -->

    <div class="gel-error-page__contents">
      <div class="gel-layout__item gel-9/12 gel-7/12@s">
        <div class="gel-error-page__text-box">
          <p class="gel-error-page__code">{{ errorCode }}</p>
          <h1 class="gel-error-page__title">{{ this.errorTitle }}</h1>
          <p class="gel-error-page__message">{{ errorMessage }}</p>
          <gel-link-button href="/" type="custom" class="gel-error-page__button">Go to Homepage</gel-link-button>
          <!-- <h2 class="gel-error-page__fact-title">Did you know&hellip;</h2>
          <p class="gel-error-page__fact-text">{{ fact.text }}</p> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { GelLinkButton } from 'gel-matter';

const defaultMessages = {
  404: "You may have typed the web address incorrectly. Please check the address and try again.",
  500: "We have a technical problem which we are trying to fix. Please click on the link below, or try again later",
};

const defaultTitles = {
  404: "Sorry, but we can’t find this page",
  500: "Sorry, something has gone wrong",
};

export default {
  components: { GelLinkButton },
  props: {
    title: String,
    message: String,
    errorCode: {
      type: Number,
      default: 404,
    },
    facts: {
      type: Array,
      default() {
        return [
          {
            text: "Despite working as a BBC broadcaster from 1941 to 1943, there are no known recordings of George Orwell’s voice.",
            image: ""
          },
          {
            text: "The original Doctor Who pilot episode, which was thought to be lost forever, was rediscovered in 1978 in a mislabelled film can.",
            image: ""
          },
          {
            text: "A special Clangers episode, Vote for Froglet!, was aired for the General Election on 10th October 1974 and hasn’t been broadcast since.",
            image: ""
          },
        ];
      },
    },
  },
  computed: {
    errorTitle() {
      if (this.title) {
        return this.title;
      } else if (this.errorCode in defaultTitles) {
        return defaultTitles[this.errorCode];
      } else {
        return defaultMessages[500];
      }
    },
    errorMessage() {
      if (this.message) {
        return this.message;
      } else if (this.errorCode in defaultMessages) {
        return defaultMessages[this.errorCode];
      } else {
        return defaultMessages[500];
      }
    },
    fact() {
      return this.facts[Math.floor(Math.random() * this.facts.length)];
    },
  },
}
</script>

<style lang="scss">
@import '../common';

.gel-error-page {
  position: relative;
  min-height: 90vh;
  overflow: hidden;
  background-color: $gel-color--gallery;
}

.gel-error-page__contents {
  @include gel-layout;
  position: relative;
  padding-top: 8px;
  @include mq($from: gel-bp-s) {
    padding-top: 16px;
  }
}

.gel-error-page__background-image {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  right: 0;
}

.gel-error-page__text-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 16px 8px;

  // @include gel-layout-item;
  // @include gel-columns(9/12);
  @include mq($from: gel-bp-s) {
    padding: 16px;
  }
}

.gel-error-page__title {
  @include gel-typography('trafalgar-bold');
  margin: 0 0 12px;
  @include mq($from: gel-bp-s) {
    margin-bottom: 16px;
  }

  color: #1b1c1c;
}

.gel-error-page__message {
  @include gel-typography('great-primer');
  margin: 0 0 16px;
  @include mq($from: gel-bp-m) {
    margin-bottom: 24px;
  }
  color: #4d4c4c;
}

.gel-error-page__code {
  @include gel-typography('double-pica-bold');
  margin: 0 0 12px;
  @include mq($from: gel-bp-s) {
    margin-bottom: 16px;
  }
  @include mq($from: gel-bp-m) {
    margin-bottom: 24px;
  }
  color: #4d4c4c;
}

.gel-error-page__fact-title {
  @include gel-typography('great-primer-bold');
  margin: 16px 0 8px;
  padding-top: 16px;
  border-top: solid 1px #c9c9c9;
  color: #1b1c1c;

  @include mq($from: gel-bp-m) {
    padding-top: 24px;
  }
}

.gel-error-page__fact-text {
  @include gel-typography('long-primer');
  margin: 0;
  color: #1b1c1c;
  @include mq($from: gel-bp-s) {
    margin-bottom: 8px;
  }
}

.gel-error-page__button.gel-error-page__button {
  background: $gel-color--blue;
  color: $gel-color--white;
  border-color: $gel-color--blue;
  padding: 12px 20px;
  &:hover {
    color: $gel-color--white;
  }
}
</style>
