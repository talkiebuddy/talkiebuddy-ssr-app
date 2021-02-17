<template>
  <div :class="['a-textarea']">
    <textarea
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @blur="$emit('keypress', $event)"
      @focus="$emit('focus', $event)"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'ATextArea',
  props: {
    /** Id attribute for the textarea */
    id: {
      type: String,
      default: '',
    },
    /** name attribute for the textarea */
    name: {
      type: String,
      default: '',
    },
    /** Autocomplete attribute used for browser autocomplete */
    autocomplete: {
      type: String,
      default: 'on',
    },
    /** Value of the textarea */
    value: {
      type: String,
      default: null,
    },
    /** Placeholder text for the textarea */
    placeholder: {
      type: String,
      default: '',
    },
    /** Disables the textarea by adding "disabled" attribute */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.a-textarea {
  border-bottom: 0.1rem solid $color-neutralGray;
  width: 100%;

  /* border-radius: $border-radius-s; */
  position: relative;

  textarea {
    font-size: inherit;
    line-height: $line-height-input;
    padding: $spacing-xs $spacing-s;
    background: none;
    width: 100%;
    border: 0;
    color: inherit;

    @include on-event() {
      border-bottom: 0.1rem solid $color-brandPrimaryDarker;

      /* comment  box-shadow: 0px 2px 3px 0px $color-brandPrimary; */
    }
  }
}
</style>
