<template>
  <gel-form-field :id="inputId"
                  :label="label"
                  :errors="errors"
                  :helpText="helpText"
                  :helpTextDetails="helpTextDetails"
                  :required="required">
    <input-tags :id="inputId"
              :value="value"
              :options="options"
              :errors="errors"
              v-on:input="updateValue(arguments[0])"
    />
  </gel-form-field>
</template>

<script>
  import InputTags from '../atoms/InputTags.vue';
  import GelFormField from '../molecules/FormField.vue';

  export default {
    components: {InputTags, GelFormField},
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

</style>
