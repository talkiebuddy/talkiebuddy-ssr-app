<template>
  <div class="container">
    <div>
      <o-header></o-header>
      <Logo />
      <h1 class="title">talkiebuddy-ssr-app</h1>
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
    <m-buttons variant="primary" label="Click here" />
    <m-buttons variant="success" label="Click here" />
    <m-buttons variant="danger" label="Click here" />
    <m-buttons variant="warning" label="Click here" />

    <m-buttons disabled label="Click here" />
    <m-buttons href="https://google.com" label="Visit Google" />
    <a-image src="https://source.unsplash.com/random/400x300" />
    <a-icon name="twitter" size="large" />
  </div>
</template>

<script>
export default {}
</script>
