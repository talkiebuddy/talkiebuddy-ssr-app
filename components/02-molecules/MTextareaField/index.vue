<template>
  <div :class="classes">
    <div class="u-form-field__label">
      <a-label
        v-if="label"
        :html-for="`#${id}`"
        :error="error"
        :required="required"
      >
        {{ label }}
      </a-label>
    </div>
    <div class="u-form-field__input">
      <a-textarea
        :id="id"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :value="value"
        :name="name"
        @input="(value) => $emit('input', value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keypress="$emit('keypress', $event)"
        @paste="$emit('paste', $event)"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>
  </div>
</template>

<script>
import { uid } from '@/plugins/helpers'

export default {
  name: 'MTextareaField',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    errorMessages: {
      type: [String, Array],
      default: '',
    },
    name: {
      type: String,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      defaut: false,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    id() {
      return uid()
    },
    classes() {
      return {
        'm-textarea-field u-form-field': true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true,
      }
    },
  },
}
</script>

<style lang="scss">
.m-textarea-field {
  /* comment */
}
</style>
