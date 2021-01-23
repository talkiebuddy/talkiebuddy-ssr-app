<template>
  <div
    ref="carousel"
    class="m-carousel"
    @touchend="handleTouchend"
    @touchstart="handleTouchstart"
  >
    <div
      class="m-carousel__inner"
      name="slide"
      :style="positionX ? `transform: translateX(${positionX}px)` : null"
    >
      <slot></slot>
    </div>

    <ul v-if="arrowNavigation" class="m-carousel__controls">
      <li
        class="m-carousel__control m-carousel__control--prev"
        @click="previous()"
      >
        <transition name="fade">
          <a-icon
            v-if="loop || currentSlide > 0"
            name="arrow-left"
            size="medium"
          ></a-icon>
        </transition>
      </li>
      <li class="m-carousel__control m-carousel__control--next" @click="next()">
        <transition name="fade">
          <a-icon
            v-if="loop || currentSlide < totalSlideNumber - 1"
            name="arrow-right"
            size="medium"
          ></a-icon>
        </transition>
      </li>
    </ul>

    <ul v-if="dottedNav && totalSlideNumber > 1" class="m-carousel__dotted-nav">
      <li
        v-for="(n, index) in totalSlideNumber"
        :key="index"
        :class="[
          'm-carousel__dot',
          `${index === currentSlide ? 'm-carousel__dot--active' : ''}`,
        ]"
        @click="currentSlide = index"
      ></li>
    </ul>
  </div>
</template>

<script>
import { debounce } from '@/plugins/helpers'

export default {
  name: 'MCarousel',
  props: {
    /** If the carousel should loop once it\'s finished */
    loop: {
      type: Boolean,
      default: false,
    },
    /** Enable/Disable dotted navgation */
    dottedNav: {
      type: Boolean,
      default: true,
    },
    /** Enable/Disable arrow navgation */
    arrowNavigation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      carouselWidth: 0,
      currentSlide: 0,
      totalSlideNumber: 0,
      touchstartX: 0,
      touchendX: 0,
    }
  },
  computed: {
    positionX() {
      return -1 * this.currentSlide * this.carouselWidth
    },
  },
  mounted() {
    this.calculateDimensions()
    this.getTotalSlidesNumber()
  },
  beforeMount() {
    window.addEventListener('resize', debounce(this.calculateDimensions, 100))
  },
  beforeDestroy() {
    window.removeEventListener(
      'resize',
      debounce(this.calculateDimensions, 100)
    )
  },
  methods: {
    getTotalSlidesNumber() {
      const slides = this.$slots.default.filter((node) => {
        if (node.tag) return node
      })

      this.totalSlideNumber = slides.length
    },
    calculateDimensions() {
      if (this.$refs.carousel) {
        const carousel = this.$refs.carousel
        const cs = getComputedStyle(carousel)
        const borderX =
          parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth)
        this.carouselWidth = carousel.offsetWidth - borderX
      }
    },
    previous() {
      if (this.currentSlide > 0) {
        this.currentSlide -= 1
      } else if (this.loop) {
        this.currentSlide = this.totalSlideNumber - 1
      }
    },
    next() {
      if (this.currentSlide < this.totalSlideNumber - 1) {
        this.currentSlide += 1
      } else if (this.loop) {
        this.currentSlide = 0
      }
    },
    handleTouchstart(event) {
      this.touchstartX = event.changedTouches[0].screenX
    },
    handleTouchend(event) {
      this.touchendX = event.changedTouches[0].screenX
      this.handleGesture()
    },
    handleGesture() {
      const { touchendX, touchstartX } = this

      if (touchendX < touchstartX) {
        this.next()
      }

      if (touchendX > touchstartX) {
        this.previous()
      }
    },
  },
}
</script>

<style lang="scss">
.m-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 30rem;

  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    transition: transform 0.3s;

    .m-carousel-slide {
      height: 100%;
      min-width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  &__controls {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  &__control {
    cursor: pointer;
    opacity: 0.3;
    transition: opacity 0.3s;
    transform: translateY(-100%);

    &:hover {
      opacity: 1;
    }
  }

  &__dotted-nav {
    position: absolute;
    bottom: 3rem;
    left: 0;
    width: 100%;
    height: 0;
    display: flex;
    justify-content: center;
  }

  &__dot {
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
    background: $color-neutralBlack;
    border-radius: 50%;
    opacity: 0.3;
    transition: opacity 0.3s;
    cursor: pointer;

    &--active,
    &:hover {
      opacity: 1;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
