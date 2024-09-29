//--------------------------------------------------------------------------------------------------------------------------------------------------
// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
//
//Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
//
//ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
//ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
//desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: 
//se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
//
//obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
//Em seguida, faça o seguinte:
//
//Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
//Chame o método obterDetalhes e imprima no console a string retornada.


const objCarro1 = {
    marca: "Citron",
    modelo: "B2",
    ano: 2024,
    cor: "Rosa Barbie",
    motorEstaLigado: true,
    ligarMoto: function(){
        if(this.motorEstaLigado == true){
            console.log("Motor já está ligado!");
            return true
        }else{
            this.motorEstaLigado = true;
            console.log("Ligando motor!");
            return true
        }
    },
    desligarMotor: function(){
        if(this.motorEstaLigado == false){
            console.log("Motor já está desligado!");
            return false
        }else{
            this.motorEstaLigado = false;
            console.log("Desligando o motor!");
            return false
        }
    }
}

console.log(objCarro1.ligarMoto())

console.log(objCarro1.desligarMotor())


obterDetalhes = function(objCarro){

    const valoresObj = Object.entries(objCarro)

    for(const [elemento] of Object.entries(valoresObj)){
        console.log(`${valoresObj[elemento][0]} : ${valoresObj[elemento][1]}`)
        
    }
}

console.log("----------------------------INFO CARRO ANTES DA PLACA----------------------------")

obterDetalhes(objCarro1)


//--------------------------------------------------------------------------------------------------------------------------------------------------
//4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, 
//para que ela não seja listada ao percorrer as propriedades do objeto.

//Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

//Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

//Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

objCarro1.placa = "MCU048";
Object.defineProperty(objCarro1, "placa", {
    enumerable: false
})

console.log("----------------------------INFO CARRO DEPOIS DA PLACA----------------------------")

obterDetalhes(objCarro1)

console.log("-------------------------------ACESSAR KEYS DO CARRO-------------------------------")

console.log(Object.keys(objCarro1))

console.log("-------------------------------ACESSAR VALUES DO CARRO-------------------------------")

console.log(Object.values(objCarro1))


//--------------------------------------------------------------------------------------------------------------------------------------------------
//5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
//
//marca (string): marca do novo carro.
//modelo (string): modelo do novo carro.
//ano (number): ano de fabricação do novo carro.
//cor (string): cor do novo carro.
//Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroNovo_2 que herde todas as propriedades do objeto carro 
//e adicione as propriedades do objeto carroNovo.
//
//Imprima no console o objeto carroNovo_2 para verificar as informações do carro com os novos detalhes.
//
//Modifique o valor de uma propriedade no objeto carroNovo_2 e imprima novamente o objeto no console para confirmar as alterações.

const carroNovo = {
    marca: "FIAT",
    modelo: "UNO",
    ano: 2014,
    cor: "Preto",
}

console.log("-------------------------------INFO CARRO NOVO 1.0-------------------------------")
console.log(carroNovo)

const carroNovo_2 = {
    ...carroNovo,
    placa: "UNO999"
}

console.log("-------------------------------INFO CARRO NOVO 2.0 - ANTES DA ADIÇÃO DE INFO------------------------------")
console.log(carroNovo_2)

carroNovo_2.ano = 2019
carroNovo_2.farol = "Formato W"


console.log("-------------------------------INFO CARRO NOVO 2.0 - DEPOIS DA ADIÇÃO DE INFO------------------------------")
console.log(carroNovo_2)

console.log("-------------------------------INFO CARRO NOVO 1.0 - DEPOIS DA ADIÇÃO DE INFO------------------------------")
console.log(carroNovo)

