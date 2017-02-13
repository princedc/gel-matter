<template>
  <gel-notification-panel :type="type" ref="panel">
    <gel-icon icon="yes" set="core" size="small" class="gel-notification__icon" />
    <h3 class="gel-notification__message" v-if="messageText">
      {{ messageText }}
    </h3>
  </gel-notification-panel>
</template>

<script type="text/ecmascript-6">
  import GelIcon from '../atoms/Icon.vue';
  import GelNotificationPanel from '../molecules/NotificationPanel.vue';
  import Notifier from '../atoms/Notifier';

  export default {
    components: { GelNotificationPanel, GelIcon },
    data() {
      return {
        messageText: null,
        type: 'info',
      };
    },
    mounted() {
      Notifier.init({
        success: this.show,
        info: this.show,
        error: this.show,
      });
      Notifier.showNextPageMessage();
    },
    methods: {
      show({ message, type }) {
        this.messageText = message;
        this.type = type;
        this.$refs.panel.forceShow();
      },
    },
  };
</script>
