<template>
  <div :class="classes">
    <div class="u-form-field__label">
      <a-label v-if="label" :html-for="`#${id}`" :required="required">
        {{ label }}
      </a-label>
    </div>

    <div class="u-form-field__input">
      <a-input-text
        :id="id"
        v-model="formattedExpiry"
        type="text"
        pattern="[0-9/]+"
        inputmode="numeric"
        :required="required"
        :disabled="disabled"
        :name="name"
        :autocomplete="autocomplete"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keypress="format"
        @change="handleChange"
        @paste="onPaste"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>
  </div>
</template>

<script>
import { uid, limitLength, isNumberKey, onlyDigits } from '@/plugins/helpers'

export default {
  name: 'MFormExpiryDate',
  props: {
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'MM/YY',
    },
    errorMessages: {
      type: [String, Array],
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'cc-exp',
    },
  },
  data() {
    return {
      expiry: this.value ? onlyDigits(this.value).slice(0, 4) : '',
      lastDate: '',
    }
  },
  computed: {
    id() {
      return uid()
    },
    formattedExpiry: {
      get() {
        return this.formatDate(this.expiry)
      },
      set(newVal) {
        this.lastDate = this.expiry
        if (newVal.length === 1 && newVal > 1) {
          newVal = `0${newVal}`
        }
        this.expiry =
          this.lastDate.lenght >= newVal.length
            ? ''
            : onlyDigits(newVal).slice(0, 4)
        this.$emit('input', this.expiry)
      },
    },
    classes() {
      return {
        'm-form-expiry-date u-form-field': true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true,
      }
    },
  },
  watch: {
    value(newValue) {
      this.expiry = onlyDigits(newValue).slice(0, 4)
    },
  },
  methods: {
    handleChange(e) {
      const { value } = e.target
      this.expiry = onlyDigits(value).slice(0, 4)
    },
    format(e) {
      limitLength(e, 5)
      isNumberKey(e)
    },
    onPaste(e) {
      const clipboardData = e.clipboardData || window.clipboardData
      const pastedData = clipboardData.getData('Text')
      const isNumber = pastedData.match(/^[0-9/]+$/g)

      if (isNumber) {
        this.expiry = onlyDigits(pastedData).slice(0, 4)
      } else {
        e.preventDefault()
      }
    },
    formatDate(date) {
      if (date.length > 2) {
        const month = date.slice(0, 2)
        const year = date.slice(2, 4)

        return `${month}/${year}`
      }
      return date
    },
  },
}
</script>
