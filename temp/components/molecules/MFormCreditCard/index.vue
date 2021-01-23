<template>
  <fieldset :class="classes">
    <div class="u-form-field__label">
      <a-label
        v-if="label"
        :html-for="`#card-number${uid}`"
        :required="required"
      >
        {{ label }}
      </a-label>
    </div>

    <div class="m-form-credit-card-number__field u-form-field__input">
      <a-input-credit-card
        :id="`card-number${uid}`"
        v-model="creditCard"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />

      <transition name="fade">
        <a-icon
          v-if="creditCard.type"
          :name="creditCard.type ? `credit-card-${creditCard.type.type}` : ''"
          size="medium"
        />
      </transition>
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>
  </fieldset>
</template>

<script>
import { uid } from '@/plugins/helpers'

export default {
  name: 'MFormCreditCardNumber',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      default: '•••• •••• •••• ••••',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: '',
    },
    errorMessages: {
      type: [String, Array],
      default: null,
    },
  },
  data() {
    return {
      creditCard: {
        number: this.value.number,
        type: null,
      },
    }
  },
  computed: {
    uid() {
      return uid()
    },
    classes() {
      return {
        'm-form-credit-card-number u-form-field': true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true,
      }
    },
  },
  watch: {
    'value.number'(newValue) {
      this.$set(this.creditCard, 'number', newValue)
    },
    creditCard(newValue) {
      this.$emit('input', newValue)
    },
  },
}
</script>

<style lang="scss">
.m-form-credit-card-number {
  position: relative;

  .a-icon {
    position: absolute;
    right: 1rem;
    bottom: 0;
    top: 0;
    margin: auto;
  }
}
</style>
