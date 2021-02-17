<template>
  <div :class="classes">
    <div class="u-form-field__label">
      <a-label v-if="label" :error="error" :required="required">
        {{ label }}
      </a-label>
    </div>

    <div class="u-form-field__input">
      <a-input-tel
        :value="value"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        @input="handleInput"
        @blur="handleBlur"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MTelField',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Object],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessages: {
      type: [String, Array],
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: null,
      phoneNumber: this.value.number,
    }
  },
  computed: {
    classes() {
      return {
        'm-tel-field u-form-field': true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true,
      }
    },
  },
  methods: {
    handleBlur({ error }) {
      this.error = error
    },
    handleInput({ number, error, country }) {
      this.phoneNumberData = country
      if (this.error !== null) {
        this.error = error
      }

      this.$emit('input', { number, country })
    },
  },
}
</script>
