//2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

//marca (string): marca do carro.
//modelo (string): modelo do carro.
//ano (number): ano de fabricação do carro.
//cor (string): cor do carro.
//Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

//Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

//Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o 
//nome da propriedade e o seu valor.

const objCarro1 = {
    marca: "Citron",
    modelo: "B2",
    ano: 2024,
    cor: "Rosa Barbie"
}

console.log("------------------------FUNÇÃO InfoCarro-------------------------")

infoCarro = function(objCarro){

    const valoresObj = Object.entries(objCarro)

    for (const [key] of Object.entries(valoresObj)){
        console.log(`${valoresObj[key][0]} : ${valoresObj[key][1]}`)
    };
}

console.log("-----------------------ORIGINAL InfoCarro------------------------")

infoCarro(objCarro1)

objCarro1.roprietario = "Junior Jackson";
objCarro1.kmRodados = 100;

console.log("-------------FUNÇÃO InfoCarro PÓS ALTERAÇÃO DO OBJ---------------")

infoCarro(objCarro1)
