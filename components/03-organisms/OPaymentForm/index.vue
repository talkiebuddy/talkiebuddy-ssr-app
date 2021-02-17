<template>
  <div :class="classes">
    <div class="o-payment-form__section o-payment-form__section--card-holder">
      <m-text-field
        v-model="payment.cardHolder"
        type="text"
        autocomplete="cc-name"
        :label="label.cardHolder"
        :error="$v.payment.cardHolder.$error"
        :error-messages="$getErrorMessages('cardHolder')"
        :placeholder="placeholder.cardHolder"
        @blur="$v.payment.cardHolder.$touch()"
      />
    </div>

    <div class="o-payment-form__section o-payment-form__section--card-number">
      <m-credit-card-field
        v-model="payment.creditCard"
        autocomplete="cc-number"
        :label="label.creditCardNumber"
        :placeholder="placeholder.creditCardNumber"
        :error="$v.payment.creditCard.$error"
        :error-messages="$getErrorMessages('creditCard')"
        @blur="$v.payment.creditCard.$touch"
      />
    </div>

    <div class="o-payment-form__section--card-details">
      <m-text-field
        v-model="payment.securityCode"
        type="text"
        pattern="\d*"
        autocomplete="cc-csc"
        inputmode="numeric"
        :error="$v.payment.securityCode.$error"
        :error-messages="$getErrorMessages('securityCode')"
        :label="
          label.securityCode +
          `${
            payment.creditCard.type
              ? ` (${payment.creditCard.type.code.name})`
              : ''
          }`
        "
        :placeholder="placeholder.securityCode"
        @blur="$v.payment.securityCode.$touch()"
        @keypress="handleSecurityKeypress"
      />

      <m-expiry-date-field
        v-model="payment.expiry"
        autocomplete="cc-exp"
        :label="label.expiry"
        :placeholder="placeholder.expiry"
        :error="$v.payment.expiry.$error"
        :error-messages="$getErrorMessages('expiry')"
        @blur="$v.payment.expiry.$touch()"
      />
    </div>
  </div>
</template>

<script>
import validationErrorMessages from '@/mixins/validationErrorMessages'
import { required, creditCard, expiry, minLength } from '@/validations'
import { limitLength, isNumberKey } from '@/plugins/helpers'

export default {
  name: 'OPaymentForm',
  mixins: [validationErrorMessages],
  props: {
    label: {
      type: Object,
      default() {
        return {
          cardHolder: '',
          creditCardNumber: '',
          securityCode: '',
          expiry: '',
        }
      },
    },
    placeholder: {
      type: Object,
      default() {
        return {
          cardHolder: "Cardholder's Name",
          creditCardNumber: '•••• •••• •••• ••••',
          securityCode: 'Security Code',
          expiry: 'MM/YY',
        }
      },
    },
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    validations: {
      type: Object,
      // default: () => {}
      default() {
        return {
          payment: {
            creditCard,
            cardHolder: { required, minLength: minLength(3) },
            securityCode: { required },
            expiry,
          },
        }
      },
    },
    errorMessages: {
      type: [String, Array],
      default: '',
    },
  },
  data() {
    return {
      payment: {
        creditCard: {
          number: '',
        },
        cardHolder: '',
        securityCode: '',
        expiry: '',
      },
    }
  },
  computed: {
    classes() {
      return {
        'o-payment-form': true,
        [`${this.error ? 'o-payment-form--error' : ''}`]: true,
        [`${this.success ? 'o-payment-form--success' : ''}`]: true,
        [`${this.disabled ? 'v-o-payment-form--disabled' : ''}`]: true,
      }
    },
  },
  watch: {
    error(newValue) {
      if (newValue) {
        this.$v.$touch()
      }
    },
    'payment.creditCard'(newValue) {
      this.$emit('input', this.payment)
    },
    'payment.cardHolder'(newValue) {
      this.$emit('input', this.payment)
    },
    'payment.securityCode'(newValue) {
      this.$emit('input', this.payment)
    },
    'payment.expiry'(newValue) {
      this.$emit('input', this.payment)
    },
    value(newValue) {
      const { payment } = this
      const { cardHolder, expiry, securityCode, creditCard } = newValue

      this.$set(payment, 'creditCard', creditCard)
      this.$set(payment, 'securityCode', securityCode)
      this.$set(payment, 'expiry', expiry)
      this.$set(payment, 'cardHolder', cardHolder)
    },
  },
  created() {
    if (this.value) {
      const { cardHolder, expiry, securityCode, creditCard } = this.value
      this.payment.creditCard.number = creditCard ? creditCard.number : ''
      this.payment.cardHolder = cardHolder || ''
      this.payment.expiry = expiry || ''
      this.payment.securityCode = securityCode || ''
    }
  },
  methods: {
    handleSecurityKeypress(e) {
      let size
      if (this.payment.creditCard.type) {
        size = this.payment.creditCard.type.code.size
      }

      limitLength(e, size || 4)
      isNumberKey(e)
    },
  },
  validations() {
    return this.validations
  },
}
</script>

<style lang="scss">
.o-payment-form {
  display: grid;

  &__section {
    margin-bottom: 1rem;

    &--card-details {
      display: grid;
      grid-column-gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
