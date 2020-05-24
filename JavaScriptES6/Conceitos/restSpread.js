
//Resto de um objeto
const usuario = {
    nome: 'Renan',
    idade: 23,
    empresa: 'Rocketseat'
};
const {nome, ...resto} = usuario;

console.log("Resto de um objeto");
console.log(nome);
console.log(resto);


//Resto de um vetor
const arr = [1,2,3,4];

const[a, b, ...c] = arr;
console.log("Resto de um Vetor");
console.log(a);
console.log(b);
console.log(resto);

//Resto de uma função
function soma(a,b,...params){
    return params;
}
console.log("Resto de uma função");
console.log(soma(1,3,4,5,6));

//Spread

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]; // unir dois arrays
console.log("Spread para unir dois array");
console.log(arr3);

const usuario1 = {
    nome: 'Renan',
    idade: 23,
    empresa: 'Rocketseat',
};

const usuario2 = {... usuario1, nome:'Gabriel'} // usando spread para alterar somente uma propriedade de um objeto