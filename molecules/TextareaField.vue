<template>
  <gel-form-field :id="inputId"
                  :label="label"
                  :errors="validationErrors"
                  :helpText="helpText"
                  :helpTextDetails="helpTextDetails"
                  :required="required"
  >
    <gel-textarea :id="inputId"
                  :value="value"
                  :errors="validationErrors"
                  v-on:input="updateValue(arguments[0])"
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
      required: Boolean,
      schema: Object,
    },
    computed: {
      inputId: function idGen() {
        return this.id || this.label.toLowerCase().replace(/[^\w]/, '');
      },
      hasErrors: function() {
        return this.errors && this.errors.length;
      }
    },
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
