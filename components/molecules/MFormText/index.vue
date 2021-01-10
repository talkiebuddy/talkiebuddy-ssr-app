<template>
  <div
    :class="[
      'v-m-form-text u-form-field',
      `${error ? 'u-form-field--error' : ''}`,
      `${disabled ? 'u-form-field--disabled' : ''}`
    ]"
  >
    <div class="u-form-field__label">
      <a-label v-if="label" :html-for="`#${id}`" :error="error">
        <template v-if="required">
          *
        </template>
        {{ label }}
      </a-label>
    </div>
    <div class="u-form-field__input">
      <a-input-text
        :id="id"
        :error="error"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :value="value"
        :name="name"
        :inputmode="inputmode"
        :pattern="pattern"
        @input="(value) => $emit('input', value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keypress="$emit('keypress', $event)"
      />
    </div>

    <div class="u-form-field__validation-messages">
      <m-validation-messages :error="error" :error-messages="errorMessages" />
    </div>
  </div>
</template>

<script>
import uid from '~/plugins/helpers/uid.js'
export default {
  name: 'MFormText',
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    name: {
      type: String,
      default: null
    },
    error: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: null
    },
    inputmode: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      defaut: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return uid()
    }
    // classes(){
    //   return {
    //     'm-form-text u-form-field',
    //     `${this.error ? 'u-form-field--error': ''}`,
    //     `${this.disabled ? 'u-form-field--disabled' : ''}`

    //     'm-buttons': true,
    //     'm-buttons--only-icon': !this.label && (this.iconPrefix || this.iconSuffix),
    //     'm-buttons--stretch': this.stretch,
    //     'm-buttons--square': this.square,
    //     'm-buttons--outline': this.isOutlined,
    //     [`m-buttons--variant-${this.variant}`]: !!this.variant,
    //   }
    // }
  }
}
</script>

<style lang="scss">
.m-form-text {}
</style>
