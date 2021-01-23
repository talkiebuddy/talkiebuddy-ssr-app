<template>
  <div class="a-input-checkbox">
    <input
      :id="id"
      class="a-input-checkbox__input"
      type="checkbox"
      :value="value"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :name="name"
      @change="toggle"
    />
    <div class="a-input-checkbox__box">
      <a-icon name="check" class="a-input-checkbox__graphic" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AInputCheckbox',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    /** Value of checkbox */
    value: {
      type: [String, Boolean],
      required: true,
      default: '',
    },
    /** Whether the checkbox is checked. Can also be checked programatically using v-bind. */
    checked: {
      type: Boolean,
      default: false,
    },
    /** Disables the input by adding "disabled" attribute */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Id attribute for the input */
    id: {
      type: String,
      default: null,
    },
    /** name attribute for input */
    name: {
      type: String,
      default: null,
    },
    /** This is a necessary prop for using v-model with this component. Should NOT be set */
    modelValue: {
      type: [String, Boolean],
      default: undefined,
    },
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue === undefined) {
        return this.checked
      }

      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value)
      }

      return !!this.modelValue
    },
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.shouldBeChecked) {
        this.toggle()
      }
    },
  },
  mounted() {
    if (this.checked && !this.shouldBeChecked) {
      this.toggle()
    }
  },
  methods: {
    toggle() {
      let value
      if (Array.isArray(this.modelValue)) {
        value = [...this.modelValue]

        if (this.shouldBeChecked) {
          value.splice(value.indexOf(this.value), 1)
        } else {
          value.push(this.value)
        }
      } else {
        value = !this.shouldBeChecked
      }

      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss">
.a-input-checkbox {
  $this: &;

  display: inline-flex;

  &__box {
    width: 2rem;
    height: 2rem;
    background: $color-brandPrimary;
    border-radius: $border-radius-s;
    display: flex;
    font-size: $font-size-l;
    justify-content: center;
    align-items: center;
  }

  &__graphic {
    width: 0.6em;
    height: 0.6em;
    color: $color-neutralWhite !important;
    opacity: 0;
    transition: opacity $duration-s;
  }

  &__input {
    display: none;

    &:checked + #{$this}__box #{$this}__graphic {
      opacity: 1;
    }
  }
}
</style>
