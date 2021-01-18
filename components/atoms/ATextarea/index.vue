<template>
  <div :class="classes">
    <textarea
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @blur="$emit('keypress', $event)"
      @focus="$emit('focus', $event)"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'ATextArea',
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'a-textarea': true
      }
    }
  }
}
</script>
