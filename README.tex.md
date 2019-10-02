# Machine Learning with Neural Networks

## Artificial Neurons

The basic unit of work in a neural network is the `Artificial Neuron`. An `Artificial Neuron` has an associated potential to emit a signal. For convenience the value of the potential is kept between $0$ and $1$. If the potential $p = 1$ the neuron is active, if $p = 0$ the neuron is inactive. We can implement the `Artificial Neuron` as a function $P$ with an array of `activation values` $[a_{1}, a_{2}, a_{3}, ..., a_{n}]$ i.e. $a_{1...n}$  in it's internal scope. The function parameters are an array of `weight values` $[w_{1}, w_{2}, w_{3}, ..., w_{n}]$ or $w_{1...n}$. The output then is the signal $p$. The values $a_{1...n}$ and $w_{1...n}$ are defined as tensors because the types of operations or functions that will be used to manipulate the `Artificial Neurons` comes from a branch of mathematics called [Tensor Analysis](https://en.wikipedia.org/wiki/Tensor_calculus). Consider the implementation of $P$ based on the following:

* We define tensors $\hat{A} = a_{1...n}$ and $\hat{W} = w_{1...n}$.
* Multiply tensors $\hat{A}$ and $\hat{W}$ i.e. $\hat{C} = \hat{A} \cdot \hat{W}$.
* The tensor product will be $\hat{C} = [a_{1}w_{1}, a_{2}w_{2}, a_{3}w_{3}, ..., a_{n}w_{n}]$.
* Reduce $\hat{C}$ to a scalar value by adding it's components.
* The sum of the $\hat{C}$ components is $S = a_{1}w_{1} + a_{2}w_{2} + a_{3}w_{3}, ..., a_{n-1}w_{n-1} + a_{n}w_{n}$.
* $S$ is called a weighted sum  and is represented by $\sum_{n=1}^{k} a_{n}w_{n}$ where $k$ is the number of elements in $\hat{C}$.
* $S$ determines the strength of the signal emitted by the `Artificial Neuron`.
* Capping $S$ adds additional control over signal emission and is done by subtracting a bias $b$ from the sum.
* It is possible for $S - b$ to have a value outside the desire signal strength $0 \geq p \leq 1$. For this reason an `activation function` is used to bring $p$ into the desired range.
* One of the  commonly used `activation functions` is the `sigmoid` $\sigma (x) =  \frac {\mathrm{1} }{\mathrm{1} + e^{-x} }$.

In conclusion the implementation of an Artificial Neuron is the function $P(\hat{W}) = \sigma (S - b)$.

## Neural Networks

A `neural network` is a computational graph of `Artificial Neurons`. `Neural networks` are composed of `neural network layers`. A `neural network layer` is a tensor of `Artificial Neurons`. The `Artificial Neurons` in a `neural network layer` are connected to each other because they are components of a tensor. We can define layer n as $\hat{L}_{n} = [P_{1}, P_{2}, P_{3}, ... ,P_{n}]$. Neural networks have three `layer types input, hidden, and output`. A neural network  may have multiple hidden layers but only one input and output layers. Consider a neural network consisting of the fallowing layers:

<div align="center">
<div>
<img with=160 height=160 src="assets/simple_nn.svg"/>
</div>
<div>

$\hat{L}_{i} = [P_{1i}]$ &nbsp;&nbsp; $\hat{L}_{1h} = [P_{1h},P_{2h}]$ &nbsp;&nbsp; $\hat{L}_{o} = [P_{1o}]$

</div>
</div>

Neural network themselves are tensors. In this case neural network $\hat{N} = [\hat{L}_{i}, \hat{L}_{1h}, \hat{L}_{o} ]$. `Artificial Neurons` in a neural network are associated to each other via `function composition`. Consider $P_{1i}$ it has an internal tensor of `activation values` $\hat{A}_{i1} = [a_{1i}]$. The number of components in $\hat{A}_{i1}$ is one. The output of $P_{1i}$ is a potential $p_{1i}$. The key question one must ask at this point is, how are the number of `activation values` in $\hat{L}_{1h}$ associated to the number of `activation values` in $\hat{L}_{i}$? Here is where the magic happens $p_{1i}$ becomes the input weight for $P_{1h}$ and $P_{2h}$. This means that $p_{1i}$ becomes $\hat{W}_{1i} = [p_{1i}]$ a weight value tensor and the input for $P_{1h}$ and $P_{2h}$. This means that the activation values tensor for $P_{1h}$ is $\hat{A}_{h1} = [a_{1h}]$ a tensor with one component because the input layer consist of only one component $P_{1i}$. Is important to notice that `the number of activation values in a layer's Artificial Neurons are determined by the number of Artificial Neurons in the previous layer`.

For completeness let's consider the output layer `Artificial Neuron` $P_{1o}$. Based on our current understanding $P_{1o}$ has an internal tensor of `activation values` $\hat{A}_{o1} = [a_{1o}, a_{2o}]$ because $\hat{L}_{1h}$ has two components $P_{1h}$ and $P_{2h}$. The output for $P_{1h}$ is a potential $p_{1h}$ and the output for $P_{2h}$ is a potential $p_{2h}$ therefore the weight value tensor is $\hat{W}_{1h} = [p_{1h}, p_{2h}]$. The weighted sum for $P_{1o}$ is $S_{1o} = p_{1h}a_{1o} + p_{2h}a_{2o}$ and its potential is $p_{1o} = \sigma(S_{1o} - b)$. Notice how all Artificial Neurons in every layer of the neural network are relaying information i.e. emitting a signal directly or indirectly to each other in a forward direction. The type of neural network where all Artificial Neurons are connected to each other is called a dense neural network.


## Neural Networks In Action

### Introduction

We define a `neural network algorithm` as a function $N$ that produces an `output` $\hat{L}_{o}$ in response to an `input` $\hat{L}_{i}$ and n number of hidden layers $\hat{L}_{1h..nh}$ i.e. $N(\hat{L}_{i}, \hat{L}_{1h..nh}) = \hat{L}_{o}$. A neural network is a system defined by the following tensor $\hat{N} = [\hat{L}_{i}, \hat{L}_{1h}, \hat{L}_{2h}, \hat{L}_{3h},...\hat{L}_{nh}, \hat{L}_{o} ]$.
In our daily experience we go through time and we have a `state` at each moment in time. Our reality is a series of moments in time. At each moment we can `assess our state` and map any number of metrics to an exact moment in time and persist the resulting information representing our `state`. Our memories are our `state` and we derive knowledge from them. Compare to you or me $\hat{N}$ is a very simple system, a moment of time for $\hat{N}$ is represented by evaluating $\hat{L}_{1h}, \hat{L}_{2h}, \hat{L}_{3h},...\hat{L}_{nh}$ and $\hat{L}_{o}$ at a given value of $\hat{L}_{i}$. We bring $\hat{N}$ to life by feeding it `input` and evaluating the `output` of every `Artificial Neuron` $P$ in each neural network layer $\hat{L}$. 

### Back Propagation Training Using The Gradient Descent Algorithm
 
Back propagation is the most widely used machine learning algorithm. The algorithm's objective is to find the optimal values for $\hat W$ that will yield expected outputs $\hat P_{o}$ in $\hat N$ through a training process. The algorithm's steps are:

1. Initialize Artificial Neurons ${P_{n}}$ in $L_{n}$  by assigning random $values$ to every $w$ and $b$ in the range $-1 \leq value \geq 1$. 
2. Iterate over the training dataset.
3. For each item in the dataset `forward propagate` by invoking the activation function on Artificial Neuron $P$ from $L_{1h...nh}$ (all hidden layers) to $L_{o}$ (the output layer) using the input value for each item in the data set as the input. The signals of Artificial Neurons in a previous layer became the input for $\hat W_{n}$ for the current layer.
4. `Backwards propagate the error` by iterating over the layers in reverse order and calculating the error between the current output $p_{o}$ and the expected output $p'_{o}$ the output for the corresponding input in the dataset. One of the most commonly used error, cost, or loss functions to compare $p_{o}$ vs. $p'_{o}$ is the [Mean Squared Error](https://en.wikipedia.org/wiki/Mean_squared_error) function $E(p'_{n}, p_{n}, n) = \frac {1}{n} \sum_{i = 1}^{n}(p'_{i} - p_{i})^2$. The error indicates how close the signal $p'$ is to $p$.
5. Compute the rate of change in the cost function. The rate of change of a single variable function with one scalar output is called a derivative i.e. $\frac{\mathrm{dy} }{\mathrm{d} x}$. The rate of change of a multi variable function with one scalar output is called the `gradient` i.e $\nabla (E)$.  The `gradient` indicates the direction and magnitude of greatest increase for the error function. In this case the $\nabla (E)$ needs to be computed since we are dealing with multi variable tensors.
6. $\nabla (E)$ needs to be negative because the objective is to advance towards lower error or cost i.e. $g = -\nabla (E)$. Define `learning rate` $l_{r}$ a number $0 \geq r \leq 1$, used as a factor that determines the magnitude of $\Delta w$ in conjunction with $\nabla (E)$. Define `momentum` $m$ a number between $0 \geq r \leq 1$, used as a factor that determines the magnitude of $\Delta w$ in conjunction with $\nabla (E)$. The magnitude of $l_{r}$ will determine how big of a step we take in our search to minimize the error or cost $E$. The magnitude of $m$ will determine how much of an influence the previous values of $\Delta w$ have in our search to minimize the error or cost $E$. Compute the scalar values $\Delta w = l_{r}g + mg\Delta w_{n-1}$ by which $w$ needs change in order to decrease error i.e. bring $p_{o}$ closer $p'_{o}$. Follow the same procedure to fine tune the bias $b$.
7. After iterating over the complete training data set verify that the current error is less or equal to the `error threshold` $E_{t}'$ or that the `maximum number of iterations` $I_{max}$ was reached, if true stop training else continue. Each complete iteration over all items in a training set is called an `epoch`.

Is crucial to understand that $\hat W$ and associated biases change as a result of `back propagation` while $\hat A$ changes as a result of `forward propagation`. This means that properly labeled data is essential for training and how well $\hat N$ performs. When practicing machine learning you will be presented with the opportunity to adjust so called hyper parameters some of them are:

* $E_{t}$ error threshold.
* $I_{max}$ expected number of epochs.
* $l_{r}$ learning rate.
* $m$ momentum.

## Training Data

The process of preparing training data sets is challenging. The key to the process is proper vectorization and labeling of training data. Neural networks can be applied to all kind of problems involving regression, classification, or prediction. The way data is prepared for training requires careful consideration of the domain and the goals one intents to achieve.

Imagine we have a set of data representing the horse power $hp$, and the miles per gallon $mpg$ of a model $m$. The array $raw_{n} = [m_{n}, hp_{n}, mpg_{n}]$ represents an element in our raw dataset. Our objective is to determine if there is a relationship between $hp$ and $mpg$ and to design a neural network $\hat R$ that will help us predict the $mpg$ given $hp$. To prepare the data for consumption we need understand what are the inputs and outputs for our model. Since our intent is to predict $mpg$ in relationship to $hp$ regardless of the model, then our training data becomes $data_{n} = [hp_{n}, mpg_{n}]$. The last step in the process is data normalization, and is usually accomplished by [min-max feature scaling](https://en.wikipedia.org/wiki/Feature_scaling). The function for `min-max feature scaling` is $normalize(a_{n}, a_{min}, a_{max}) = (\frac{a_{n} - a_{imin}}{a_{max} - a_{min}})$ where $a_{n}$ is any value, $a_{max}$ is the maximum, and $a_{min}$ is the minimum in the array $[a_{1}, a_{2}, a_{3}...a_{n}]$. Normalization assures that the value $a_{n}$ is always within the range $0 \leq a_{ni} \geq 1$. In our case study $a_{ni} = normalize(hp_{n}, hp_{min}, hp_{max})$ and the expected output $a_{no} = normalize(mpg_{n}, mpg_{min}, mpg_{max})$. Normalization is necessary because it brings any data set to the necessary range $0 \leq a \geq 1$.

## Conclusion

Neural networks are computational graphs used to universally model functions. The majority of relationships represented by functions are not linear, for this reason logistic functions like $\sigma$, or $tanh$ are used to modulate signals, they introduce nonlinearity to the Artificial Neuron model which increases the scope of problems we can solve. Normalization helps by keeping everything at the same scale and allows the system to be more sensitive when recognizing patterns. When a neural network is trained it becomes a function in tensor form specific to the training domain. After training, the acquired knowledge can be preserved by serializing $\hat W$, associated biases, and all the hyper parameters used during training. The resulting kernel of knowledge is very tiny in comparison to the training data and could be used almost anywhere including a web browser. When utilizing neural networks for regression, prediction, or classification the activation values come form the input provided and the wights are not changed. The activation values flow forward from the input layer to the output layer.

## Examples

In the [examples](https://github.com/geosp/hello_brain/tree/master/src/examples) directory you can find several examples using the [Brain.JS](https://brain.js.org) framework to create and train neural networks.

## References

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com)
2. [How Deep Neural Networks Work by Brandon Rohrer](https://end-to-end-machine-learning.teachable.com/p/how-deep-neural-networks-work)
3. [Neural Networks Deep Dive](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
4. [Scrimba tutorial by Robert Plummer creator of Brain.JS](https://scrimba.com/g/gneuralnetworks) 
5. [Lodash](https://lodash.com/docs)
6. [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide)
7. [futil-js](https://github.com/smartprocure/futil-js)
8. [Point-Free Programming](https://simonsmith.io/dipping-a-toe-into-functional-js-with-lodash-fp)