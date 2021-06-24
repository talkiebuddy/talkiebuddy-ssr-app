<template>
  <t-authenticate :auth-data="data"></t-authenticate>
</template>

<script>
import data from './data'
export default {
  name: 'PSignIn',
  data() {
    return {
      data,
    }
  },
}
</script>
