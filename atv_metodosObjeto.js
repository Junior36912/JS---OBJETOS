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
//--------------------------------------------------------------------------------------------------------------------------------------------------
//4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, 
//para que ela não seja listada ao percorrer as propriedades do objeto.
//
//Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
//
//Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
//
//Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
//--------------------------------------------------------------------------------------------------------------------------------------------------
//5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
//
//marca (string): marca do novo carro.
//modelo (string): modelo do novo carro.
//ano (number): ano de fabricação do novo carro.
//cor (string): cor do novo carro.
//Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro 
//e adicione as propriedades do objeto carroNovo.
//
//Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
//
//Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.