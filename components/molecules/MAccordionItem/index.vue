<template>
  <article
    :class="[
      'm-accordion-item',
      isExpanded ? 'm-accordion-item--is-expanded' : '',
    ]"
  >
    <header class="m-accordion-item__header" @click="handleClick">
      <div class="m-accordion-item__title">
        <a-heading :level="4">
          <slot name="title"></slot>
          {{ title }}
        </a-heading>
      </div>

      <div class="m-accordion-item__icon">
        <a-icon name="down" size="small"></a-icon>
      </div>
    </header>
    <div
      class="m-accordion-item__content"
      :style="`height: ${isExpanded ? height : 0}px`"
    >
      <div ref="content" class="m-accordion-item__content-inner">
        <slot name="content"></slot>
        <a-text>{{ content }}</a-text>
      </div>
    </div>
  </article>
</template>

<script>
import { debounce } from '@/plugins/helpers'

export default {
  name: 'MAccordionItem',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isExpanded: true,
      height: null,
    }
  },
  watch: {
    isOpen(newVal) {
      this.isExpanded = newVal
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.height = this.$refs.content.offsetHeight
      this.isExpanded = this.isOpen
    })
  },
  beforeMount() {
    window.addEventListener('resize', debounce(this.getHeight, 100))
  },
  beforeDestroy() {
    window.removeEventListener('resize', debounce(this.getHeight, 100))
  },
  methods: {
    getHeight() {
      this.height = this.$refs.content.offsetHeight
    },
    handleClick() {
      this.isExpanded = !this.isExpanded
      this.$emit('click', this.isExpanded)
    },
  },
}
</script>

<style lang="scss">
.m-accordion-item {
  $this: &;

  &__header {
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border: 0.1rem solid $color-neutralGray;
    cursor: pointer;
    background: $color-neutralWhite;
    position: relative;
    z-index: 2;
  }

  &__content {
    transition: height 0.3s;
    height: auto;
    overflow: hidden;
    border: 0.1rem solid $color-neutralGray;
    border-top: 0;
    margin-top: -0.1rem;
    background: $color-neutralGrayLighter;
    position: relative;
  }

  &__content-inner {
    padding: 1.5rem;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
    transform: translateY(-20px);
  }

  &__icon {
    transition: transform 0.3s;
  }

  &--is-expanded {
    #{$this}__content-inner {
      opacity: 1;
      transform: none;
    }

    #{$this}__icon {
      transform: rotate(180deg);
    }
  }
}
</style>
