//create a neural network
var net = new brain.NeuralNetwork();

//train the neural network
net.train([{input: [1/50],    output: [1/31.0686]},
           {input: [1/20],    output: [1/12.4274]},
           {input: [1/14],    output: [1/8.6992]},
           {input: [1/3],     output: [1/1.86411]},
           {input: [1/1006],  output: [1/625.0994]},
           {input: [1/7],     output: [1/4.3496]},
           {input: [1/9],     output: [1/5.59234]}]);

//run the neural network with a value
var output = net.run([1/8]);  // [0.987]

//map the value for output
output = output.map((result) => {
  return 1/result;
});

console.log(output);
