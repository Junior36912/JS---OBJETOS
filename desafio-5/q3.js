const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

console.log("----------------------FILTRAR PELO PRECO DE 0 ATÉ MAXIMO----------------------")

function filtrarPeloPreco(lista, valorMaximo){
    const listaNova = lista.filter((produto) => produto.preco <= valorMaximo)
    return listaNova;
}

const listaProdutoPreco = filtrarPeloPreco(listaProdutos, 50)

console.log(listaProdutoPreco)