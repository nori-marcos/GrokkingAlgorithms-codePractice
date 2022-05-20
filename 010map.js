// o map é uma estrutura de dados inteligentes que facilita as buscas
// geralmente, boas linguagens de códigos já possuem sua própria implementação de hashmap/map/dictionary/associative table

// para criar map em js:

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
