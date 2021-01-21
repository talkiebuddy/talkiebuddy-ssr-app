<template>
  <fieldset :class="classes">
    <div v-if="label" class="m-form-radio__question u-form-field__label">
      <a-text tag="legend">
        <template v-if="required">
          *
        </template>{{ label }}
      </a-text>
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>

    <div class="m-form-radio__options u-form-field__label">
      <div
        v-for="option in options"
        :key="option.value"
        :class="[
          'm-form-radio__option',
          `${option.disabled || disabled ? 'u-form-field__option--disabled' : '' }`
        ]"
      >
        <a-label>
          <a-input-radio
            v-model="selectedValue"
            :value="option.value"
            :checked="disabled ? false : option.checked"
            :disabled="disabled ? disabled : option.disabled"
            :name="name"
          />
          {{ option.label }}
        </a-label>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'MFormRadio',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    errorMessages: {
      type: [String, Array],
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedValue: ''
    }
  },
  computed: {
    id () {
      return this.$uid()
    },
    classes () {
      return {
        'm-form-radio u-form-field': true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true
      }
    }
  },
  watch: {
    selectedValue (newValue) {
      this.$emit('change', newValue)
    }
  }

}
</script>

<style lang="scss">
.m-form-radio {
  .m-validation-messages {
    margin-bottom: 1rem;
    margin-top: -1rem;
  }

  // &__question {
  //   .a-text {
  //     color: $color-neutralBlack;
  //     font-weight: $font-weight-regular;
  //   }
  // }

  &__option {
    margin-bottom: 1.5rem;

    .a-input-radio {
      margin-right: .5rem;
    }

    .a-label {
      display: inline-flex;
      cursor: pointer;
    }
  }
}
</style>
