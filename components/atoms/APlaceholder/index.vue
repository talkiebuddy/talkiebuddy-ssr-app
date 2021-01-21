<template>
  <div :class="classes">
    <div
      class="a-placeholder__graphic-container"
      :style="type === 'image' ? `padding-top: ${100 / aspectRatio}%` : null"
    >
      <transition name="fade">
        <svg
          v-show="isLoaded"
          role="img"
          aria-labelledby="loading-aria"
          class="a-placeholder__graphic"
          :viewBox="computedViewBox"
          :preserveAspectRatio="preserveAspectRatio"
          @loaded="isLoaded = true"
        >
          <title id="loading-aria">Loading...</title>
          <rect
            class="a-placeholder__content"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#gradient1)"
            :clip-path="`url(#${shapeId})`"
          />
          <defs>
            <component
              :is="graphic.default"
              v-if="graphic"
              :lines="lines"
              :line-scale="lineScale * 10"
              :line-height="lineHeight"
              :rounded-corners="roundedCorners"
              :shape-id="shapeId"
            />

            <linearGradient id="gradient1">
              <stop :stop-color="backgroundColor" offset="0">
                <animate
                  v-if="animation"
                  attributeName="offset"
                  values="-1; 1"
                  :dur="`${speed}s`"
                  repeatCount="indefinite"
                />
              </stop>
              <stop :stop-color="foregroundColor" offset=".5">
                <animate
                  v-if="animation"
                  attributeName="offset"
                  values="-.5; 1.5"
                  repeatCount="indefinite"
                  :dur="`${speed}s`"
                />
              </stop>
              <stop :stop-color="backgroundColor" offset="1">
                <animate
                  v-if="animation"
                  attributeName="offset"
                  values="0; 2"
                  repeatCount="indefinite"
                  :dur="`${speed}s`"
                />
              </stop>
            </linearGradient>
          </defs>

        </svg>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'APlaceholder',
  props: {
    /** Type of placeholder. Options: ['bullet-list', 'text', 'image'] */
    type: {
      type: String,
      required: true,
      validator (value) {
        return ['text', 'image', 'bullet-list', 'custom'].includes(value)
      }
    },
    /** Available only on 'image' type. The name of graphic to be used as the center icon */
    imageGraphic: {
      type: String,
      default: null
    },
    /** Available only on 'image' type. The ratio of the placeholder box. It equals to width/height. for example 400x300 image ratio will be 400/300 = 1.33 */
    aspectRatio: {
      type: Number,
      default: 1.33
    },
    /** Available only on ['text', 'bullet-list'] type. The number of lines of placeholders. */
    lines: {
      type: Number,
      default: 3
    },
    /** Available only on ['text', 'bullet-list'] type. The scale multiplier for placeholder lines. For example '2' will double the size of each line */
    lineScale: {
      type: Number,
      default: 1
    },
    /** Available only on ['text', 'bullet-list'] type. The space between each placeholder line. '1.5' would be 1.5 times the space */
    lineHeight: {
      type: Number,
      default: 1.5
    },
    /** Available only on ['text', 'bullet-list'] type. Make each placeholder line rounded */
    roundedCorners: {
      type: Boolean,
      default: true
    },
    /** The main background color for placeholder. Value in HEX or RGB */
    backgroundColor: {
      type: String,
      default: '#ccc'
    },
    /** The second foreground color for placeholder. Value in HEX or RGB */
    foregroundColor: {
      type: String,
      default: '#f5f5f5'
    },
    /** Disable/Enable animation on placeholder */
    animation: {
      type: Boolean,
      default: true
    },
    /** The speed of animation in seconds */
    speed: {
      type: Number,
      default: 1.5
    },
    preserveAspectRatio: {
      type: String,
      default: ''
    },
    customWidth: {
      type: Number,
      default: 400
    },
    customHeight: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      graphic: null,
      isLoaded: false
    }
  },
  computed: {
    graphicLoader () {
      let graphic = this.type
      graphic = this.imageGraphic ? this.imageGraphic : graphic
      return () => import(/* webpackChunkName: "Placeholder" */'./graphics/' + graphic)
    },
    computedViewBox () {
      const { type } = this

      if (type === 'text' || type === 'bullet-list') {
        const { lineScale, lineHeight, lines } = this
        let height = (lineScale * 10 * lines) + (lineScale * 10 * (lines - 1) * lineHeight)
        height = type === 'bullet-list' ? height + lineScale * 10 : height
        return `0 0 400 ${height}`
      }

      if (type === 'image') { return '0 0 400 400' }

      if (type === 'custom') { return `0 0 ${this.customWidth} ${this.customHeight}` }

      return '0 0 400 240'
    },
    shapeId () {
      return this.$uid()
    },
    classes () {
      return {
        'a-placeholder': true,
        [`a-placeholder--${this.type}`]: true
      }
    }
  },
  async created () {
    await this.loadGraphic()
    this.isLoaded = true
  },
  methods: {
    async loadGraphic () {
      try {
        this.graphic = await this.graphicLoader()
      } catch (e) {
        throw new Error('Could not load placeholder graphic')
      }
    }
  }
}
</script>

<style lang="scss">
.a-placeholder {
  max-width: 50rem;
  $this: &;

  &__graphic {
    display: block;
    width: 100%;
    height: 100%;
  }

  &--image {
    background: $color-neutralGrayLighter;

    .a-placeholder__graphic-container {
      width: 100%;
      position: relative;
    }

    .a-placeholder__graphic {
      position: absolute;
      width: 40%;
      height: 40%;
      max-width: 15rem;
      max-height: 15rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &--custom {
    background: $color-neutralGrayLighter;

    .a-placeholder__graphic-container {
      width: 100%;
      position: relative;
    }
  }
}

</style>
