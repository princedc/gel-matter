<template>
  <gel-form-field :id="inputId" :label="label" :helpText="helpText" :helpTextDetails="helpTextDetails" :required="required">
    <gel-textarea :id="inputId"
                  :value="value"
                  v-on:input="updateValue(arguments[0])"
    />
  </gel-form-field>
</template>

<script>
  import GelTextarea from '../atoms/Textarea.vue';
  import GelFormField from '../molecules/FormField.vue';

  export default {
    components: { GelTextarea, GelFormField },
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

<style lang="sass" rel="stylesheet/scss">
  @import '../common';

  .gel-input {
    box-sizing: border-box;
    border: solid 1px black;
    padding: 12px;
    width: 100%;
    background: #fff;
    @include gel-typography('pica');

    .is-invalid & {
      border: solid 1px red;
    }
  }
</style>
