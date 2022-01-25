// o que são vetores ou arrays

// como declarar um array
// let array = ['string', 1, true];
// console.log(array);

// pode guardar vários tipos de dados
let array=['string', 1, true, ['array1'],['array2'],['array3'], ['array4']]
console.log(array[1])

//forEach - Itera um array

// array.forEach(function(item, index){console.log(item, index)})

// Push - Adiciona um novo item ao final do array
//  array.push('novo item');
// console.log(array)

// Pop - Remove um item ao final do array
//  array.pop();
// console.log(array)

// Shift - Remove um item no inicio do array
// array.shift();
// console.log(array);

// Unshift - Adiciona um item no início do array
// array.unshift('novo item')
// console.log(array);

//indexof - Exibe o valor do índice.
// console.log(array.indexOf(true));

// splice - remove ou substitui um item pelo índice.
// array.splice(0,3)
// console.log(array)
//slice - retorna uma parte de um array existente.
// let novoArray = array.slice(0,3);
// console.log(novoArray)

let object ={string: 'string', number:1, boolean: true, 
array:[`array`], objectInterno:{objectInterno:'object interno'}};
console.log(object.array);

//desestruturação
var string = object.string;
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)
