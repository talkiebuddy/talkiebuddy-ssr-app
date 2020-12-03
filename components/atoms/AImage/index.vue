<template>
  <component :is="`${tag}`" :class="classes" :src="src" :alt="alt">
    <slot />
  </component>
</template>

<script>
import imageDefault from '@/assets/images/skeleton/200x200.png'

export default {
  name: 'AImage',
  props: {
    tag: {
      type: String,
      default: 'img'
    },
    src: {
      type: String,
      default () {
        return imageDefault
      }
    },
    alt: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      validator (value) {
        return ['normal', 'logo', 'card', 'gallery-image', 'gallery-thumb'].includes(value)
      }
    }
  },
  computed: {
    classes () {
      return {
        'a-image': true,
        [`a-image--${this.variant}`]: true
      }
    }
  }
}
</script>
