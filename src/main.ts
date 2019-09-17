let [modelName, train]= process.argv.slice(2)
const example = require(`./examples/${modelName}`).default
example({name: modelName, retrain: train === 'train'})