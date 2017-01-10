<template>
  <div>
    <label v-bind:for="inputId">{{ label }}</label>
    <select v-bind:id="inputId"
            v-bind:value="value"
            v-on:input="updateValue($event.target.value)"
    >
      <option v-for="option in options">{{ option.name }}</option>
    </select>
    <div class="gel-break-out-box">
      <h4>{{ helpText }}</h4>
      <p v-if="helpTextDetails">{{ helpTextDetails }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["label", "type", "helpText", "helpTextDetails", "errors", "value"],
    computed: {
      inputId: function idGen() {
        return this.label.toLowerCase().replace(/[^\w]/, '');
      }
    },
    methods: {
      updateValue: function(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="sass">
  @import '../common';


</style>
