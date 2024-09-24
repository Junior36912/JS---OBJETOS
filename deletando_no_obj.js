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
