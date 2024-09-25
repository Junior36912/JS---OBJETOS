const Banco = {
    Titular: "Junior",
    Saldo: 100,
    Depositar: function(valor_deposito) {
        this.Saldo += valor_deposito;
        console.log(`Depósito de R$${valor_deposito} realizado. Saldo atual: R$${this.Saldo}`);
    },
    Sacar: function(valor_saque) {
        if (valor_saque > this.Saldo){
            console.log(`Saque de R$${valor_saque} não realizado. Saldo atual: R$${this.Saldo}`);
        } else{
            this.Saldo -= valor_saque;
            console.log(`Saque de R$${valor_saque} realizado. Saldo atual: R$${this.Saldo}`);
        }
        
    }
}

const Cliente = {
    Nome: "Junior",
    Conta: Banco
}

console.log("--------------------------CLIENTE LOG BRUTO----------------------------")

console.log(Cliente);

console.log("--------------------------DEPOSITO DE 100----------------------------")


Cliente.Conta.Depositar(100)

console.log("---------------------------SAQUE DE 100------------------------------")

Cliente.Conta.Sacar(100)

console.log("---------------------------SAQUE DE 100------------------------------")

Cliente.Conta.Sacar(100)

console.log("---------------------------SAQUE DE 100------------------------------")

Cliente.Conta.Sacar(100)

console.log("---------------------------SAQUE DE 100------------------------------")


function mostrarInfoClientes(Cliente) {
    console.log(`O Cliente ${Cliente.Conta.Titular} tem o saldo de R$${Cliente.Conta.Saldo}`);
}

console.log("---------------------------INFO CLIENTE------------------------------")

mostrarInfoClientes(Cliente)

console.log("-------------------------------FIM-----------------------------------")