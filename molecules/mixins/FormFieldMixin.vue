<script>
export default {
  data() {
    return {
      dirty: false,
    };
  },
  props: {
    forceErrorsToShow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputId: function idGen() {
      return this.id || this.label.toLowerCase().replace(/[^\w]/, '');
    },
    validationErrors() {
      return (this.dirty || this.forceErrorsToShow) ? this.errors : [];
    },
  },
};
</script>
