<template>
  <div :class="classes">
    <div class="u-form-field__label">
      <a-label v-if="label" :html-for="`#${id}`" :error="error" :required="required">
        {{ label }}
      </a-label>
    </div>

    <div class="u-form-field__input">
      <a-select
        :id="id"
        :value="value"
        :disabled="disabled"
        :empty-value-label="emptyValueLabel"
        :options="options"
        :autocomplete="autocomplete"
        :name="name"
        @change="value => $emit('input', value)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>
  </div>
</template>

<script>
import uid from '@/plugins/helpers/uid'

export default {
  name: 'MFormSelect',
  props: {
    label: {
      type: String,
      default: 'default label'
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },

    emptyValueLabel: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: ''
    },
    errorMessages: {
      type: [String, Array],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return uid()
    },
    classes () {
      return {
        'm-form-select u-form-field': true,
        [`${this.disabled ? 'u-form-field--disabled' : ''}`]: true,
        [`${this.error ? 'u-form-field--error' : ''}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
.m-form-select {
  .a-select {
    width: 100%;
  }
}
</style>
