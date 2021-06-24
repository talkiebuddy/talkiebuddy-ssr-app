<template>
  <t-authenticate :auth-data="data"></t-authenticate>
</template>

<script>
import data from './data'
export default {
  name: 'PSignUp',
  data() {
    return {
      data,
    }
  },
}
</script>
