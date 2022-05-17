const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



// splice({posicao do elemento no array}, {quantidade de elementos que queremos retirar}, {novo item que quero adicionar})

const array = [1, 2, 3, 4, 5]
console.log(array.splice(0, 1, "item adicionado"))
console.log(array)

const array2 = [1, 2, 3, 4, 5]
console.log(array2.splice(1, 1))
console.log(array2)