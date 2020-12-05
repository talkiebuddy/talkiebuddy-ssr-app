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
    <m-button label="Atomic Button" />

    <m-button primary label="Click here" />
    <m-button secondary label="Click here" />
    <m-button success label="Click here" />
    <m-button error label="Click here" />
    <m-button warning label="Click here" />

    <m-button disabled label="Click here" />
    <m-button href="https://google.com" label="Click here" />
    <a-image />
    <a-icon name="twitter" size="large" />
  </div>
</template>

<script>
export default {}
</script>
