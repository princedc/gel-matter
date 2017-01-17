<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText" :helpTextDetails="helpTextDetails" :required="required">
    <gel-select :id="inputId"
                :value="value"
                :options="options"
                v-on:input="updateValue(arguments[0])"
    />
  </gel-form-field>
</template>

<script>
  import GelSelect from '../atoms/Select.vue';
  import GelFormField from '../molecules/FormField.vue';

  export default {
    components: { GelSelect, GelFormField },
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
  @import '../common';

</style>
