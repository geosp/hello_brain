# Machine Learning with Neural Networks

## Artificial Neurons

The basic unit of computation in a neural network is the **Artificial Neuron**. An artificial neuron receives inputs (activations) from the previous layer and produces an output activation value. For convenience, the activation value is kept between $0$ and $1$. If the activation $a = 1$, the neuron is fully activated; if $a = 0$, the neuron is inactive.

We implement the artificial neuron as a function $P$ that computes an output activation based on input activations and associated weights. The components of the neuron are:

- **Activation Values** ($\hat{A}$): An array of activations from the previous layer, $\hat{A} = [a_1, a_2, a_3, \ldots, a_n]$.
- **Weights** ($\hat{W}$): An array of weights associated with each input activation, $\hat{W} = [w_1, w_2, w_3, \ldots, w_n]$.
- **Bias** ($b$): A value that shifts the activation function to control the neuron's firing threshold.

**Computation Steps:**

1. **Element-wise Multiplication**: Multiply each activation by its corresponding weight to get $\hat{C}$:

   $\hat{C} = [a_1 w_1, a_2 w_2, a_3 w_3, \ldots, a_n w_n]$

2. **Weighted Sum**: Sum all the products to compute the neuron's input signal $S$:

   $S = \sum_{i=1}^{n} a_i w_i$

3. **Add Bias**: Incorporate the bias into the weighted sum to get $z$:

   $z = S + b$

4. **Activation Function**: Apply an activation function to $z$ to obtain the output activation $a$:

   $a = \sigma(z)$

**Activation Function Example:**

One commonly used activation function is the **sigmoid function**:

$\sigma(z) = \dfrac{1}{1 + e^{-z}}$

This function maps any real-valued input to a value between $0$ and $1$.

**Final Neuron Function:**

The artificial neuron is thus represented as:

$P(\hat{A}, \hat{W}, b) = \sigma\left(\sum_{i=1}^{n} a_i w_i + b\right)$

**Note:** In this context, tensors represent vectors (arrays) of activations and weights, and operations involve vector arithmetic.

## Neural Networks

A **neural network** is a computational graph composed of layers of artificial neurons. The layers are:

- **Input Layer**: Receives the initial data.
- **Hidden Layers**: Intermediate layers that process inputs from the previous layer.
- **Output Layer**: Produces the final output of the network.

Each neuron in a layer is connected to every neuron in the subsequent layer through weights (fully connected or dense network).

**Example Neural Network Structure:**

- **Input Layer** ($\hat{L}_i$):

  $\hat{L}_i = [P_{1i}]$

- **Hidden Layer** ($\hat{L}_{1h}$):

  $\hat{L}_{1h} = [P_{1h}, P_{2h}]$

- **Output Layer** ($\hat{L}_o$):

  $\hat{L}_o = [P_{1o}]$

**Neural Network Representation:**

The entire network can be represented as:

$\hat{N} = [\hat{L}_i, \hat{L}_{1h}, \hat{L}_o]$

**Connections Between Layers:**

- **Input to Hidden Layer**: The output activation from the input neuron $P_{1i}$ becomes the input activation for each neuron in the hidden layer $\hat{L}_{1h}$.

  - Activation value from the input neuron:

    $a_{1i}$

  - Activation values for hidden layer neurons:

    Each hidden neuron receives $a_{1i}$ as input.

  - Weights for hidden layer neurons:

    - For $P_{1h}$: $w_{1h}$
    - For $P_{2h}$: $w_{2h}$

- **Hidden to Output Layer**: The output activations from the hidden layer neurons $P_{1h}$ and $P_{2h}$ become the input activations for the output neuron $P_{1o}$.

  - Activation values for the output neuron:

    $\hat{A}_{o} = [a_{1h}, a_{2h}]$

  - Weights for the output neuron:

    $\hat{W}_{o} = [w_{1o}, w_{2o}]$, where:

    - $w_{1o}$ connects $P_{1h}$ to $P_{1o}$
    - $w_{2o}$ connects $P_{2h}$ to $P_{1o}$

**Computations in Neurons:**

- **Hidden Layer Neurons** ($P_{1h}$, $P_{2h}$):

  - Each computes its output activation:

    For $j = 1, 2$:

    $a_{jh} = \sigma(a_{1i} \cdot w_{jh} + b_{jh})$

    - $a_{jh}$: Activation of hidden neuron $P_{jh}$
    - $a_{1i}$: Activation from the input neuron
    - $w_{jh}$: Weight from $P_{1i}$ to $P_{jh}$
    - $b_{jh}$: Bias of hidden neuron $P_{jh}$

- **Output Layer Neuron** ($P_{1o}$):

  - Computes its output activation:

    $a_{1o} = \sigma(a_{1h} \cdot w_{1o} + a_{2h} \cdot w_{2o} + b_{1o})$

    - $a_{1o}$: Activation of output neuron $P_{1o}$
    - $a_{1h}, a_{2h}$: Activations from hidden neurons
    - $w_{1o}, w_{2o}$: Weights connecting hidden neurons to $P_{1o}$
    - $b_{1o}$: Bias of output neuron $P_{1o}$

**Key Points:**

- The number of inputs to each neuron is determined by the number of neurons in the previous layer.
- Each neuron produces a single output activation value.

## Neural Networks in Action

### Introduction

We define a **neural network function** $N$ that maps input activations to output activations:

$N(\hat{L}_i) = \hat{L}_o$

Where:

- $\hat{L}_i$ is the input layer activations.
- $\hat{L}_o$ is the output layer activations.
- The network includes $n$ hidden layers $\hat{L}_{1h}, \hat{L}_{2h}, \ldots, \hat{L}_{nh}$.

**Neural Network Representation:**

$\hat{N} = [\hat{L}_i, \hat{L}_{1h}, \hat{L}_{2h}, \ldots, \hat{L}_{nh}, \hat{L}_o]$

We activate the network by feeding inputs and performing computations in a forward direction—this process is called **forward propagation**.

### Backpropagation Training Using the Gradient Descent Algorithm

**Backpropagation** is the algorithm used to train neural networks by adjusting weights and biases to minimize the error between the network's predictions and the actual targets.

**Algorithm Steps:**

1. **Initialization:**

   - Assign small random values to all weights $\hat{W}$ and biases $b$.

2. **Training Loop:**

   - **For each epoch** (complete pass over the training dataset):

     a. **Forward Propagation:**

        - Input the training data to the network.
        - Compute activations for all neurons in the hidden and output layers using the activation function.

     b. **Compute Error:**

        - Calculate the error between the predicted outputs and the actual outputs using an error (cost) function.

          **Mean Squared Error (MSE):**

          $E = \dfrac{1}{n} \sum_{i=1}^{n} (a_i' - a_i)^2$

          - $a_i'$: Actual (target) output.
          - $a_i$: Predicted output.
          - $n$: Number of output neurons.

     c. **Backpropagation:**

        - Compute the gradient of the error with respect to each weight and bias.

          **Gradient Calculation:**

          - For weights:

            $\nabla E_w = \dfrac{\partial E}{\partial w}$

          - For biases:

            $\nabla E_b = \dfrac{\partial E}{\partial b}$

        - Update weights and biases using the gradient descent update rule with momentum:

          **Weight Update:**

          $\Delta w^{(t)} = m \cdot \Delta w^{(t-1)} - l_r \cdot \nabla E_w$

          $w^{(t)} = w^{(t-1)} + \Delta w^{(t)}$

          **Bias Update:**

          $\Delta b^{(t)} = m \cdot \Delta b^{(t-1)} - l_r \cdot \nabla E_b$

          $b^{(t)} = b^{(t-1)} + \Delta b^{(t)}$

          - $m$: Momentum coefficient ($0 \leq m \leq 1$).
          - $l_r$: Learning rate ($0 \leq l_r \leq 1$).
          - $\Delta w^{(t-1)}$: Previous weight change.
          - $\Delta b^{(t-1)}$: Previous bias change.

     d. **Check for Convergence:**

        - If the error $E$ is less than a predefined threshold $E_t$ or the maximum number of epochs $I_{\text{max}}$ is reached, stop training.

**Important Concepts:**

- **Gradient ($\nabla E$)**: Indicates the direction and rate of the steepest increase of the error function.
- **Negative Gradient**: Used to update weights in the direction of the steepest decrease of the error function.
- **Momentum**: Helps accelerate convergence and smooth out updates.

### Activation Functions and Nonlinearity

Activation functions introduce **nonlinearity** into the network, enabling it to learn complex patterns. Without nonlinearity, the network would be equivalent to a linear model.

**Common Activation Functions:**

- **Sigmoid Function**:

  $\sigma(z) = \dfrac{1}{1 + e^{-z}}$

  - Maps inputs to a range between $0$ and $1$.

- **Hyperbolic Tangent (tanh) Function**:

  $\tanh(z) = \dfrac{e^{z} - e^{-z}}{e^{z} + e^{-z}}$

  - Maps inputs to a range between $-1$ and $1$.

- **Rectified Linear Unit (ReLU)**:

  $\text{ReLU}(z) = \max(0, z)$

  - Introduces sparsity and mitigates the vanishing gradient problem.

## Training Data

Preparing training datasets involves vectorization, labeling, and normalization.

**Example Scenario:**

- **Objective**: Predict miles per gallon ($mpg$) based on horsepower ($hp$).
- **Raw Data**: $\text{raw}_n = [m_n, hp_n, mpg_n]$, where $m_n$ is the car model.
- **Prepared Data**: Discard the model identifier to focus on the relationship between $hp$ and $mpg$.
- **Normalization**:

  - **Min-Max Feature Scaling**:

    $\text{normalize}(a_n) = \dfrac{a_n - a_{\min}}{a_{\max} - a_{\min}}$

    - Scales features to a range between $0$ and $1$.

  - **Apply to Data**:

    - Normalize $hp$ values:

      $a_{\text{input}, n} = \text{normalize}(hp_n)$

    - Normalize $mpg$ values:

      $a_{\text{output}, n} = \text{normalize}(mpg_n)$

**Importance of Normalization:**

- Ensures all input features are on the same scale.
- Improves the efficiency and stability of the training process.

## Conclusion

Neural networks are powerful tools for modeling complex functions and patterns in data. By incorporating nonlinear activation functions and properly preparing data, neural networks can perform tasks like regression, classification, and prediction.

**Key Takeaways:**

- **Activation Functions**: Introduce nonlinearity, enabling the network to model complex relationships.
- **Normalization**: Essential for scaling input features and outputs, leading to better learning performance.
- **Training**: Involves adjusting weights and biases to minimize error using backpropagation and gradient descent.
- **Deployment**: After training, the network's weights and biases encapsulate the learned knowledge and can be used for inference without further training.

## Examples

You can find several examples using the [Brain.js](https://brain.js.org) framework to create and train neural networks in the [examples](https://github.com/geosp/hello_brain/tree/master/src/examples) directory.

## References

1. [Machine Learning with Neural Networks in JavaScript](https://www.kdnuggets.com/2018/10/machine-learning-neural-networks-javascript.html)
2. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com)
3. [How Deep Neural Networks Work by Brandon Rohrer](https://end-to-end-machine-learning.teachable.com/p/how-deep-neural-networks-work)
4. [Neural Networks Deep Dive by 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
5. [Scrimba Tutorial by Robert Plummer (Brain.js Creator)](https://scrimba.com/g/gneuralnetworks)
6. [Lodash Documentation](https://lodash.com/docs)
7. [Lodash FP Guide](https://github.com/lodash/lodash/wiki/FP-Guide)
8. [futil-js Library](https://github.com/smartprocure/futil-js)
9. [Point-Free Programming](https://simonsmith.io/dipping-a-toe-into-functional-js-with-lodash-fp)

---

**Note:** Ensure that all links are up to date and not using URL shorteners to maintain transparency and ease of access.
