# Hello Brain

## Description

This project implements the examples outlined by the following video [Neural Networks with JavaScript - Full Course using Brain.js](https://youtu.be/6E6XecoTRVo)

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
The train function in the examples persist the network state. If you make changes to the training data or the options
set the retrain option to true or delete the associated JSON file under `data/neuronet`. To stop training set 
retrain to false.

## Running the examples
1. `npm install`
2. Keep `npm run watch` running or run `npm run build:js` every time a change is made.
2. Run using a previously trained example`npm start [exmple_name]` (If not trained before it will train first.)
3. Train and run an example `npm start [exmple_name] train`

## References

1. [Introduction to Neural Networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
2. [Awesome lecture by Robert Plummer](https://scrimba.com/g/gneuralnetworks)
3. [Brain.JS](https://brain.js.org) 
4. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com)