<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText"
                  validation-rules=""
                  :helpTextDetails="helpTextDetails">
    <gel-input-text :id="inputId"
                    v-bind:value="value"
                    v-on:input="updateValue(arguments[0])"
    />
  </gel-form-field>
</template>

<script>
  import GelInputText from '../atoms/InputText.vue';
  import GelFormField from '../molecules/FormField.vue';

  export default {
    components: {GelInputText, GelFormField},
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
      validationRules: Object,
    },
    computed: {
      inputId: function idGen() {
        console.log(this.label);
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

<style lang="sass" rel="stylesheet/scss">
  @import '../common';

</style>

