<template>
  <div class="a-input-tel">
    <vue-tel-input
      ref="inputField"
      v-model="phone"
      :placeholder="placeholder"
      :preferred-countries="preferredCountries"
      :disabled="disabled"
      :required="required"
      @onInput="onInput"
      @onBlur="$emit('blur', { phone, error, country })"
    />
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'

export default {
  name: 'AInputTel',
  components: {
    VueTelInput,
  },
  props: {
    /** The value of tel input */
    value: {
      type: [String, Object],
      default: '',
    },
    /** placeholder text for the tel input */
    placeholder: {
      type: String,
      default: 'Enter your phone number',
    },
    /** An array of prefered countries to show at the top of dropdown */
    preferredCountries: {
      type: Array,
      default() {
        return ['ID', 'US']
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      phone: this.value.number,
      error: null,
      country: null,
      // bindProps: {
      //   mode: 'international',
      //   defaultCountry: 'ID',
      //   autoDefaultCountry: false,
      //   disabled: this.disabled,
      //   autoFormat: this.autoFormat,
      //   // enabledCountryCode: false,
      //   // enabledFlags: true,
      //   preferredCountries: this.preferredCountries,
      //   onlyCountries: [],
      //   ignoredCountries: [],
      //   styleClasses: '',
      //   dropdownOptions: {
      //     disabledDialCode: this.disabledDialCode,
      //     showFlags: this.showFlags
      //   },
      //   inputOptions: {
      //     name: 'telephone',
      //     maxLength: 15,
      //     showDialCode: false,
      //     placeholder: this.placeholder,
      //     required: this.required,
      //     autocomplete: this.autocomplete,
      //     styleClasses: ''
      //   }
      // }
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
    onInput({ number, isValid, country }) {
      this.error = !isValid
      this.country = country
      this.$emit('input', { number, error: this.error, country })
    },
  },
}
</script>

<style lang="scss">
.a-input-tel {
  .vue-tel-input {
    border: 0;
    border-radius: 0;
    position: relative;

    &:focus-within {
      box-shadow: none;
      border: 0;
    }

    .vti {
      &__input {
        font-size: inherit;
        padding: 0.8rem 1rem;
        color: inherit;
        line-height: 1;
      }
      &__flag {
        box-shadow: none;
      }
      &__dropdown {
        border-radius: 0;
        position: static;

        &-item {
          padding: 1.2rem 0.8rem;
        }
      }
    }

    ul {
      width: auto;
      top: calc(100% + 0.1rem);
      left: -0.1rem;
      right: -0.1rem;
      border: 0.1rem solid $color-neutralGrayLighter;
      border-top: 0;
      border-radius: 0.3rem;
      -webkit-overflow-scrolling: touch;
    }

    li.last-preffered {
      border-bottom: 0.1rem solid $color-neutralGrayLighter;
    }
  }
}
</style>
