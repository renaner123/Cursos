
// Operaçãoes com Array
const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index){ //map percore o vetor e retorna uma nova informação
    return item + index;
});


const sum = arr.reduce(function(total,next){ // joga o valor de next para o total, resultando no final a soma de tudo
    return total;
});

// 0
// 1

// 1
// 3
const filter = arr.filter(function(item){ //false remove, true mantém no array.
    return item % 2 === 0;
});


const find = arr.find(function(item){ // retornar o valor se encontrar no array ou undefined
    return item === 4;
});

