<template>
  <main>
    <!-- <o-header></o-header> -->
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header-logo">
            <a-logo></a-logo>
          </div>
          <div class="header-nav">
            <ul class="header-nav-left">
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-transparent;
  padding: 1rem 2rem;

  /* position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  */

  &__inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-betweent;

    &-logo {
      display: inline-block;
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: 1rem;
      font-size: 1.25rem;
      line-height: inherit;
      white-space: nowrap;
    }

    &-nav {
      &-left {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
      }
    }
  }
}

/* .cn-c-primary-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none; */
</style>
