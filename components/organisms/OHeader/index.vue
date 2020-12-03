<template>
  <header
    :class="{
      'o-header': 1,
      'o-header--is-open': menuIsOpen,
    }"
  >
    <div class="o-header__bar">
      <router-link to="/" class="o-header__logo">
        <a-logo />
      </router-link>

      <div class="o-header__overlay" @click="toggleMenu" />
    </div>
  </header>
</template>
