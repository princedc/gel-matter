<template>
  <gel-form-field :id="inputId"
                  :label="label"
                  :errors="validationErrors"
                  :helpText="helpText"
                  :helpTextDetails="helpTextDetails"
                  :required="required">
    <input-tags :id="inputId"
              :value="value"
              :options="options"
              :errors="validationErrors"
              v-on:input="updateValue(arguments[0])"
    />
  </gel-form-field>
</template>

<script>
  import InputTags from '../atoms/InputTags.vue';
  import GelFormField from '../molecules/FormField.vue';
  import FormFieldMixin from './mixins/FormFieldMixin.vue';

  export default {
    components: { InputTags, GelFormField },
    mixins: [FormFieldMixin],
    props: {
      label: {
        type: String,
        required: true,
      },
      helpText: String,
      helpTextDetails: String,
      errors: Array,
      id: {
        type: String,
        required: false,
      },
      value: Array,
      options: Array,
      required: Boolean,
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
