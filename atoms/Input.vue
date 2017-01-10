<template>
  <div v-bind:class="{ 'is-invalid': hasErrors }">
    <label v-bind:for="inputId" class="gel-input-label">{{ label }}{{ requiredIndicator }}</label>
    <input v-bind:id="inputId"
           type="text"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)"
           class="gel-input"
    />
    <div class="gel-break-out-box">
      <h4>{{ helpText }}</h4>
      <p v-if="helpTextDetails">{{ helpTextDetails }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["label", "type", "helpText", "helpTextDetails", "errors", "value", "required"],
    computed: {
      inputId: function idGen() {
        return this.label.toLowerCase().replace(/[^\w]/, '');
      },
      hasErrors: function() {
        return Boolean(this.errors.length);
      },
      requiredIndicator: function() {
        return this.required ? '*' : '';
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

  .gel-input-label {
    @include gel-typography('pica');
  }

  .gel-input {
    border: solid 1px black;
    padding: 8px;

    .is-invalid & {
      border: solid 1px red;
    }
  }
</style>
