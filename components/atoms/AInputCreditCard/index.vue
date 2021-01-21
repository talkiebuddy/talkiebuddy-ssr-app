<template>
  <div class="a-input-credit-card">
    <input
      :id="id"
      v-model="formatted"
      type="text"
      pattern="[0-9 ]+"
      inputmode="numeric"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :name="name"
      :placeholder="placeholder"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @keypress="isNumberKey"
      @paste="onPaste"
      @change="handleChange"
    >
  </div>
</template>

<script>
import creditCardType from 'credit-card-type'

export default {
  name: 'AInputCreditCard',
  props: {
    /** Disables the input by adding "disabled" attribute */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Autocomplete attribute used for browser autocomplete */
    autocomplete: {
      type: String,
      default: 'cc-number'
    },
    /** Value of credit card field */
    value: {
      type: [Object, String],
      default: ''
    },
    /** Id attribute for the input */
    id: {
      type: String,
      default: null
    },
    /** name attribute for credit card input */
    name: {
      type: String,
      default: null
    },
    /** Placeholder text for the input */
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      creditCardNumber: this.removeSpace(this.value.number)
    }
  },
  computed: {
    formatted: {
      get () {
        return this.format(this.creditCardNumber, this.type)
      },
      set (newValue) {
        this.creditCardNumber = this.removeSpace(newValue)
      }
    },
    type () {
      const types = creditCardType(this.creditCardNumber)
      const type = types && types.length === 1 ? types[0] : null

      this.$emit('input', {
        number: this.creditCardNumber,
        type
      })

      return type
    }
  },
  watch: {
    'value.number' (newValue) {
      this.creditCardNumber = this.removeSpace(newValue)
    }
  },
  methods: {
    removeSpace (string) {
      if (string) {
        return string.replace(/\s|\./g, '')
      }
    },
    handleChange (e) {
      this.creditCardNumber = this.removeSpace(e.target.value)
    },
    onPaste (e) {
      const clipboardData = e.clipboardData || window.clipboardData
      const pastedData = clipboardData.getData('Text')
      const isNumber = pastedData.match(/^[0-9 ]+$/g)

      if (isNumber) {
        this.creditCardNumber = this.removeSpace(pastedData)
      } else {
        e.preventDefault()
      }
    },
    isNumberKey (e) {
      const charCode = (e.which) ? e.which : e.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        e.preventDefault()
      } else {
        return true
      }
    },
    format (creditCardNumber, type) {
      let number = creditCardNumber

      if (type) {
        const { gaps, lengths } = type
        const parts = []
        let lastGap = 0
        const maxCardNumber = Math.max(...lengths)
        let remaining = null

        gaps.forEach((gap) => {
          const part = number.substring(lastGap, gap)
          if (part) { parts.push(part) }
          lastGap = gap
        })

        remaining = number.substring(lastGap, maxCardNumber)
        if (parts.length) {
          number = parts.join(' ') + `${remaining ? ` ${remaining}` : remaining}`
        }

        return number
      }
    }

  }
}
</script>

<style lang="scss">
.a-input-credit-card {
  border: .1rem solid $color-neutralGrayLighter;
  width: 100%;
  border-radius: .3rem;
  position: relative;

  input {
    width: 100%;
    font-size: inherit;
    padding: .9rem 1rem;
    border: 0;
    background: none;
    color: inherit;
  }
}
</style>
