var buttonElement = document.querySelector('#app button');

function quadrado(){
    let boxElement = document.createElement("div");
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#f00';

    boxElement.classList.add('box');
    document.body.appendChild(boxElement);
}

function mudacor(arg){
    let boxElement = document.createElement("div");
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = arg;
    boxElement.classList.add('box');
    boxElement.addEventListener('mouseover', function(){
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return this.style.background = color;
    });
    document.body.appendChild(boxElement);
}



function teste(){
    console.log("teste");
}

buttonElement.onclick = quadrado;
