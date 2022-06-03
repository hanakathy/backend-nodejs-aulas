//Aula de nodemon (25/05)
/* instalar nodemon: npm install nodemon --save
    no terminal: npx nodemon [nome do arquivo].js
    Aí o terminal atualizar assim que o arquivo alterado é salvo
*/

//Aula 06 (27/05): criação do arquivo catalogo e das funções
//Atualizações - Aula 08 (30/05): adicionando json e mais funções

const catalogo = require("./database/catalogo.json");
const listarFilmesDeLongaDuracao = require("./funcoes/listarFilmesDeLongaDuracao");

function adicionarFilme(catalogo, filme){
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

function buscarFilme(catalogo, titulo){
    const filme = catalogo.find(filme => filme.titulo === titulo);
    console.log("Lista de Filmes:")

    return filme;
}

function alterarStatusEmCartaz(catalogo, codigo){
    const filme = catalogo.filter(filme => {
        filme.codigo === codigo ? filme.emCartaz = !filme.emCartaz: ''
    })
    return catalogo;
}

function listarTodosOsFilmes(catalogo){
    //usando o forEach
    catalogo.forEach((filme) => {
        console.log(filme);
    })
}

function listarFilmesEmCartaz(catalogo){
    for(filme of catalogo){
        if(filme.emCartaz === true){
            return filme
        }
    }
}

console.log(listarFilmesDeLongaDuracao(catalogo))
