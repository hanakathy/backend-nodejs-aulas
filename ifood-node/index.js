
/* Aula 02
var idade = 10
var uf = 'AM'
var nome = `Sebastian - ${idade} - ${uf}` //template literal com concatenação

console.log(nome);

var pessoa = {
    nome: 'Sebastian',
    idade: 10,
    sexo: "Masc",
    possuiFilho: false
}

console.log(pessoa);

var idades = [1, "3"]

console.log(idades) */

//Aula 03 - Funções

function soma (a, b){
    return a+b
}

const resultado = soma(2,3)

console.log(resultado)


//Arrow Function
dobro = (x) =>{
    return 2*x
}
console.log(dobro(8))
