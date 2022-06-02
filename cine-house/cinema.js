//Aula de nodemon (25/05)
/* instalar nodemon: npm install nodemon --save
    no terminal: npx nodemon [nome do arquivo].js
    Aí o terminal atualizar assim que o arquivo alterado é salvo
*/

//Aula 06 (27/05): criação do arquivo catalogo e das funções
//Atualizações - Aula 08 (30/05): adicionando json e mais funções

const catalogo = require("./database/catalogo.json");

function adicionarFilme(catalago, filme){
    return catalogo.push(filme);
}

adicionarFilme(catalogo,{
    "codigo": 3,
    "titulo": "Lua de Cristal",
    "ano": 1990,
    "atores": ["Xuxa Meneguel", "Sérgio Malandro", "Paquitas"],
    "duracao": 1,
    "emCartaz": true
});

function buscarFilme(catalago, titulo){
    const filme = catalago.find(filme => filme.titulo === titulo);
    console.log("Lista de Filmes:")

    return filme;
}

function alterarStatusEmCartaz(catalogo, codigo){
    const filme = catalogo.filter(filme => {
        filme.codigo === codigo ? filme.emCartaz = !filme.emCartaz: ''
    })
    return catalogo;
}

function  listarTodosOsFilmes(catalago){
    //usando o forEach
    catalogo.forEach((filme) => {
        return filme;
    })
}

function listarFilmesDeLongaDuracao(catalago){
    //verificar, com if ternário, os filmes que tem mais de 2h de duracao
    catalago.forEach((filme) =>{
        filme.duracao >= 2 ? console.log(filme):''
    })
}

function listarFilmesEmCartaz(catalago){
    for(filme of catalogo){
        if(filme.emCartaz === true){
            return filme
        }
    }
}

