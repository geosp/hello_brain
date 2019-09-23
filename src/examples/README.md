# Hello Brain

## Description

This project implements examples of using [Brain.JS](https://brain.js.org) with a functional approach.

## Implementation

The examples implemented currently are:

* color
* count
* market
* brightness
* xor
* restaurants
* simplemath
* readNumber
* book
* sentiment
* hpvsmpg

The training data is in the `data/training` folder. The resulting network is stored in the `data/neuronet` folder.
The `train` function in the examples persist the network state. Run `npm start [exmple_name] train` after making
changes to the example or the associated training data.

## Running the examples
1. `npm install`
2. Keep `npm run watch` running or run `npm run build:js` every time a change is made.
2. Run using a previously trained example`npm start [exmple_name]` (If not trained before it will train first.)
3. Train and run an example `npm start [exmple_name] train`

## References

1. [Awesome lecture by Robert Plummer creator of Brain.JS](https://scrimba.com/g/gneuralnetworks)
2. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com)
3. [Neural Networks Deep Dive](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
4. [Brain.JS](https://brain.js.org) 