<template>
  <div class="m-lazy-image">
    <div
      class="m-lazy-image__inner"
      :style="`padding-top: ${(1 / aspectRatio) * 100}%`"
    >
      <transition-group name="fade-long">
        <a-placeholder
          v-show="!isLoaded"
          key="1"
          type="raw-image"
          :aspect-ratio="aspectRatio"
          :image-graphic="placeholderGraphic"
        ></a-placeholder>
        <a-image
          v-show="isLoaded"
          key="2"
          :src="src"
          :alt="alt"
          :srcset="srcset"
          :picture="picture"
          :sources="sources"
          :sizes="sizes"
          @loaded="handleOnload"
        ></a-image>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MLazyImage',
  props: {
    /** Image src. Can be a url or local filename which loads from assets folder */
    src: {
      type: String,
      default: '',
    },
    /** Image alt attribute */
    alt: {
      type: String,
      default: '',
    },
    /** Image srcset attribute */
    srcset: {
      type: String,
      default: '',
    },
    /** Image sizes attribute */
    sizes: {
      type: String,
      default: '',
    },
    /** Whether a picture tag should be rendered */
    picture: {
      type: Boolean,
    },
    /** Sources for picture tag (if picture prop is set) */
    sources: {
      type: Array,
      default: () => [],
    },
    /** Aspect ration of the image. Since the image dimension is unknown before it\'s loaded,
    we can specify the aspect ratio before the image loaded in order to make both placeholder
    and image the same height and avoid a div height jump. The aspect ratio is calculated by
    this formula. ascpectRatio = width / height. For a 800x600px image the aspect
    ratio would be 800/600 = 1.33 */
    aspectRatio: {
      type: Number,
      default: 1.33,
    },
    /** The placeholder graphic */
    placeholderGraphic: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    handleOnload() {
      this.isLoaded = true
    },
  },
}
</script>

<style lang="scss">
.m-lazy-image {
  position: relative;

  .a-placeholder {
    max-width: 100%;
  }

  .a-placeholder,
  .a-image {
    @include full-absolute;

    margin: auto;
  }

  &__inner {
    display: block;
    width: 100%;
    height: 0;
  }
}
</style>
