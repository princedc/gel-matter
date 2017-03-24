<template>
  <gel-form-field
    :id="inputId"
    :label="label"
    :errors="validationErrors"
    :helpText="helpText"
    :helpTextDetails="helpTextDetails"
    :required="required"
    :maxLength="maxLength"
    :value="value"
  >
    <gel-textarea
      :id="inputId"
      :value="value"
      :errors="validationErrors"
      @input="updateValue(arguments[0])"
      @blur="dirty = true"
    />
  </gel-form-field>
</template>

<script>
  import GelTextarea from '../atoms/Textarea.vue';
  import GelFormField from '../molecules/FormField.vue';
  import FormFieldMixin from './mixins/FormFieldMixin.vue';

  export default {
    components: { GelTextarea, GelFormField },
    mixins: [FormFieldMixin],
    props: {
      label: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        required: false,
      },
      value: { type: String },
      helpText: String,
      helpTextDetails: String,
      errors: Array,
      maxLength: {},
      required: Boolean,
      schema: Object,
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
