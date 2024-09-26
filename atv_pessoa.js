//1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: 
//nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

//Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na 
//média calculada. Utilize as seguintes categorias:

//Desempenho excelente: média >= 9
//Bom desempenho: 7.5 <= média entre 7.6 e 8.9
//Desempenho regular: 6 <= média entre 6 e 7.5
//Desempenho insuficiente: média < 6
//Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

//Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

const objPessoas = {
    nome: "Junior Jackson",
    notas: [
        7.5,
        6,
        8
    ],
    somaNotas: 0,
    qntNotas: 0,
    mediaOfc: 0,
    calcularMediaNotas: function(){
        this.notas.forEach(element => {
            this.qntNotas += 1;
            this.somaNotas += element;
            const notasValues = Object.values(this.notas)
        });
        this.mediaOfc = (this.somaNotas/this.qntNotas)

        return this.mediaOfc;
    },
    classificarDesempenho: function(){
        const valorMedia = this.mediaOfc;
        if (valorMedia >= 9){
            console.log(`EXCELENTE (SE APOSENTE): ${valorMedia}`)
        }else if (valorMedia >= 7.6 && valorMedia <= 8.9){
            console.log(`APROVADO: ${valorMedia}`)
        }else if (valorMedia >= 6 && valorMedia <= 7.5){
            console.log(`APROVADO NO LIMITE: ${valorMedia}`)
        }else if (valorMedia < 6){
            console.log(`REPROVADO: ${valorMedia}`)
        }
    }
}
console.log(objPessoas.calcularMediaNotas())
console.log(objPessoas.mediaOfc)
objPessoas.classificarDesempenho()