<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText"
                  :required="required"
                  :errors="validationErrors"
                  :helpTextDetails="helpTextDetails">
    <gel-input-autosuggest :id="inputId"
                    :errors="validationErrors"
                    :options="options"
                    :value="value"
                    @input="updateValue(arguments[0])"
                    @blur="dirty = true"
    />
  </gel-form-field>
</template>

<script>
  import GelInputAutosuggest from '../atoms/InputAutosuggest.vue';
  import GelFormField from '../molecules/FormField.vue';
  import FormFieldMixin from './mixins/FormFieldMixin.vue';

  export default {
    components: { GelInputAutosuggest, GelFormField },
    mixins: [FormFieldMixin],
    props: {
      label: {
        type: String,
        default: '',
      },
      helpText: {type: String},
      helpTextDetails: {type: String},
      errors: {type: Array},
      id: {type: String},
      value: String,
      required: Boolean,
      options: Array,
    },
    computed: {
      inputId: function idGen() {
        return this.id || this.label.toLowerCase().replace(/[^\w]/, '');
      },
      hasErrors: function () {
        return this.errors && this.errors.length;
      }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

</style>
