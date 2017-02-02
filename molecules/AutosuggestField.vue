<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText"
                  :required="required"
                  :errors="errors"
                  :helpTextDetails="helpTextDetails">
    <gel-input-autosuggest :id="inputId"
                    :errors="errors"
                    :options="options"
                    :value="value"
                    @input="updateValue(arguments[0])"
    />
  </gel-form-field>
</template>

<script>
  import GelInputAutosuggest from '../atoms/InputAutosuggest.vue';
  import GelFormField from '../molecules/FormField.vue';

  export default {
    components: { GelInputAutosuggest, GelFormField },
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
