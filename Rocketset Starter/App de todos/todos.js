var listElement = document.querySelector('#app ul');         //Acessa a div app ul do html
var inputElement = document.querySelector('#app input');     //Acessa a div input do html
var buttonElement = document.querySelector('#app button');   //Acessa a div button do html


var todos = JSON.parse(localStorage.getItem('list_todos') || []); // Inicia com itens armazenados no local storage
                                                                 // caso não tenha, atribui array vazio
//Renderizar todos 
function renderTodos(){
    listElement.innerHTML = '';                            //limpa o ul do html
    for(todo of todos){
        var todoElement = document.createElement('li');    // Cria um list item
        var todoText = document.createTextNode(todo+" ");      // Texto que vai ser amazenado dentro da li

        var linkElement = document.createElement('a');     // Cria um link element para excluir
        linkElement.setAttribute('href', '#');             //# serve para não ter um link sem efeito nenhum

        var pos = todos.indexOf(todo);                     // retorna posição do todo
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir'); // Adiciona o texto excluir no elemento 'a'

        linkElement.appendChild(linkText);                 // atribui o texto ao link element
        
        todoElement.appendChild(todoText);                 // adiciona o todo(Texto) na list item
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);              // Adiciona a li na ul
   
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;                  // Recebe valor do input

    todos.push(todoText);                               // Adiona no fim da lista
    inputElement.value = '';                            // Limpa o input
    renderTodos();                                      // Renderiza
    saveToStorage();                                    // Salva no storage local
}

buttonElement.onclick = addTodo;


function deleteTodo(pos){
    todos.splice(pos,1);                                 // remover 1 item após 'pos'
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));          // não salva objetos, necessário converter para Json
}