//Exercício do Playground sobre elementos de Arrays

let listaCompras = ["sabão", "miojo", "enlatados", "ração de gato"]

//Join
console.log("JOIN junta um ou mais elementos de um array separando-os por vírgula, se não for indicado um separador")
let listaComprasJoin = listaCompras.join()
console.log(listaComprasJoin)

//Pop
console.log("POP elimina o último elemento:")
listaCompras.pop()
console.log(listaCompras)

//Push
console.log("PUSH adiciona um ou mais elementos no final:")
listaCompras.push("shampoo")
console.log(listaCompras)

//Shift
console.log("SHIFT elimina o primeiro elemento:")
listaCompras.shift()
console.log(listaCompras)

//Unshift
console.log("UNSHIFT adiciona um ou mais elementos ao início:")
listaCompras.unshift("pimenta do reino")
console.log(listaCompras)