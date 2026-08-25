/* Exercício — Sistema de Pedido de Lanchonete

Crie um programa em JavaScript que simule um pedido em uma lanchonete.
O programa deve:
Criar uma constante com o nome da lanchonete.
Criar um objeto com nome, preço e categoria de um produto.
Criar um array com pelo menos 4 produtos do cardápio.
Usar prompt() para perguntar qual produto o cliente deseja e a quantidade.
Calcular o valor total da compra.
Aplicar 10% de desconto no valor total.
Usar confirm() para confirmar o pedido.
Se confirmado, mostrar no console.log() os dados do pedido, incluindo produto, categoria, quantidade, valor e desconto.
Se cancelado, informar que o pedido foi cancelado.
Usar Math.round() para arredondar o valor final.
Usar .length para mostrar quantos produtos existem no cardápio.

Regra: tudo que for criado deve ter alguma funcionalidade no programa. */

const nomeLanchonete = "Cunhados Burguer"


let descricaoProduto = {
    nome:"",
    preco:15,
    categoria:"Lanches"
}

const produto = ["Pastel", "Coxinha", "Hamburguer", "Pizza"]


let cliente = prompt("Qual o produto que vc deseja: ")
let cliente1 = parseInt(prompt("E qual a quantidade: "))

let resposta = confirm("Deseja concluir o pedido: ")
    if(resposta){
        console.log("Você concluíu seu pedido.")
}
else{
    console.log("Você cancelou seu pedido.")
}


let valorCompra = cliente1 * descricaoProduto.preco
let valorDesconto = valorCompra * 0.10
let valorFinal = valorCompra - valorDesconto

console.log(nomeLanchonete)
console.log(`O produto que você escolheu foi: ${cliente}`)
console.log(`A categoria do seu produto é: ${descricaoProduto.categoria}`)
console.log(`A quantidade de lanches foi: ${cliente1}`)
console.log(`O valor da sua compra foi de: ${valorCompra}`)
console.log(`O desconto foi de: ${valorDesconto}`)
console.log(`E o valor com desconto de 10% foi de:  ${Math.round(valorFinal)}`)
console.log(produto.length)