const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// slice({posição que começa o corte}, {alncance do corte a ser realizado})
// o slice não altera o array original

const array = [1, 2, 3, 4, 5]
// o corte começa no item 1 e e chega até o elemento 4
console.log(array.slice(0, 4))
console.log(array)

const array2 = [1, 2, 3, 4, 5]
console.log(array2.slice(1, 3))
console.log(array2)