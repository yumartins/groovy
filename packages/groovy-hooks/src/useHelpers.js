/**
 * Reduce Text.
 */
const textReduce = (text, length) => (text.length > length
  ? `${text.substring(0, length)}...`
  : text);

export default textReduce;
