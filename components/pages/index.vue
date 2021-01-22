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
    <m-buttons label="Atomic Button" />

    <m-buttons primary label="Click here" />
    <m-buttons secondary label="Click here" />
    <m-buttons success label="Click here" />
    <m-buttons error label="Click here" />
    <m-buttons warning label="Click here" />

    <m-buttons disabled label="Click here" />
    <m-buttons href="https://google.com" label="Click here" />
    <a-image />
    <a-icon name="twitter" size="large" />
  </div>
</template>

<script>
export default {}
</script>
