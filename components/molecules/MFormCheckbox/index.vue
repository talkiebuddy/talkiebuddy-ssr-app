<template>
  <fieldset :class="classes">
    <div
      v-if="label && options"
      class="m-form-checkbox__question u-form-field__label"
    >
      <a-text tag="legend">
        <template v-if="required"> * </template>{{ label }}
      </a-text>
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>

    <div v-if="options" class="m-form-checkbox__options">
      <div
        v-for="option in options"
        :key="option.value"
        :class="[
          'm-form-chekbox__option',
          'u-form-field__label',
          `${
            option.disabled || disabled ? 'u-form-field__option--disabled' : ''
          }`,
        ]"
      >
        <a-label>
          <a-input-checkbox
            v-model="selectedValue"
            :value="option.value"
            :disabled="disabled ? disabled : option.disabled"
            :name="name"
          />
          {{ option.label }}
        </a-label>
      </div>
    </div>

    <template v-else>
      <div
        :class="[
          'm-form-checkbox__options',
          `${disabled ? 'u-form-field--disabled' : ''}`,
        ]"
      >
        <a-label>
          <a-input-checkbox
            v-model="selectedValue"
            :disabled="disabled"
            :checked="checked"
          />
          {{ label }}
        </a-label>
      </div>
    </template>
  </fieldset>
</template>

<script>
import { uid } from '@/plugins/helpers'

export default {
  name: 'MFormCheckbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /** The label for all the options. Generally is a question */
    label: {
      type: String,
      default: null,
    },
    /** An array of option objects. displayed as chekcboxes. A single option format is:
    {
      label: String,
      value: String,
      disabled: Boolean
    }
    */
    options: {
      type: Array,
      default: null,
    },
    /** The error messages shown if the input validation is failed */
    errorMessages: {
      type: [String, Array],
      default: '',
    },
    /** Name attribute for input */
    name: {
      type: String,
      default: '',
    },
    /** Used to check the input by default. Works only on single checkboxes */
    checked: {
      type: Boolean,
      default: false,
    },
    /** Value of the field */
    value: {
      type: [Array, Boolean],
      required: true,
    },
    /** Whether input value is invalid */
    error: {
      type: Boolean,
      default: false,
    },
    /** Whether this field is disabled */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Whether field is required */
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedValue: null,
    }
  },
  computed: {
    id() {
      return uid()
    },
    classes() {
      return {
        'm-form-checkbox u-form-field': true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true,
      }
    },
  },
  watch: {
    selectedValue(newValue) {
      this.$emit('change', newValue)
    },
  },
  mounted() {
    if (this.options && this.options.length) {
      if (Array.isArray(this.value) && this.value.length) {
        this.selectedValue = this.value
      } else {
        this.selectedValue = []
      }
    }
  },
}
</script>

<style lang="scss">
.m-form-checkbox {
  $this: &;

  border: 0;

  .m-validation-messages {
    margin-bottom: 1rem;
    margin-top: -1rem;
  }

  /*
  // &__question{
  //   .a-text {
  //     color: $color-neutralBlack;
  //     font-weight: $font-weight-regular;
  //   }
  // }
  */

  &__options {
    margin-bottom: 1.5rem;

    .a-input-checkbox {
      margin-right: 0.5rem;
    }

    .a-label {
      display: inline-flex;
      cursor: pointer;
    }
  }
}
</style>
