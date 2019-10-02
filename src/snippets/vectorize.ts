
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

console.log({input: JSON.stringify(four), output: JSON.stringify([0, 0, 0, 0, 1, 0, 0, 0, 0, 0])})