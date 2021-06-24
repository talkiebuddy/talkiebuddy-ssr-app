<template>
  <div
    v-if="show"
    class="alert"
    :style="{
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      color: textColor,
    }"
  >
    <div class="alert-content">
      <slot></slot>
    </div>
    <span @click="show = false">
      <a-icon name="meh"></a-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    borderColor: String,
    backgroundColor: String,
    textColor: String,
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.alert {
  padding: 10px;
  display: flex;
}

.alert-content {
  flex-grow: 1;
}

.close {
  cursor: pointer;
}
</style>
