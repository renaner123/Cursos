## Introdução ao JavaScript

```
### Variáveis
```javascript
function hello(arg){
    var nome = "Renan";
    var idade = 25;
    var peso = 60;
    var humano = true;

    var alunos = ['DIego','Gabriel','Lucas'];

    var aluno= {
        nome: alunos[0],
        idade: 25,
        peso: 60,
        humano: true
    };
    console.log(alunos[1]);
    console.log(aluno.peso);
}
```

### Aritiméticas
```javascript
<script>
    //Aritiméticas
    var x = 10; y=5;
    x += 3;
    x /= y;
    x *= y;
    x -= y;

</script>
```
### Funções
```javascript
<script>
    function soma(numero1,numero2){
        var resultado = numero1 + numero2;
        return resultado
    }

    var resultado = soma(1,2);
    console.log(resultado);
</script>
```
### Condicionais 
```javascript
<script>
    function retornaSexo(sexo){
        switch (sexo){
            case 'M':
                return 'Masculino';
            case 'F':
                return 'Feminino';
            default:
                return 'Outro';
        }
    }

    var resultado = soma(1,2);
    console.log(resultado);
</script>
```

### Operador ternário
```javascript
<script>
    //Operador ternário
    var sexo = 'M';
    var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';
    console.log(resultado);
</script>
```
### Estrutura de repetição
```javascript
<script>
    //Estrutura de repetição
    //for (var i = 0; i<=100;i++){
    //    console.log(i)
    //}
    var j = 2123213;
    while(j > 50){
        console.log(j);
        j /= 5;
    }
</script>
```
### Intervalo e Timeout
```javascript
<script>
    //Intervalo e timeout
    function exibeAlgo(){
        console.log('Hello World');
    }

    setInterval(exibeAlgo,1000); // fica executando a cada intervalo
    setTimeout(exibeAlgo,1000);  // Executa somente uma vez com esse delay
</script>
```javascript
