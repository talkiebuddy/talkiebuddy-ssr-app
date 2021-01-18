<template>
  <div class="a-input-tel">
    <vue-tel-input
      ref="inputField"
      v-model="phone"
      :preferred-countries="preferredCountries"
      :placeholder="placeholder"
      @onInput="onInput"
      @onBlur="$emit('blur', {phone, error, country})"
    />
  </div>
</template>

<script>
// import VueTelInput from 'vue-tel-input'

export default {
  name: 'AInputTel',
  // components: {
  //   VueTelInput
  // },
  props: {
    /** The value of tel input */
    value: {
      type: [String, Object],
      default: ''
    },
    /** placeholder text for the tel input */
    placeholder: {
      type: String,
      default: ''
    },
    /** An array of prefered countries to show at the top of dropdown */
    preferredCountries: {
      type: Array,
      default () {
        return ['id', 'us']
      }
    }
  },
  data () {
    return {
      phone: this.value.number,
      error: null,
      country: null
    }
  },
  methods: {
    /**
     * @param {String} number
     * the phone number inputted by user, will be formatted along with country code
     * Ex: inputted: (AU) 0432 432 432
     * number = '+61432421546'
     *
     * @param {Boolean} isValid
     * @param {String} country
     */
    onInput ({ number, isValid, country }) {
      this.error = !isValid
      this.country = country
      this.$emit('input', { number, error: this.error, country })
    }
  }
}
</script>
