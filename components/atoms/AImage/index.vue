<template>
  <div :class="classes">
    <img
      v-if="!picture"
      ref="imageNode"
      :src="imageSrc"
      :alt="alt"
      :srcset="srcset"
      :sizes="sizes"
    >
    <picture v-else>
      <source
        v-for="source in calculatedSources"
        :key="source.srcset"
        :media="source.media"
        :srcset="source.srcset"
      >
      <img ref="imageNode" :alt="alt" :src="imageSrc">
    </picture>
  </div>
</template>

<script>
import isUrl from '~/plugins/helpers/is-url'

export default {
  name: 'AImage',
  props: {
    /** src. Can be a url or local filename which loads from assets folder */
    src: {
      type: String,
      required: true
    },
    /** alt attribute */
    alt: {
      type: String,
      default: ''
    },
    /** srcset attribute */
    srcset: {
      type: String,
      default: ''
    },
    /** sizes attribute */
    sizes: {
      type: String,
      default: ''
    },
    /** Whether a picture tag should be rendered */
    picture: {
      type: Boolean,
      default: false
    },
    /** Sources for picture tag (if picture prop is set) */
    sources: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      imageSrc: null,
      imageIsLoaded: false,
      calculatedSources: []
    }
  },
  computed: {
    calculatedSrc () {
      const { src } = this

      return isUrl(src) ? src : require(`@/assets/images/${src}`)
    },
    classes () {
      return {
        'a-image': true,
        [`${this.imageIsLoaded ? 'a-image--is-loaded' : ''}`]: true
      }
    }
  },
  mounted () {
    this.loadImage()
  },
  methods: {
    loadImage () {
      this.imageSrc = this.calculatedSrc
      this.setSources()

      this.$refs.imageNode.onLoad = () => {
        this.$emit('loaded')
        this.imageIsLoaded = true
      }
    },
    async setSources () {
      // Check webp support from Vuex store
      // let webp = this.$store ? this.$store.state.global.webp : false

      if (this.sources) {
        this.calculatedSources = await this.sources.map((source) => {
          const src = this.imageSrc
          const srcset = isUrl(src) ? source.srcset : require(`@/assets/images/${source.srcset}`)
          source.srcset = srcset

          return source
        })
      }
    }
  }
}
</script>
