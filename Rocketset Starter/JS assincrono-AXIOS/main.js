axios.get('http://api.github.com/users/renaner123')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });