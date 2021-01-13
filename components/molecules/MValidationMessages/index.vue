<template>
  <div v-if="errorMessages" class="m-validation-messages">
    <template v-if="errorMessages instanceof Array">
      <template
        v-if="
          error && errorMessages.length && typeof errorMessages[0] === 'string'
        "
      >
        <a-text v-for="message in errorMessages" :key="message" size="x-small">
          {{ message }}
        </a-text>
      </template>
      <template v-else-if="typeof errorMessages[0] === 'object'">
        <div
          v-for="message in errorMessages"
          :key="message.text"
          :class="[
            'm-validation-messages__message',
            `${
              message.state
                ? `m-validation-messages__message--${message.state}`
                : ''
            }`,
          ]"
        >
          <a-text size="x-small">
            {{ message.text }}
          </a-text>
        </div>
      </template>
    </template>
    <a-text
      v-else-if="typeof errorMessages === 'string' && error"
      size="x-small"
    >
      {{ errorMessages }}
    </a-text>
  </div>
</template>

<script>
export default {
  name: 'MValidationMessages',
  props: {
    errorMessages: {
      type: [Array, String],
      default: () => {}
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.v-m-validation-messages {
  .v-a-text {
    color: inherit;
  }
}
</style>
