const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log("Obj 'original': ",objPersonagem)

delete objPersonagem.status  // inclusive, isso retorna um "true"

console.log(`Pós remoção dos 'status': `, objPersonagem)


console.log(`O nome do personagem é ${objPersonagem.nome}, da qual pertence a classe ${objPersonagem["classe"]}, aliado aos ${objPersonagem.aliado.nome}`)