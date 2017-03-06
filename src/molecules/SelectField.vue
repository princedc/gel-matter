<template>
  <gel-form-field :id="inputId"
                  :label="label"
                  :errors="validationErrors"
                  :helpText="helpText"
                  :helpTextDetails="helpTextDetails"
                  :required="required">
    <div slot="helpText" v-if="$slots.helpText"><slot name="helpText"></slot></div>
    <gel-select :id="inputId"
                :value="value"
                :errors="validationErrors"
                :options="options"
                v-on:input="updateValue(arguments[0])"
                @blur="dirty = true"
    />
  </gel-form-field>
</template>

<script>
  import GelSelect from '../atoms/Select.vue';
  import GelFormField from '../molecules/FormField.vue';
  import FormFieldMixin from './mixins/FormFieldMixin.vue';

  export default {
    components: { GelSelect, GelFormField },
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
      value: String,
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
  @import '../common';

</style>
