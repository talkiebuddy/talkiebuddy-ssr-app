<template>
  <div :class="classes">
    <input
      :id="id"
      :type="inputType"
      :value="value"
      :disabled="disabled"
      :name="name"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :pattern="pattern"
      :inputmode="inputmode"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @keypress="$emit('keypress', $event)"
      @paste="$emit('paste', $event)"
    >
    <div
      v-if="type === 'password'"
      class="a-input-text__icon"
      @click="handleIconClick"
    >
      <a-icon v-if="!isVisible" name="eye" size="x-small" class="v-a-input-text__icon-graphic" />
      <a-icon v-else name="eye-invisible" size="x-small" class="v-a-input-text__icon-graphic" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AInputText',
  props: {
    /** Type of the text input. Options ['text', 'email', 'url', 'tel', 'search', 'password'] */
    type: {
      type: String,
      required: true,
      validator (value) {
        return [
          'text',
          'email',
          'url',
          'tel',
          'search',
          'password'
        ]
      }
    },
    /** Disables the input by adding "disabled" attribute */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Autocomplete attribute used for browser autocomplete */
    autocomplete: {
      type: String,
      default: 'on'
    },
    /** Value of the input */
    value: {
      type: String,
      default: null
    },
    /** Placeholder text for the input */
    placeholder: {
      type: String,
      default: 'placeholder'
    },
    /** Id attribute for the input */
    id: {
      type: String,
      default: ''
    },
    /** name attribute for the input */
    name: {
      type: String,
      default: ''
    },
    /** pattern attribute for input (used for mobile keypad) */
    pattern: {
      type: String,
      default: ''
    },
    /** inputmode attribute for input (used for mobile keypad) */
    inputmode: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputType: this.type,
      isVisible: false
    }
  },
  computed: {
    classes () {
      return {
        'a-input-text': true,
        [`a-input-text--${this.type}`]: true
      }
    }
  },
  methods: {
    handleIconClick () {
      this.isVisible = !this.isVisible
      this.inputType = this.isVisible ? 'text' : 'password'
    }
  }
}
</script>
