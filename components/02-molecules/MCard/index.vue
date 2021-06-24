<template>
  <div class="card" :style="{ width: width }">
    <h3>{{ title }}</h3>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="false" class="card-actions"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: #dee2e6;

h3 {
  margin-block-start: 0;
}

.card {
  border: 1px solid $border-color;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.card-actions {
  padding-top: 1rem;
}
</style>
