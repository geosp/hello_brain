let [exampleName, train]= process.argv.slice(2)
const example = require(`./examples/${exampleName}`).default
example(train == 'train')