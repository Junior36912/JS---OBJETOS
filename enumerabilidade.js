const meuObjeto = {
    nome: "ChatGPT",
    linguagem: "JavaScript",
    versao: "3.5"
  };
  
console.log("--------------------ITENS NO OBJETO-------------------")

for (let chave in meuObjeto) {
    console.log(chave); 
}

console.log("--------------MUDANDO A ENUMERABILIDADE--------------")

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
    value: 2,
    enumerable: true // Definindo a enumerabilidade como true (se false, não enumera e não fica possivel de usar numeração para verificar no item)
});

console.log("--------------VER KEYS--------------")

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto)); 

console.log("--------------VER VALUES--------------")

// Exibindo o valor da propriedade
console.log(meuObjeto.propriedadeNaoEnumeravel);

