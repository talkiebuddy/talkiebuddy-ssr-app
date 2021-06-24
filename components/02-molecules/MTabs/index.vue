<template>
  <div class="tabs" :style="{ width: width, height: height }">
    <div class="tabs-top">
      <div
        v-for="(name, index) in names"
        :key="name"
        class="tab"
        :class="{ tabActive: tabIndex == `${index}` }"
        @click="tabIndex = `${index}`"
      >
        {{ name }}
      </div>
      <div class="tab-buffer"></div>
    </div>
    <div class="tab-content">
      <div
        v-for="(name, index) in names"
        :key="`tab${index}`"
        :tabContent="index"
      >
        <slot :name="`tab${index}`"></slot>
        trial
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  components: {},
  props: {
    width: String,
    height: String,
    names: Array,
  },
  data() {
    return {
      tabIndex: 0,
    }
  },
  computed: {
    tabContent(index) {
      if (this.tabIndex === ` tab${index}`) return true
      else return false
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: #dee2e6;

.tab-content {
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  padding: 1rem;
}

.tabActive {
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;
  border-top: 1px solid $border-color;
  border-bottom: none !important;
}

.tabs-top {
  display: flex;
}
.tab {
  cursor: pointer;
  padding: 0.5rem;
  display: inline-block;
  border-bottom: 1px solid $border-color;
}
.tab-buffer {
  flex: 1;
  border-bottom: 1px solid $border-color;
}
</style>
