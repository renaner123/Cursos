console.log('\n Exercício 1');
function exercicio1(arg){
    var rec = arg;
    console.log('O usuário mora em ' + rec.cidade + '/'+ rec.uf + ',' + 'no bairro ' + rec.bairro + ',' + 'na rua '+ rec.rua + 'com nº '+ rec.numero);

}
var endereco = {  rua: "Rua dos pinheiros",  numero: 1293,  bairro: "Centro",  cidade: "São Paulo",  uf: "SP"};

exercicio1(endereco);

console.log('\n Exercício 2');
function exercicio2(num1, num2){
    var i = 0;
    for(i=num1;i<=num2;i++){
        if((i%2)===0){
            console.log(i);
        }
    }   
}
exercicio2(2,10);

console.log('\n Exercício 3');

function exercicio3(arg2){

    if(arg2.indexOf('Javascript',0) != -1){
        return true;
    }else{
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(exercicio3(skills)); // true ou false

console.log('\n Exercício 4 ');
function exercicio4(arg3){
    if(arg3===0 || arg3===1){
        return 'Iniciante';
    }else if(arg3>1 && arg3<=3){
        return 'Intermediário';
    }else if(arg3>3 && arg3<=6){
        return 'Avançado';
    }else if(arg3>=7){
        return 'Jedi Master'
    }
}

var anosEstudo = 7;
console.log(exercicio4(anosEstudo));

console.log('\n Exercício 5');

function exercicio5(arg4){
    for(var iterador of arg4){
        console.log('O ' + iterador.nome + ' possui as habilidades: ' + iterador.habilidades.join());
    }

}

var usuarios = [  
    {   
        nome: "Diego",    habilidades: ["Javascript", "ReactJS", "Redux"]  
    }, 
    {   
        nome: "Gabriel",    habilidades: ["VueJS", "Ruby on Rails", "Elixir"] 
    }
];

exercicio5(usuarios);