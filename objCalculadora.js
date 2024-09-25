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
        if (valor1 == 0 || valor2 == 0) {
            return console.log("Existe 0 na operação!");
        } else {
            const total = valor1 / valor2;
            return total;
        }
    }
}

console.log("Soma:", Calculadora.Soma(3, 1));
console.log("Subtração:", Calculadora.Subtracao(3, 1));
console.log("Multiplicação:", Calculadora.Multiplicacao(3, 1));
console.log("Divisão:", Calculadora.Divisao(3, 1));