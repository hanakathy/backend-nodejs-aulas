//Aula de nodemon (25/05)
/* instalar nodemon: npm install nodemon --save
    no terminal: npx nodemon [nome do arquivo].js
    Aí o terminal atualizar assim que o arquivo alterado é salvo
*/

//Aula 06 (27/05)
const catalogo = [
    {
        codigo: 1,
        titulo: 'Star Wars - Uma Nova Esperança',
        anoDeLancamento: 1977,
        atores:[
            'Mark Hamill', 
            'Harrison Ford', 
            'Carrie Fisher'
            ],
        diretor:'George Lucas',
        genero:'Aventura',
        duracao: 2,
        emCartaz: false
    }
]

function adicionarFilme(catalago, filme){
    return catalogo.push(filme);
}

adicionarFilme(catalogo,{
        codigo: 2,
        titulo: 'Inception',
        anoDeLancamento: 2010,
        atores:[
            'Leonardo DiCaprio',
            'Joseph Gordon-Levitt',
            'Elliot Page'
        ],
        diretor:'Christopher Nolan',
        genero:'Ação',
        duracao: 2,
        emCartaz: true
})

function buscarFilme(catalago, titulo){
    return catalago.find(filme => filme.titulo === titulo)
}

function alterarStatusEmCartaz(catalogo, codigo){
    catalogo.filter(filme => {
        filme.codigo === codigo ? filme.emCartaz = !filme.emCartaz: ''
    })
    return catalogo
}

console.log(buscarFilme(catalogo, 'Inception'))
console.log(alterarStatusEmCartaz(catalogo, 1))

