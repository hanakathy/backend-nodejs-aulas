const { request } = require("express");
const { response } = require("express");
const express =  require("express");


const app = express();

app.use(express.json());


const projects = [];

app.post("/projects", (request, response) => {
    const { id, title, tasks} = request.body
    
    const projeto = { id, title, tasks }

    projects.push(projeto)

    return response.json(projeto)
})

app.get("/projects" , (request, response) => {
    return response.json(projects)
})

app.put("/projects/:id", (request, response) => {
    const { id } = request.params;
    const { title, tasks} = request.body;

    const projetoIndex = projects.findIndex( projeto => projeto.id === id)

    if( projetoIndex < 0) {
        return response.status(400).json({error: 'Projeto não encontrado'})
    }

    const projeto = {

        id, 
        title, 
        tasks: []
    }
    
    projects.push(projeto);

    return response.json(projeto);

}) 

app.delete("/projects/:id", (request, response) => {
    const { id } = request.params;

    const projetoIndex = projects.findIndex( projeto => projeto.id === id)

    if( projetoIndex < 0) {
        return response.status(400).json({error: 'Projeto não encontrado'})
    }


    projects.splice(projetoIndex, 1)
    return response.status(204).send()

})


app.post('/projects/:id/tasks', (request, response) => {
    const { id } = request.params;
    const { title } = request.body;
  
    const projetoIndex = projects.findIndex( projeto => projeto.id === id)

    if( projetoIndex < 0) {
        return response.status(400).json({error: 'Projeto não encontrado'})
    }

  
    projects[projetoIndex].tasks.push(title)
  
    return response.json(projects[projetoIndex]);
  });


app.listen(8080)  
