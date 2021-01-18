/**
 * Check if a given string is a valid url
 * @param  {String}  str input
 * @return {Boolean}
 */

export default (str) => {
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return regexp.test(str)
}

// export default ({ app }, inject) => {
//   inject('isUrl', (str) => {
//     const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
//     return regexp.test(str)
//   })
// }
