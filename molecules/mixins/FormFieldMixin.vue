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
    validationErrors() {
      return (this.dirty || this.forceErrorsToShow) ? this.errors : [];
    },
  },
};
</script>
