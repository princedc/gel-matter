<template>
  <gel-form-field
    :errors="validationErrors"
    :id="inputId"
    :helpText="helpText"
    :label="label"
    :required="required"
  >
    <gel-input-autosuggest
      :errors="validationErrors"
      :id="inputId"
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
      helpText: { type: String },
      errors: { type: Array },
      id: { type: String },
      value: String,
      required: Boolean,
      options: Array,
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '../common';

</style>
