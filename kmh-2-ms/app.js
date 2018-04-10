//create a neural network
var net = new brain.NeuralNetwork();

//train the neural network
net.train([{input: [1/12],    output: [1/3.33333]},
           {input: [1/5],    output: [1/1.38889]},
           {input: [1/14],    output: [1/3.88889]},
           {input: [1/3],     output: [1/0.833333]},
           {input: [1/1006],  output: [1/625.0994]},
           {input: [1/7],     output: [1/1.94444]},
           {input: [1/9],     output: [1/2.5]},
           {input: [1/147],   output: [1/40.8333]}]);

//run the neural network with a value
var output = net.run([1/8]);

//map the value for output
output = output.map((result) => { return 1/result; });

console.log(output);
