const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

console.log("----------------------BUSCAR FUNCIONARIO PELO ID----------------------")

function buscarFuncionario(id) {
    for (let departamento of departamentos) {
        for (let funcionario of departamento.funcionarios) {
            if (funcionario.id === id) {
                console.log("Funcionário encontrado:", funcionario);
                return;
            }
        }
    }
    console.log("Funcionário não encontrado.");
}


const funcionarioId = buscarFuncionario(202)

console.log(funcionarioId)