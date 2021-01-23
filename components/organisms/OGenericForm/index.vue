<template>
  <form class="o-generic-form" @submit="handleSubmit">
    <div
      v-for="field in visibleFields"
      :key="field.name"
      :class="[
        'o-generic-form__section',
        `o-generic-form__section--${field.name}`,
        `${
          $v.formData[field.name] && $v.formData[field.name].$error
            ? 'o-generic-form__section--error'
            : ''
        }`,
      ]"
    >
      <component
        :is="field.component"
        :type="field.type"
        :label="field.label"
        :name="field.name.toLowerCase()"
        :options="field.options"
        :disabled="field.disabled"
        :checked="field.checked"
        :placeholder="field.placeholder"
        :empty-value-label="field.emptyValueLabel"
        :autocomplete="field.autocomplete"
        :value="formData[field.name]"
        :error="
          $v.formData[field.name] ? $v.formData[field.name].$error : false
        "
        :error-messages="
          field.errorMessage ||
          $getErrorMessages(field.name, field.visibleValidation)
        "
        :validations="validations || null"
        @input="(value) => handleInput(field.name, value)"
        @change="(value) => handleInput(field.name, value)"
        @blur="
          $v.formData[field.name] ? $v.formData[field.name].$touch() : () => {}
        "
      />
    </div>

    <m-buttons type="submit" variant="primary" label="Submit" />
  </form>
</template>

<script>
import validationErrorMessages from '@/mixins/validationErrorMessages'
import scrollTo from '@/mixins/scrollTo'

export default {
  name: 'OGenericForm',
  mixins: [validationErrorMessages, scrollTo],
  props: {
    /** An array objects. Each object represent a form field for example VFormText. */
    fields: {
      type: Array,
      required: true,
    },
    /** An object including validations of the specific */
    validations: {
      type: Object,
      default: () => {},
    },
    /** Value of the form object. Includes all form fields */
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: this.value,
    }
  },
  computed: {
    visibleFields() {
      return this.fields.filter((formField) => {
        if (formField && formField.conditionalRendering) {
          const { $v } = this

          const { field, operator, value } = formField.conditionalRendering
          const validationField = $v.formData[field]

          if (operator === '==') {
            return validationField.$model === value
          }

          if (operator === '!=') {
            return validationField.$model !== value
          }

          return false
        }

        return true
      })
    },
  },
  methods: {
    handleInput(name, value) {
      this.$set(this.formData, name, value)
      this.$emit('input', this.formData)
    },
    handleSubmit(e) {
      e.preventDefault()
      this.$v.formData.$touch()

      if (!this.$v.$invalid) {
        this.$emit('submit', this.formData)
      } else {
        setTimeout(
          () => this.$scrollTo('.o-generic-form__section--error', 400, -20),
          100
        )
      }
    },
  },
  validations() {
    return {
      formData: this.validations,
    }
  },
}
</script>

<style lang="scss">
.o-generic-form {
  max-width: 60rem;
  &__section {
    margin-bottom: 2rem;

    &:last-child {
      margin: 0;
    }
  }
}
</style>
