const Calculadora = {
    Soma: function(valor1, valor2) {
        const total = valor1 + valor2;
        return total;
    },
    Subtracao: function(valor1, valor2) {
        const total = valor1 - valor2;
        return total;
    },
    Multiplicacao: function(valor1, valor2) {
        const total = valor1 * valor2;
        return total;
    },
    Divisao: function(valor1, valor2) {
        if (valor2 === 0) {
            return console.log("Existe 0 na operação!");
        } else {
            const total = valor1 / valor2;
            return total;
        }
    },
    Media: function(lista) {
        const tamanho = lista.length;
        
        if (tamanho === 0) {
            return "Erro: Lista vazia.";
        }

        let somaTotal = 0;

        lista.forEach(item => {
            somaTotal += item;
        });

        const media = somaTotal / tamanho;

        return media;
    }
}

console.log("Soma:", Calculadora.Soma(3, 1));
console.log("Subtração:", Calculadora.Subtracao(3, 1));
console.log("Multiplicação:", Calculadora.Multiplicacao(3, 1));
console.log("Divisão:", Calculadora.Divisao(3, 1));

const l1 = [10, 9, 8, 7];

console.log(Calculadora.Media(l1))