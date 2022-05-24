var nome = ['Kath', 'Seb', 'Thaly', 'Chico']

nome[3] = {
    nome: "Chico",
    idade: 2,
    uf: "AM"
}
nome[1] = {
    nome: "Seb",
    idade: 10,
    uf: "AM",
    endereco: ["Santo Antônio", 2, "Manaus"]
}

console.log(nome)

// PUSH acrescenta no final
nome.push("Princesa")
nome.push("Chiquinha")

//UNSHIFT adiciona no início
nome.unshift("Sunça")
nome.unshift("Maria")

// POP apaga o último inserido
nome.pop()

// SHIFT apaga a primeira posição
nome.shift()

// SPLICE apagar a partir do índice (2) a quantidade indicada (3)
nome.splice(1, 3)
