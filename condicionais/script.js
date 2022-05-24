//Aula 05
/* SEMÁFORO
const semaforo = "roxo"

if(semaforo == "verde"){
    console.log("Pode passar!")
}else if(semaforo == "vermelho"){
    console.log("Semáforo fechado, não pode passar!")
} else{
    console.log("Atenção!")
} */

//AUTENTICAÇÃO DE USUÁRIO
/* const email = "katherine@mar.com"
const password = "123456"

if(email == "katherine@mar.com" && password == "123456"){
    console.log("Usuário Logado!")
} else {
    console.log("Usuário e/ou senha incorretos!")
}
*/

// VALIDANDO IDADE
/*const idade = 35;
const empregado = false;

if(idade >= 40 || empregado){
    console.log("Credito Aprovado!")
} else{
    console.log("Crédito não aprovado!")
} */

//Estação do ano
/*const mes = 'Junho'

switch(mes){
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!")
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!")
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!")
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!")
        break;
} */

//calcular reajuste salarial e imprimir no console log

const profissao = ''
const salario = 5000.00

switch (profissao){
    case "Desenvolvedor Junior":
        console.log("Salario: "+ (salario *= 2.15))
        break;
    case "Desenvolvedor Pleno":
        console.log("Salario: "+ (salario *= 1.10))
        break;
    case "Desenvolvedor Senior":
        console.log("Salario: "+ (salario *= 1.05))
        break;
    default:
        console.log("Profissão indeterminada!")
}