<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText"
                  :required="required"
                  :errors="validationErrors"
                  :helpTextDetails="helpTextDetails"
                  :maxLength="maxLength"
                  :value="value"
  >
    <gel-input-text :id="inputId"
                    :errors="validationErrors"
                    :value="value"
                    :type="type"
                    :placeholder="placeholder"
                    @input="updateValue(arguments[0])"
                    @blur="dirty = true"
    />
  </gel-form-field>
</template>

<script>
  import GelInputText from '../atoms/InputText.vue';
  import GelFormField from '../molecules/FormField.vue';
  import FormFieldMixin from './mixins/FormFieldMixin.vue';

  export default {
    components: { GelInputText, GelFormField },
    mixins: [FormFieldMixin],
    props: {
      label: {
        type: String,
        default: '',
      },
      type: String,
      helpText: String,
      helpTextDetails: String,
      errors: Array,
      id: String,
      value: String,
      maxLength: {},
      required: Boolean,
      validator: Function,
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
