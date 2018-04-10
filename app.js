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
           {input: [1/147],   output: [1/40.8333]},
           {input: [1/72],     output: [1/20]},
           {input: [1/108],   output: [1/30]},
           {input: [1/172.8],     output: [1/48]},
           {input: [1/194.4],   output: [1/54]},
           {input: [1/205.2],     output: [1/57]},
           {input: [1/237.6],   output: [1/66]}]);

//run the neural network with a value
var output = net.run([1/8]);

//map the value for output
output = output.map((result) => { return 1/result; });

console.log(output);
