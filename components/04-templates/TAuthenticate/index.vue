<template>
  <section class="t-landing">
    <o-header :nav-list="authData.navList"></o-header>
    <div class="container">
      <a-heading :level="3">{{ authData.title }}</a-heading>
      <div class="" style="display: flex; justify-content: space-between">
        <o-generic-form
          v-model="authData.formData"
          :fields="authData.fields"
          :validations="authData.validations"
          @submit="handleSubmit"
        ></o-generic-form>
        <a-image src="logo.png" style="align-items: baseline"></a-image>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TAuthenticate',
  props: {
    authData: {
      type: Object,
      default: () => [],
    },
  },
  handleSubmit: 'handleSubmit',
  processForm(data) {
    if (data) {
      const dataObject = {
        ...data,
        phoneNumber: data.phoneNumber.number,
        phoneNumberCountryCode: data.phoneNumber.country.dialCode,
      }

      const formData = new FormData()
      for (const key in dataObject) {
        formData.append(key, dataObject[key])
      }
    }
  },
}
</script>
