var minhaPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/renaner123');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(xhr.status === 200){                     // 200 ok quando retorna com sucesso
                    resolve(JSON.parse(xhr.responseText)); // retorno do github é um JSON, então é possível usar parse
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });