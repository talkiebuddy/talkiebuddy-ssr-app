<template>
  <div class="a-select">
    <select
      :id="id"
      v-model="localValue"
      class="a-select__input"
      :name="name"
      :disabled="disabled"
      @change="handleChange"
    >
      <option
        disabled
        value=""
      >
        {{ emptyValueLabel }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option.selected"
        :disabled="disabled ? disabled : option.disabled"
      >
        {{ option.label }}
      </option>
    </select>

    <a-icon name="down" class="a-select__arrow" />
  </div>
</template>

<script>
export default {
  name: 'ASelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /** Available options for the select. A single option format is: { label: String, value: String } */
    options: {
      type: Array,
      required: true
    },
    /** Value of Select box */
    value: {
      type: String,
      default: ''
    },
    /** Disables the select by adding "disabled" attribute */
    disabled: {
      type: Boolean,
      default: false
    },
    /** id attribute for select */
    id: {
      type: String,
      default: null
    },
    /** name attribute for select */
    name: {
      type: String,
      default: null
    },
    /** The value of empty (default) label */
    emptyValueLabel: {
      type: String,
      default: 'Please select one'
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  methods: {
    handleChange (event) {
      return this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.a-select {
  background: $color-neutralGrayLighter;
  position: relative;
  display: inline-flex;
  border: .1rem solud $color-neutralGrayLighter;
  border-radius: $border-radius-s;

  &__input {
    border: 0;
    padding: $spacing-s $spacing-m;
    display: block;
    font-size: inherit;
    padding-right: $spacing-2xl;
    background: inherit;
    width: 100%;
    color: inherit;

    &:focus {
      box-shadow: $shadow-lg;
    }
  }

  &__arrow {
    width: 1em;
    height: 1em;
    position: absolute;
    right: 1rem;
    fill: $color-neutralGray;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
