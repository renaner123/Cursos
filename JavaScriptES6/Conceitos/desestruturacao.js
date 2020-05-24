// Desestruturação de objetos

const usuario = {
    nome: 'Renan',
    idade: 23,
    endereco:{
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
}

const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


function mostraNome(nome, idade){
    console.log(nome , idade);
}