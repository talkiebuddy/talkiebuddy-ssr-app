<template>
  <div class="a-input-radio">
    <input
      :id="id"
      class="a-input-radio__input"
      type="radio"
      :value="value"
      :checked="shouldBeChecked"
      :disabled="disabled"
      :name="name"
      @change="toggle"
    />
    <div class="a-input-radio__circle" />
  </div>
</template>

<script>
export default {
  name: 'AInputRadio',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    /** Value of radio button */
    value: {
      type: [String, Boolean],
      required: true,
    },
    /** Whether the radio is checked. Can also be checked programatically using v-bind. */
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
      type: String,
      default: undefined,
    },
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue === null) {
        return this.checked
      }

      return this.modelValue === this.value
    },
  },
  watch: {
    checked() {
      if (this.checked) {
        this.toggle()
      }
    },
  },
  mounted() {
    if (this.checked) {
      this.toggle()
    }
  },
  methods: {
    toggle() {
      this.$emit('change', this.value)
    },
  },
}
</script>

<style lang="scss">
.a-input-radio {
  $this: &;

  display: inline-flex;

  &__circle {
    width: $spacing-l;
    height: $spacing-l;
    background: $color-brandPrimaryDarker;
    border-radius: $border-radius-round;
    display: flex;
    font-size: $font-size-xs;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      width: $spacing-xs;
      height: $spacing-xs;
      background: $color-neutralWhite;
      border-radius: $border-radius-round;
      opacity: 0;
      transition: opacity $duration-s;
    }
  }

  &:focus {
    box-shadow: $shadow-m;
  }

  &__input {
    display: none;

    &:checked + #{$this}__circle::before {
      opacity: 1;
    }
  }
}
</style>
