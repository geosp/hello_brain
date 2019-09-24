# Machine Learning with Neural Networks

## Perceptrons

The basic unit of work in a neural network is the `perceptron`. A `perceptron` has an associated potential to emit a signal. For convenience the value of the potential is kept between <img src="/tex/29632a9bf827ce0200454dd32fc3be82.svg?invert_in_darkmode&sanitize=true" align=middle width=8.219209349999991pt height=21.18721440000001pt/> and <img src="/tex/034d0a6be0424bffe9a6e7ac9236c0f5.svg?invert_in_darkmode&sanitize=true" align=middle width=8.219209349999991pt height=21.18721440000001pt/>. If the potential <img src="/tex/012b36279aac832bdad672ff18d4243a.svg?invert_in_darkmode&sanitize=true" align=middle width=38.40740639999999pt height=21.18721440000001pt/> the neuron is active, if <img src="/tex/c9bb81328f293e18596280dfb95dd631.svg?invert_in_darkmode&sanitize=true" align=middle width=38.40740639999999pt height=21.18721440000001pt/> the neuron is inactive. We can implement the `perceptron` as a function <img src="/tex/df5a289587a2f0247a5b97c1e8ac58ca.svg?invert_in_darkmode&sanitize=true" align=middle width=12.83677559999999pt height=22.465723500000017pt/> with an array of `activation values` <img src="/tex/8a3231c98df6eafb822b8b2c14dc3f97.svg?invert_in_darkmode&sanitize=true" align=middle width=117.88258679999998pt height=24.65753399999998pt/> i.e. <img src="/tex/46ba15cae98b59904b6ca6b625b68e28.svg?invert_in_darkmode&sanitize=true" align=middle width=35.08012364999999pt height=14.15524440000002pt/>  in it's internal scope. The function parameters are an array of `weight values` <img src="/tex/31291bd296fcc0ad119638b272e094e7.svg?invert_in_darkmode&sanitize=true" align=middle width=130.20000345pt height=24.65753399999998pt/> or <img src="/tex/9f0bfc20948e9822b9fad9c7c0101985.svg?invert_in_darkmode&sanitize=true" align=middle width=38.159477399999986pt height=14.15524440000002pt/>. The output then is the signal <img src="/tex/2ec6e630f199f589a2402fdf3e0289d5.svg?invert_in_darkmode&sanitize=true" align=middle width=8.270567249999992pt height=14.15524440000002pt/>. The values <img src="/tex/46ba15cae98b59904b6ca6b625b68e28.svg?invert_in_darkmode&sanitize=true" align=middle width=35.08012364999999pt height=14.15524440000002pt/> and <img src="/tex/9f0bfc20948e9822b9fad9c7c0101985.svg?invert_in_darkmode&sanitize=true" align=middle width=38.159477399999986pt height=14.15524440000002pt/> are defined as tensors because the types of operations or functions that will be used to manipulate the `perceptrons` comes from a branch of mathematics called [Tensor Analysis](https://en.wikipedia.org/wiki/Tensor_calculus). Consider the implementation of <img src="/tex/df5a289587a2f0247a5b97c1e8ac58ca.svg?invert_in_darkmode&sanitize=true" align=middle width=12.83677559999999pt height=22.465723500000017pt/> based on the following:

* We define tensors <img src="/tex/8bdd0d211d83d7197dcb2bf67dae4386.svg?invert_in_darkmode&sanitize=true" align=middle width=69.32654684999999pt height=31.141535699999984pt/> and <img src="/tex/a609488241ae292f72e220eb1be3c4c2.svg?invert_in_darkmode&sanitize=true" align=middle width=77.88534435pt height=31.141535699999984pt/>.
* Multiply tensors <img src="/tex/6c9593d82fc74cb581359f835452e977.svg?invert_in_darkmode&sanitize=true" align=middle width=12.55717814999999pt height=31.141535699999984pt/> and <img src="/tex/b92ac9c04c031ed7cddd215260ac9b30.svg?invert_in_darkmode&sanitize=true" align=middle width=17.80826024999999pt height=31.141535699999984pt/> i.e. <img src="/tex/c04c69c1055e74987278fa4398254dd6.svg?invert_in_darkmode&sanitize=true" align=middle width=76.85130254999999pt height=31.141535699999984pt/>.
* The tensor product will be <img src="/tex/568fe2dced1a73a3f74d872bf21d3be0.svg?invert_in_darkmode&sanitize=true" align=middle width=230.87020439999998pt height=31.141535699999984pt/>.
* Reduce <img src="/tex/108c8d1c66f6974b9e54c8e9674ca238.svg?invert_in_darkmode&sanitize=true" align=middle width=12.92464304999999pt height=31.141535699999984pt/> to a scalar value by adding it's components.
* The sum of the <img src="/tex/108c8d1c66f6974b9e54c8e9674ca238.svg?invert_in_darkmode&sanitize=true" align=middle width=12.92464304999999pt height=31.141535699999984pt/> components is <img src="/tex/5187d90814d670a3ed3dee4f4b418807.svg?invert_in_darkmode&sanitize=true" align=middle width=346.3807660499999pt height=22.465723500000017pt/>.
* <img src="/tex/551ec4bb1977e368d324ef42c4ef766e.svg?invert_in_darkmode&sanitize=true" align=middle width=19.899247499999987pt height=22.465723500000017pt/> is called a weighted sum  and is represented by <img src="/tex/eb4a66cd60fcb7fd335345c273da12ab.svg?invert_in_darkmode&sanitize=true" align=middle width=83.21478164999999pt height=32.51169900000002pt/> where <img src="/tex/63bb9849783d01d91403bc9a5fea12a2.svg?invert_in_darkmode&sanitize=true" align=middle width=9.075367949999992pt height=22.831056599999986pt/> is the number of elements in <img src="/tex/108c8d1c66f6974b9e54c8e9674ca238.svg?invert_in_darkmode&sanitize=true" align=middle width=12.92464304999999pt height=31.141535699999984pt/>.
* <img src="/tex/72a8c3544b60e70e9af83b6202f1d1f7.svg?invert_in_darkmode&sanitize=true" align=middle width=19.899247499999987pt height=22.465723500000017pt/> determines the strength of the signal emitted by the `perceptron`.
* Capping <img src="/tex/72a8c3544b60e70e9af83b6202f1d1f7.svg?invert_in_darkmode&sanitize=true" align=middle width=19.899247499999987pt height=22.465723500000017pt/> adds additional control over signal emission and is done by subtracting a bias <img src="/tex/4bdc8d9bcfb35e1c9bfb51fc69687dfc.svg?invert_in_darkmode&sanitize=true" align=middle width=7.054796099999991pt height=22.831056599999986pt/> from the sum.
* It is possible for <img src="/tex/a15ed02692768e127f845e4d76374049.svg?invert_in_darkmode&sanitize=true" align=middle width=47.86712369999999pt height=22.831056599999986pt/> to have a value outside the desire signal strength <img src="/tex/a05f09f794b3ed2f38eb678dc04b450a.svg?invert_in_darkmode&sanitize=true" align=middle width=68.54424719999999pt height=21.18721440000001pt/>. For this reason an `activation function` is used to bring <img src="/tex/2ec6e630f199f589a2402fdf3e0289d5.svg?invert_in_darkmode&sanitize=true" align=middle width=8.270567249999992pt height=14.15524440000002pt/> into the desired range.
* One of the  commonly used `activation functions` is the `sigmoid` <img src="/tex/23c2e593354a49d6159a7b521a41f2ff.svg?invert_in_darkmode&sanitize=true" align=middle width=95.16736844999998pt height=27.77565449999998pt/>.

In conclusion the implementation of a perceptron is the function <img src="/tex/6d136b281bb2acf64aa7b8f22fe0ba14.svg?invert_in_darkmode&sanitize=true" align=middle width=135.98351085pt height=31.141535699999984pt/>.

## Neural Networks

A `neural network` is a graph of associated `perceptrons`. `Neural networks` are composed of `neural network layers`. A `neural network layer` is a tensor of `perceptrons`. The `perceptrons` in a `neural network layer` are connected to each other because they are components of a tensor. We can define layer n as <img src="/tex/21ec0f7c7be033a755c8d561b9ab2842.svg?invert_in_darkmode&sanitize=true" align=middle width=167.3933712pt height=31.141535699999984pt/>. Neural networks have three `layer types input, hidden, and output`. A neural network  may have multiple hidden layers but only one input and output layers. Consider a neural network consisting of the fallowing layers:

<div align="center">
<div>
<img with=160 height=160 src="assets/simple_nn.svg"/>
</div>
<div>

<img src="/tex/9b10f91822afbf5be4cefeacc35b17ae.svg?invert_in_darkmode&sanitize=true" align=middle width=70.28910404999999pt height=31.141535699999984pt/> &nbsp;&nbsp; <img src="/tex/5ef91ad474a3f576e1b87884e30b3cb0.svg?invert_in_darkmode&sanitize=true" align=middle width=115.86194895pt height=31.141535699999984pt/> &nbsp;&nbsp; <img src="/tex/fb44c96eb90a025b1d144ea7f7fc42ae.svg?invert_in_darkmode&sanitize=true" align=middle width=73.96450709999998pt height=31.141535699999984pt/>

</div>
</div>

Neural network themselves are tensors. In this case neural network <img src="/tex/7db884798ecc73c9bba043881409781b.svg?invert_in_darkmode&sanitize=true" align=middle width=122.07730094999997pt height=31.141535699999984pt/>. `Perceptrons` in a neural network are associated to each other via `function composition`. Consider <img src="/tex/6abb365fad186c6e2bbfa9783072fe89.svg?invert_in_darkmode&sanitize=true" align=middle width=21.75709304999999pt height=22.465723500000017pt/> it has an internal tensor of `activation values` <img src="/tex/d3c8ec4c3897e5a12784aab039c196c2.svg?invert_in_darkmode&sanitize=true" align=middle width=76.11870255pt height=31.141535699999984pt/>. The number of components in <img src="/tex/a0638f9c12d15dc1c92d324151064311.svg?invert_in_darkmode&sanitize=true" align=middle width=23.53224389999999pt height=31.141535699999984pt/> is one. The output of <img src="/tex/6abb365fad186c6e2bbfa9783072fe89.svg?invert_in_darkmode&sanitize=true" align=middle width=21.75709304999999pt height=22.465723500000017pt/> is a potential <img src="/tex/e18e054e2d963f4a4d6225355036b639.svg?invert_in_darkmode&sanitize=true" align=middle width=19.474012799999993pt height=14.15524440000002pt/>. The key question one must ask at this point is, how are the number of `activation values` in <img src="/tex/4e9bc937eb9b385a1891ea5866bb9463.svg?invert_in_darkmode&sanitize=true" align=middle width=25.43581589999999pt height=31.141535699999984pt/> associated to the number of `activation values` in <img src="/tex/533c4a66a96bb16af3cb7da1a9f9b598.svg?invert_in_darkmode&sanitize=true" align=middle width=15.838142099999992pt height=31.141535699999984pt/>? Here is where the magic happens <img src="/tex/e18e054e2d963f4a4d6225355036b639.svg?invert_in_darkmode&sanitize=true" align=middle width=19.474012799999993pt height=14.15524440000002pt/> becomes the input weight for <img src="/tex/0ef7292e4c2074cde496f21400c2fb71.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/> and <img src="/tex/7db08e494b0537210daf4ebb9fc5dffb.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/>. This means that <img src="/tex/e18e054e2d963f4a4d6225355036b639.svg?invert_in_darkmode&sanitize=true" align=middle width=19.474012799999993pt height=14.15524440000002pt/> becomes <img src="/tex/0c2385783fe94439987bb7421f6e8dc4.svg?invert_in_darkmode&sanitize=true" align=middle width=78.89643464999999pt height=31.141535699999984pt/> a weight value tensor and the input for <img src="/tex/0ef7292e4c2074cde496f21400c2fb71.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/> and <img src="/tex/7db08e494b0537210daf4ebb9fc5dffb.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/>. This means that the activation values tensor for <img src="/tex/0ef7292e4c2074cde496f21400c2fb71.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/> is <img src="/tex/779dea4eab1f92036f9f664a299c4283.svg?invert_in_darkmode&sanitize=true" align=middle width=82.20899114999999pt height=31.141535699999984pt/> a tensor with one component because the input layer consist of only one component <img src="/tex/6abb365fad186c6e2bbfa9783072fe89.svg?invert_in_darkmode&sanitize=true" align=middle width=21.75709304999999pt height=22.465723500000017pt/>. Is important to notice that `the number of activation values in a layer's perceptrons are determined by the number of perceptrons in the previous layer`.

For completeness let's consider the output layer `perceptron` <img src="/tex/6d91e89f6ae4bcd1e7056e64d3e3cb61.svg?invert_in_darkmode&sanitize=true" align=middle width=23.59479704999999pt height=22.465723500000017pt/>. Based on our current understanding <img src="/tex/6d91e89f6ae4bcd1e7056e64d3e3cb61.svg?invert_in_darkmode&sanitize=true" align=middle width=23.59479704999999pt height=22.465723500000017pt/> has an internal tensor of `activation values` <img src="/tex/242ea210b6817042e03c419d7d81f000.svg?invert_in_darkmode&sanitize=true" align=middle width=109.65218384999999pt height=31.141535699999984pt/> because <img src="/tex/4e9bc937eb9b385a1891ea5866bb9463.svg?invert_in_darkmode&sanitize=true" align=middle width=25.43581589999999pt height=31.141535699999984pt/> has two components <img src="/tex/0ef7292e4c2074cde496f21400c2fb71.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/> and <img src="/tex/7db08e494b0537210daf4ebb9fc5dffb.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/>. The output for <img src="/tex/0ef7292e4c2074cde496f21400c2fb71.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/> is a potential <img src="/tex/f2c41641f126a8d3b7a9b24b89185346.svg?invert_in_darkmode&sanitize=true" align=middle width=22.51914059999999pt height=14.15524440000002pt/> and the output for <img src="/tex/7db08e494b0537210daf4ebb9fc5dffb.svg?invert_in_darkmode&sanitize=true" align=middle width=24.80222084999999pt height=22.465723500000017pt/> is a potential <img src="/tex/42d5fd37ed216df9ac993061a1972185.svg?invert_in_darkmode&sanitize=true" align=middle width=22.51914059999999pt height=14.15524440000002pt/> therefore the weight value tensor is <img src="/tex/4b4a9dab3fc7ce7366f50e4e4c3b875b.svg?invert_in_darkmode&sanitize=true" align=middle width=115.63365659999998pt height=31.141535699999984pt/>. The weighted sum for <img src="/tex/6d91e89f6ae4bcd1e7056e64d3e3cb61.svg?invert_in_darkmode&sanitize=true" align=middle width=23.59479704999999pt height=22.465723500000017pt/> is <img src="/tex/d607a841b6980dc90f4755055c478778.svg?invert_in_darkmode&sanitize=true" align=middle width=166.73567789999998pt height=22.465723500000017pt/> and its potential is <img src="/tex/8f189c431a85e64fff451db30183bff2.svg?invert_in_darkmode&sanitize=true" align=middle width=127.72780019999999pt height=24.65753399999998pt/>. Notice how all perceptrons in every layer of the neural network are relaying information i.e. emitting a signal directly or indirectly to each other in a forward direction. The type of neural network where all perceptrons are connected to each other is called a dense neural network.


## Neural Networks In Action

### Introduction

We define a `neural network algorithm` as a function <img src="/tex/f9c4988898e7f532b9f826a75014ed3c.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=22.465723500000017pt/> that produces an `output` <img src="/tex/85e71836f40f6c1cb7a2aa1db55ae948.svg?invert_in_darkmode&sanitize=true" align=middle width=17.675844449999992pt height=31.141535699999984pt/> in response to an `input` <img src="/tex/533c4a66a96bb16af3cb7da1a9f9b598.svg?invert_in_darkmode&sanitize=true" align=middle width=15.838142099999992pt height=31.141535699999984pt/> and n number of hidden layers <img src="/tex/7a39f6d0d08d0074f8ed3f1614a10b83.svg?invert_in_darkmode&sanitize=true" align=middle width=49.066130849999986pt height=31.141535699999984pt/> i.e. <img src="/tex/9d4b7ecc2b051cba9574b7bf36271d13.svg?invert_in_darkmode&sanitize=true" align=middle width=141.23278784999997pt height=31.141535699999984pt/>. A neural network is a system defined by the following tensor <img src="/tex/0aee37ed4c8b8524c599452054bc5721.svg?invert_in_darkmode&sanitize=true" align=middle width=238.04027610000003pt height=31.141535699999984pt/>.
In our daily experience we go through time and we have a `state` at each moment in time. Our reality is a series of moments in time. At each moment we can `assess our state` and map any number of metrics to an exact moment in time and persist the resulting information representing our `state`. Our memories are our `state` and we derive knowledge from them. Compare to you or me <img src="/tex/4e9e77702a1c8278864c977f3ab48980.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> is a very simple system, a moment of time for <img src="/tex/4e9e77702a1c8278864c977f3ab48980.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> is represented by evaluating <img src="/tex/46b900f2a449005c3693598536a2adc5.svg?invert_in_darkmode&sanitize=true" align=middle width=141.3987894pt height=31.141535699999984pt/> and <img src="/tex/85e71836f40f6c1cb7a2aa1db55ae948.svg?invert_in_darkmode&sanitize=true" align=middle width=17.675844449999992pt height=31.141535699999984pt/> at a given value of <img src="/tex/533c4a66a96bb16af3cb7da1a9f9b598.svg?invert_in_darkmode&sanitize=true" align=middle width=15.838142099999992pt height=31.141535699999984pt/>. We bring <img src="/tex/4e9e77702a1c8278864c977f3ab48980.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> to life by feeding it `input` and evaluating the `output` of every `perceptron` <img src="/tex/df5a289587a2f0247a5b97c1e8ac58ca.svg?invert_in_darkmode&sanitize=true" align=middle width=12.83677559999999pt height=22.465723500000017pt/> in each neural network layer <img src="/tex/dc8dc5a2f03a5937263a8b1b75664767.svg?invert_in_darkmode&sanitize=true" align=middle width=11.18724254999999pt height=31.141535699999984pt/>. 

### Back Propagation Training Using The Gradient Descent Algorithm
 
Back propagation is the most widely used machine learning algorithm. The algorithm's objective is to find the optimal values for <img src="/tex/2d7f7eff3be2bb586da23bea4938b2c7.svg?invert_in_darkmode&sanitize=true" align=middle width=17.80826024999999pt height=31.141535699999984pt/> that will yield expected outputs <img src="/tex/6dbd48af38321078f9a05a87ca8d92ed.svg?invert_in_darkmode&sanitize=true" align=middle width=17.04224939999999pt height=31.141535699999984pt/> in <img src="/tex/ea1d2cf825c587ad25ff9ce69ddfd3e2.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> through a training process. The algorithm's steps are:

1. Identify the unique set of elements in a training set representing the expected labeled output call it <img src="/tex/e65a2f9d92d442e90266c88ede2f8e7b.svg?invert_in_darkmode&sanitize=true" align=middle width=17.04224939999999pt height=31.141535699999984pt/>.
2. Generate an initial set of random numbers corresponding to the number of perceptrons in <img src="/tex/2f0e9795807b21b70cfc488c8e14c663.svg?invert_in_darkmode&sanitize=true" align=middle width=15.838142099999992pt height=22.465723500000017pt/> in the range <img src="/tex/a85af7783f2e7bc76ed3eebf28d1d0f7.svg?invert_in_darkmode&sanitize=true" align=middle width=72.4845264pt height=21.18721440000001pt/> and use them to construct <img src="/tex/4fa67b28789e0546246f991b6f64ff98.svg?invert_in_darkmode&sanitize=true" align=middle width=23.65115609999999pt height=31.141535699999984pt/> the tensor used to invoke <img src="/tex/df5a289587a2f0247a5b97c1e8ac58ca.svg?invert_in_darkmode&sanitize=true" align=middle width=12.83677559999999pt height=22.465723500000017pt/> for every perceptron in <img src="/tex/f5b71110e84c526c834ae573b5b28bd1.svg?invert_in_darkmode&sanitize=true" align=middle width=15.838142099999992pt height=31.141535699999984pt/>.
3. Set <img src="/tex/5b1b2e04f25b2a125075e6964384d299.svg?invert_in_darkmode&sanitize=true" align=middle width=28.15084799999999pt height=31.141535699999984pt/> for all perceptrons in <img src="/tex/b6264aa354b9fc8f5c2151c488c700a5.svg?invert_in_darkmode&sanitize=true" align=middle width=27.00929219999999pt height=31.141535699999984pt/> and <img src="/tex/390fdc4deb9a9f1096352b1008f7bbc5.svg?invert_in_darkmode&sanitize=true" align=middle width=26.943424199999992pt height=31.141535699999984pt/> in all perceptrons in <img src="/tex/d3aa77830416d53482248f050bb9432d.svg?invert_in_darkmode&sanitize=true" align=middle width=17.675844449999992pt height=31.141535699999984pt/> to random numbers in the range <img src="/tex/e45db4c3652c5688a26d29c92ca1822a.svg?invert_in_darkmode&sanitize=true" align=middle width=68.96283404999998pt height=21.18721440000001pt/>. 
4. Iterate over the input data set.
5. At the beginning of each iteration generate <img src="/tex/a644888c8f58c9bf3af9db5755d3bd06.svg?invert_in_darkmode&sanitize=true" align=middle width=25.105720199999986pt height=31.141535699999984pt/> for each perceptron in <img src="/tex/f5b71110e84c526c834ae573b5b28bd1.svg?invert_in_darkmode&sanitize=true" align=middle width=15.838142099999992pt height=31.141535699999984pt/> based on the current input element.
6. Compute <img src="/tex/4fa67b28789e0546246f991b6f64ff98.svg?invert_in_darkmode&sanitize=true" align=middle width=23.65115609999999pt height=31.141535699999984pt/> to invoke <img src="/tex/d199f9d0ee8d8ea380ca43d3374c3f26.svg?invert_in_darkmode&sanitize=true" align=middle width=18.67967144999999pt height=22.465723500000017pt/> for each perceptron in all layers. The output of perceptrons in a previous layer became the input <img src="/tex/4fa67b28789e0546246f991b6f64ff98.svg?invert_in_darkmode&sanitize=true" align=middle width=23.65115609999999pt height=31.141535699999984pt/> for the current layer.
7. At the end of each iteration compute the error between the current output <img src="/tex/6dbd48af38321078f9a05a87ca8d92ed.svg?invert_in_darkmode&sanitize=true" align=middle width=17.04224939999999pt height=31.141535699999984pt/> and the expected output <img src="/tex/e65a2f9d92d442e90266c88ede2f8e7b.svg?invert_in_darkmode&sanitize=true" align=middle width=17.04224939999999pt height=31.141535699999984pt/>. One of the most commonly used error, cost, or loss functions to compare <img src="/tex/6dbd48af38321078f9a05a87ca8d92ed.svg?invert_in_darkmode&sanitize=true" align=middle width=17.04224939999999pt height=31.141535699999984pt/> vs. <img src="/tex/e65a2f9d92d442e90266c88ede2f8e7b.svg?invert_in_darkmode&sanitize=true" align=middle width=17.04224939999999pt height=31.141535699999984pt/> is the [Mean Squared Error](https://en.wikipedia.org/wiki/Mean_squared_error) function <img src="/tex/0d6a9bfb1b5f273064920a37eaa4a7fa.svg?invert_in_darkmode&sanitize=true" align=middle width=227.89602495pt height=27.77565449999998pt/>. The error indicates how close the <img src="/tex/4c6128f469e21af23599b077e368ffbd.svg?invert_in_darkmode&sanitize=true" align=middle width=16.39658954999999pt height=24.7161288pt/> is to <img src="/tex/dcacd0c2df330290b04661ab76e2a62c.svg?invert_in_darkmode&sanitize=true" align=middle width=16.39658954999999pt height=14.15524440000002pt/>.
8. Compute the rate of change of the error function. The rate of change of a single variable function with one scalar output is called a derivative i.e. <img src="/tex/93e18d6652306586255d9a676d29d4da.svg?invert_in_darkmode&sanitize=true" align=middle width=14.714685149999998pt height=30.648287999999997pt/>. The rate of change of a multi variable function with one scalar output is called the `gradient` i.e <img src="/tex/63074173d403fb2bb7a4b7b8bae340b5.svg?invert_in_darkmode&sanitize=true" align=middle width=39.566282249999986pt height=24.65753399999998pt/>.  The `gradient` indicates the direction and factor of magnitude of greatest increase of the error function. In this case the <img src="/tex/63074173d403fb2bb7a4b7b8bae340b5.svg?invert_in_darkmode&sanitize=true" align=middle width=39.566282249999986pt height=24.65753399999998pt/> needs to be computed since we are dealing with multi variable tensors.
9. This step requires <img src="/tex/63074173d403fb2bb7a4b7b8bae340b5.svg?invert_in_darkmode&sanitize=true" align=middle width=39.566282249999986pt height=24.65753399999998pt/> to be negative because the objective is to advance towards less error or cost i.e. <img src="/tex/4013ef5294db40e3a50eed56720398b6.svg?invert_in_darkmode&sanitize=true" align=middle width=82.69970444999998pt height=24.65753399999998pt/>. Define `learning rate` <img src="/tex/e8f8b1ecaf41e46a5d21869b3d3352e0.svg?invert_in_darkmode&sanitize=true" align=middle width=11.36232239999999pt height=22.831056599999986pt/> a number <img src="/tex/96a4a2aca5f8706175ef2254bbd3ca71.svg?invert_in_darkmode&sanitize=true" align=middle width=68.14663515pt height=21.18721440000001pt/>, used as a factor that determines the magnitude of <img src="/tex/262c0d32a1318083cfb2090e308840bf.svg?invert_in_darkmode&sanitize=true" align=middle width=25.909517699999988pt height=22.465723500000017pt/> in conjunction with <img src="/tex/63074173d403fb2bb7a4b7b8bae340b5.svg?invert_in_darkmode&sanitize=true" align=middle width=39.566282249999986pt height=24.65753399999998pt/>. Define `momentum` <img src="/tex/0e51a2dede42189d77627c4d742822c3.svg?invert_in_darkmode&sanitize=true" align=middle width=14.433101099999991pt height=14.15524440000002pt/> a number between <img src="/tex/96a4a2aca5f8706175ef2254bbd3ca71.svg?invert_in_darkmode&sanitize=true" align=middle width=68.14663515pt height=21.18721440000001pt/>, used as a factor that determines the magnitude of <img src="/tex/262c0d32a1318083cfb2090e308840bf.svg?invert_in_darkmode&sanitize=true" align=middle width=25.909517699999988pt height=22.465723500000017pt/> in conjunction with <img src="/tex/63074173d403fb2bb7a4b7b8bae340b5.svg?invert_in_darkmode&sanitize=true" align=middle width=39.566282249999986pt height=24.65753399999998pt/>. The magnitude of <img src="/tex/e8f8b1ecaf41e46a5d21869b3d3352e0.svg?invert_in_darkmode&sanitize=true" align=middle width=11.36232239999999pt height=22.831056599999986pt/> will determine how big of a step we take in our search to minimize the error or cost <img src="/tex/84df98c65d88c6adf15d4645ffa25e47.svg?invert_in_darkmode&sanitize=true" align=middle width=13.08219659999999pt height=22.465723500000017pt/>. The magnitude of <img src="/tex/0e51a2dede42189d77627c4d742822c3.svg?invert_in_darkmode&sanitize=true" align=middle width=14.433101099999991pt height=14.15524440000002pt/> will determine how much of an influence the previous values of <img src="/tex/31fae8b8b78ebe01cbfbe2fe53832624.svg?invert_in_darkmode&sanitize=true" align=middle width=12.210846449999991pt height=14.15524440000002pt/> have in our search to minimize the error or cost <img src="/tex/84df98c65d88c6adf15d4645ffa25e47.svg?invert_in_darkmode&sanitize=true" align=middle width=13.08219659999999pt height=22.465723500000017pt/>. Compute the scalar values <img src="/tex/cbf2d25c2920c573d384a23167e6ce51.svg?invert_in_darkmode&sanitize=true" align=middle width=161.81612205pt height=22.831056599999986pt/> by which <img src="/tex/31fae8b8b78ebe01cbfbe2fe53832624.svg?invert_in_darkmode&sanitize=true" align=middle width=12.210846449999991pt height=14.15524440000002pt/> needs change in order to decrease error i.e. bring <img src="/tex/85549ce61ab1c6698a283c4dce58ca51.svg?invert_in_darkmode&sanitize=true" align=middle width=14.75916914999999pt height=14.15524440000002pt/> closer <img src="/tex/5d0670faa1816d80e3d183ad2e44e28e.svg?invert_in_darkmode&sanitize=true" align=middle width=14.75916914999999pt height=24.7161288pt/>. To fine tune the bias add <img src="/tex/262c0d32a1318083cfb2090e308840bf.svg?invert_in_darkmode&sanitize=true" align=middle width=25.909517699999988pt height=22.465723500000017pt/> to it.
10. Calculate <img src="/tex/262c0d32a1318083cfb2090e308840bf.svg?invert_in_darkmode&sanitize=true" align=middle width=25.909517699999988pt height=22.465723500000017pt/> in the backward direction to adjust every <img src="/tex/31fae8b8b78ebe01cbfbe2fe53832624.svg?invert_in_darkmode&sanitize=true" align=middle width=12.210846449999991pt height=14.15524440000002pt/> in <img src="/tex/2d7f7eff3be2bb586da23bea4938b2c7.svg?invert_in_darkmode&sanitize=true" align=middle width=17.80826024999999pt height=31.141535699999984pt/> across all layers in <img src="/tex/ea1d2cf825c587ad25ff9ce69ddfd3e2.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> relative to it's adjacent layer. This step is know as `back propagation`.
11. After iterating over the complete training data set verify that the current error is less or equal to the `error threshold` <img src="/tex/6c54e97d0d1abcad40825b78f93cda95.svg?invert_in_darkmode&sanitize=true" align=middle width=17.10051089999999pt height=24.7161288pt/> or that the `maximum number of iterations` <img src="/tex/02371a851d5272c817815c291d3bc927.svg?invert_in_darkmode&sanitize=true" align=middle width=33.475655399999994pt height=22.465723500000017pt/> was reached, if true stop training else continue. Each complete iteration over all items in a training set is called an `epoch`.

Is crucial to understand that <img src="/tex/2d7f7eff3be2bb586da23bea4938b2c7.svg?invert_in_darkmode&sanitize=true" align=middle width=17.80826024999999pt height=31.141535699999984pt/> and associated bias change as a result of back propagation while <img src="/tex/32785f4dd73fb9644aba5a09d8b38d98.svg?invert_in_darkmode&sanitize=true" align=middle width=12.55717814999999pt height=31.141535699999984pt/> changes as a result of iterating over training data in the forward direction. This means that properly labeled data is essential  for training and how well <img src="/tex/ea1d2cf825c587ad25ff9ce69ddfd3e2.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> performs. When practicing machine learning you will be presented with the opportunity to adjust what are called hyper parameters some of them are:

* <img src="/tex/187dece3e09db142d5449e05fa6159c3.svg?invert_in_darkmode&sanitize=true" align=middle width=17.10051089999999pt height=22.465723500000017pt/> error threshold.
* <img src="/tex/02371a851d5272c817815c291d3bc927.svg?invert_in_darkmode&sanitize=true" align=middle width=33.475655399999994pt height=22.465723500000017pt/> expected number of iterations.
* <img src="/tex/e8f8b1ecaf41e46a5d21869b3d3352e0.svg?invert_in_darkmode&sanitize=true" align=middle width=11.36232239999999pt height=22.831056599999986pt/> learning rate.
* <img src="/tex/0e51a2dede42189d77627c4d742822c3.svg?invert_in_darkmode&sanitize=true" align=middle width=14.433101099999991pt height=14.15524440000002pt/> momentum.

## Training Data

The process of preparing training data sets is challenging. The key to the process is proper vectorization and labeling of training data. Neural networks can be applied to all kind of problems involving regression, classification, or prediction. The way data is prepared for training requires careful consideration of the domain and the goals one intents to achieve.

Imagine we have a set of data representing the horse power <img src="/tex/47ac0d281b7710e8b8e14bf903bb61c3.svg?invert_in_darkmode&sanitize=true" align=middle width=17.74168109999999pt height=22.831056599999986pt/>, and the miles per gallon <img src="/tex/12fbcc7e880d56f367f8f97ddfeffa7d.svg?invert_in_darkmode&sanitize=true" align=middle width=31.134043049999992pt height=14.15524440000002pt/> of a model <img src="/tex/0e51a2dede42189d77627c4d742822c3.svg?invert_in_darkmode&sanitize=true" align=middle width=14.433101099999991pt height=14.15524440000002pt/>. The array <img src="/tex/822af05d059b745907cd11194ef01865.svg?invert_in_darkmode&sanitize=true" align=middle width=172.50324465pt height=24.65753399999998pt/> represents an element in our raw dataset. Our objective is to determine if there is a relationship between <img src="/tex/47ac0d281b7710e8b8e14bf903bb61c3.svg?invert_in_darkmode&sanitize=true" align=middle width=17.74168109999999pt height=22.831056599999986pt/> and <img src="/tex/12fbcc7e880d56f367f8f97ddfeffa7d.svg?invert_in_darkmode&sanitize=true" align=middle width=31.134043049999992pt height=14.15524440000002pt/> and to design a neural network <img src="/tex/e5aac4777c53f0ed00a9b0dd489f974f.svg?invert_in_darkmode&sanitize=true" align=middle width=12.60847334999999pt height=31.141535699999984pt/> that will help us predict the <img src="/tex/12fbcc7e880d56f367f8f97ddfeffa7d.svg?invert_in_darkmode&sanitize=true" align=middle width=31.134043049999992pt height=14.15524440000002pt/> given <img src="/tex/47ac0d281b7710e8b8e14bf903bb61c3.svg?invert_in_darkmode&sanitize=true" align=middle width=17.74168109999999pt height=22.831056599999986pt/>. To prepare the data for consumption we need understand what are the inputs and outputs for our model. Since our intent is to predict <img src="/tex/12fbcc7e880d56f367f8f97ddfeffa7d.svg?invert_in_darkmode&sanitize=true" align=middle width=31.134043049999992pt height=14.15524440000002pt/> in relationship to <img src="/tex/47ac0d281b7710e8b8e14bf903bb61c3.svg?invert_in_darkmode&sanitize=true" align=middle width=17.74168109999999pt height=22.831056599999986pt/> regardless of the model, then our training data becomes <img src="/tex/50375967ded821fe9ca345c30ea8d3fb.svg?invert_in_darkmode&sanitize=true" align=middle width=145.35607514999998pt height=24.65753399999998pt/>. The last step in the process is data normalization, and is usually accomplished by [min-max feature scaling](https://en.wikipedia.org/wiki/Feature_scaling). The function for `min-max feature scaling` is <img src="/tex/330f90d02487e59116aed0997402d8fa.svg?invert_in_darkmode&sanitize=true" align=middle width=300.0018218999999pt height=27.7259796pt/> where <img src="/tex/e599747d699cb0a089e120cf3ae2ba28.svg?invert_in_darkmode&sanitize=true" align=middle width=16.81517804999999pt height=14.15524440000002pt/> is any value, <img src="/tex/81cd427686660acd10e1189112111dad.svg?invert_in_darkmode&sanitize=true" align=middle width=34.93875824999999pt height=14.15524440000002pt/> is the maximum, and <img src="/tex/f193a8629bf8a67561f0c11bbdb23db0.svg?invert_in_darkmode&sanitize=true" align=middle width=33.13092584999999pt height=14.15524440000002pt/> is the minimum in the array <img src="/tex/2227c544d660dc1a779d363ee5be236e.svg?invert_in_darkmode&sanitize=true" align=middle width=103.27082039999999pt height=24.65753399999998pt/>. Normalization assures that the value <img src="/tex/e599747d699cb0a089e120cf3ae2ba28.svg?invert_in_darkmode&sanitize=true" align=middle width=16.81517804999999pt height=14.15524440000002pt/> is always within the range <img src="/tex/167170b94d82e7ea110cea641006ec9a.svg?invert_in_darkmode&sanitize=true" align=middle width=82.5616506pt height=21.18721440000001pt/>. In our case study <img src="/tex/2294d03ea6b30b14bdf8221befe8bd69.svg?invert_in_darkmode&sanitize=true" align=middle width=261.8544027pt height=24.65753399999998pt/> and the expected output <img src="/tex/c66fcda7b8dfe89305d119395b3fede9.svg?invert_in_darkmode&sanitize=true" align=middle width=302.09980845pt height=24.65753399999998pt/>. Normalization is necessary because it brings any data set to the necessary range <img src="/tex/2df1dad6ff051a9311721c9c00548d86.svg?invert_in_darkmode&sanitize=true" align=middle width=68.96283404999998pt height=21.18721440000001pt/>.

## Conclusion

Neural networks are a way to universally model functions. When a neural network is trained it becomes a function specific to the training domain. After training the acquired knowledge can be preserved by serializing <img src="/tex/2d7f7eff3be2bb586da23bea4938b2c7.svg?invert_in_darkmode&sanitize=true" align=middle width=17.80826024999999pt height=31.141535699999984pt/>, associated biases, and all the hyper parameters used during training. When utilizing the neural network for regression, predictions, or classification the activation values come form the input provided and the wights are not changed. The activation values flow forward from the input layer to the output layer. The resulting kernel of knowledge is very tiny in comparison to the training data and could be used almost anywhere including a web browser. Is as simple as using your AI framework of choice to instantiate <img src="/tex/f9c4988898e7f532b9f826a75014ed3c.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=22.465723500000017pt/> by deserializing <img src="/tex/ea1d2cf825c587ad25ff9ce69ddfd3e2.svg?invert_in_darkmode&sanitize=true" align=middle width=14.99998994999999pt height=31.141535699999984pt/> and giving it an input, then you get your lovely output like magic. 

## Examples

In the [examples](https://github.com/geosp/hello_brain/tree/master/src/examples) directory you can find several examples using the [Brain.JS](https://brain.js.org) framework to create and train neural networks.

## References

1. [Awesome lecture by Robert Plummer creator of Brain.JS](https://scrimba.com/g/gneuralnetworks)
2. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com)
3. [Neural Networks Deep Dive](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
4. [Brain.JS](https://brain.js.org) 
5. [Point-Free Programming](https://simonsmith.io/dipping-a-toe-into-functional-js-with-lodash-fp)