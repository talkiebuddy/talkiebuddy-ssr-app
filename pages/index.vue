<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        talkiebuddy-ssr-app
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <a-button>Atomic Button</a-button>

    <a-button primary>
      Click here2
    </a-button>
    <a-button secondary>
      Click here2
    </a-button>
    <a-button success>
      Click here2
    </a-button>
    <a-button error>
      Click here
    </a-button>
    <a-button warning>
      Click here
    </a-button>

    <a-button disabled>
      Click here
    </a-button>
    <a-button href="https://google.com">
      Click here
    </a-button>
    <a-image />
    <a-icon name="twitter" size="large" />
  </div>
</template>

<script>
import AButton from '@/components/atoms/AButton'
import AImage from '@/components/atoms/AImage'
import AIcon from '@/components/atoms/AIcon'

export default {
  components: {
    AButton,
    AImage,
    AIcon
  }
}
</script>
