/* Exercício — Sistema de Compra
Crie um programa em JavaScript que simule a compra de um produto em uma loja de eletrônicos.
O programa deve:
Criar uma constante com o nome da loja.
Criar um objeto com nome, preço, categoria e estoque do produto.
Criar um array com pelo menos 5 produtos.
Usar prompt() para receber nome do cliente, produto escolhido e quantidade.
Calcular o valor da compra.
Aplicar 15% de desconto.
Diminuir a quantidade comprada do estoque.
Calcular o valor do estoque restante.
Usar confirm() para confirmar a compra.
Se confirmado, mostrar todas as informações da compra no console.log().
Se cancelado, informar que a compra foi cancelada.
Usar Math.round() nos valores finais.
Usar .length para mostrar quantos produtos existem no array. */

const nomeLoja = "Tequinologia"

const caracteristicaProduto = {
    nome: "",
    preco: 59,
    categoria: "Eletrônicos",
    estoque: 100
}

let produtos = ["Mouse",  "Teclado", "Fone", "HD", "SSD"]
alert(`Quais desses produtos você deseja comprar : ${produtos.join("\n")}`)

let nomeCliente = prompt("Qual o seu nome: ")
let clienteProduto = prompt("Qual produto deseja: ")
let clienteQuantidade = parseInt(prompt("Qual a quantidade de produtos: "))

let valorCompra = clienteQuantidade * caracteristicaProduto.preco
let desconto = valorCompra * 0.15
let valorFinal = valorCompra - desconto

let quantidadeEstoque = caracteristicaProduto.estoque - clienteQuantidade
let valorEstoque = quantidadeEstoque * caracteristicaProduto.preco

let resposta = confirm("Deseja concluir seu pedido: ")
if (resposta) {
    console.log("Seu pedido foi confirmado")
}
else{
    console.log("Seu pedido foi cancelado")
}

console.log(nomeLoja)
console.log(`Seu nome é: ${nomeCliente}`)
console.log(`O produto que você comprou foi: ${clienteProduto}`)
console.log(`A quantidade de itens foi de: ${clienteQuantidade}`)
console.log(`O valor da sua compra foi de: ${valorCompra}`)
console.log(`O deconto foi de: ${desconto}`)
console.log(`E o valor final de sua compra já com o desconto aplicado foi de: ${Math.round(valorFinal)}`)
console.log(`A quantidade que ficou no estoque foi de: ${quantidadeEstoque}`)
console.log(`E o valor do estoque é de: ${Math.round(valorEstoque)}`)
console.log(produtos.length)