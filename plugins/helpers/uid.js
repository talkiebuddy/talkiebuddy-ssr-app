/**
 * Creates a unique id to be used for DOMs
 * @return {String}
 */

export default () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

// export default ({ app }, inject) => {
//   inject('uid', () => {
//     return '_' + Math.random().toString(36).substr(2, 9)
//   })
// }
