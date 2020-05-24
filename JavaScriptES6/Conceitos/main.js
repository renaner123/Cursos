class List{
    constructor(){
        this.data = [];
    }


    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {  //herdando de List
    constructor(){
        super();
        this.usuario = 'Renan';
    }

    monstraUsuario(){
        console.log(this.usuario);
    }
}

const Minhalista = new TodoList(); // cria uma nova todolist

document.getElementById('novotodo').onclick = function(){
    Minhalista.add('Novo todo');
}
//comment
Minhalista.monstraUsuario;


