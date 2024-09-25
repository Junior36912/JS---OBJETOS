console.log("------------------REFERENCIAS-------------------------")

const objBobEsponja = {
    nome: "Bob Esponja Calça Quadrada",
    especie: "Esponja-Do-Mar",
    profissão: "cozinheiro"
   }
    
const objLula = objBobEsponja

objLula.nome = "Lula Molusco 7 Membros"
 
console.log(objBobEsponja.nome) //Lula Molusco 7 Membros
console.log(objLula.nome) //Lula Molusco 7 Membros

console.log("------------------COPIA-DE-VARIAVEL--------------------")

let num = 50
let num2 = num
 
num2 = 100
console.log(num) //50
console.log(num2) //100

console.log("------------------COPIA-DE-OBJ-------------------------")

const objGoku = {
    nome: "Goku",
    classe: "lutador",
    nivel: "Deus"
   }
    
   const objVegeta = Object.create(objGoku)
   objVegeta.nome = "Vegeta"
   objVegeta.nivel = "Lutador Especial de Elite"
    
   console.log(objGoku.nome) //Goku
   console.log(objVegeta.nome) //Vegeta