<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText"
                  :required="required"
                  :errors="validationErrors"
                  :helpTextDetails="helpTextDetails">
    <gel-input-text :id="inputId"
                    :errors="validationErrors"
                    :value="value"
                    @input="updateValue(arguments[0])"
                    @blur="dirty = true"
    />
  </gel-form-field>
</template>

<script>
  import GelInputText from '../atoms/InputText.vue';
  import GelFormField from '../molecules/FormField.vue';

  export default {
    components: { GelInputText, GelFormField },
    props: {
      label: {
        type: String,
        default: '',
      },
      helpText: {type: String},
      helpTextDetails: {type: String},
      errors: {type: Array},
      id: {type: String},
      value: {type: String},
      required: Boolean,
      validator: Function,
      forceErrorsToShow: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      validationErrors() {
        return (this.dirty || this.forceErrorsToShow) ? this.errors : [];
      },
      inputId: function idGen() {
        return this.id || this.label.toLowerCase().replace(/[^\w]/, '');
      },
      hasErrors: function () {
        return this.validationErrors && this.validationErrors.length;
      }
    },
    data() {
      return {
        dirty: false,
      }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value);
      },
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

</style>
