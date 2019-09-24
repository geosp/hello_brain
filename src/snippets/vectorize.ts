
  let vectorizeNumber = (number: String) => [...number].map(c => (c === '#' ? 1 : 0))

  let four = vectorizeNumber(
    '#     #' +
    '#     #' +
    '#######' +
    '      #' +
    '      #' +
    '      #' +
    '      #'
)

console.log({vectorized: JSON.stringify(four)})