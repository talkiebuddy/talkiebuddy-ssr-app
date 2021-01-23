/**
 * Creates a unique id to be used for DOMs
 * @return {String}
 */
export const uid = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

/**
 * Check if a given string is a valid url
 * @param  {String}  str input
 * @return {Boolean}
 */
export const isUrl = (str) => {
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return regexp.test(str)
}

/**
 * Only allow digit key presses on an input
 * @param  {Object}  e event object
 * @return {Boolean}
 */
export const isNumberKey = (e) => {
  const charCode = e.which ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    e.preventDefault()
  } else {
    return true
  }
}

/**
 * Limit the length of an input field
 * @param  {Object}  e event object
 */
export const limitLength = (e, length) => {
  if (e.target.value.length >= length) {
    e.preventDefault()
  }
}

/**
 * Return only digits from a given string
 * @param  {String} string
 * @return {String}
 */
export const onlyDigits = (string) => {
  return string.replace(/[^0-9]+/g, '')
}
