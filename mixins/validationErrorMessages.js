import errorMessages from '~/validations/errorMessages'

export default {
  methods: {
    $getErrorMessages(field, isVisible = false) {
      const messageList = []
      const validations = this.$v
      let currentValidation

      if (validations) {
        for (const key in validations) {
          if (key.charAt(0) === '$') {
            continue
          }

          if (key === field) {
            currentValidation = validations[key]
            break
          } else {
            for (const key2 in validations[key]) {
              if (key2 === field) {
                currentValidation = validations[key][key2]
              }
            }
          }
        }
      }

      if (!currentValidation) {
        return
      }

      if (!isVisible) {
        for (const key in currentValidation) {
          if (
            errorMessages[field] &&
            !currentValidation[key] &&
            !key.includes('$')
          ) {
            messageList.push(errorMessages[field][key])
          }
        }
      } else {
        for (const key in errorMessages[field]) {
          let state

          if (currentValidation[key]) {
            state = 'success'
          } else if (!currentValidation[key] && currentValidation.$dirty) {
            state = 'error'
          }

          if (currentValidation[key] !== undefined) {
            messageList.push({
              state,
              text: errorMessages[field][key],
            })
          }
        }
      }

      return messageList
    },
  },
}
