/* Exercício — Cadastro de Produto

Crie um programa em JavaScript que simule o cadastro de um produto.

O programa deve:

Criar variáveis para nome, preço, quantidade e categoria.
Calcular o preço com 10% de desconto.
Calcular o valor total do estoque.
Usar Math para arredondar os valores.
Criar um objeto com os dados do produto.
Criar um array com pelo menos 3 produtos.
Usar prompt() para receber nome, preço e quantidade.
Usar confirm() para confirmar o cadastro.
Exibir todas as informações usando console.log().
Criar uma função para exibir o resumo do produto. */


const nomeLoja = "TechExpress"

let nome = prompt("Escolha um produto da parte de eletrônica: ")
let preco =  Number(prompt("Qual o preço do produto: "))
let quantidade1 = Number(prompt("Qual a quantidade: "))
let estoque = 100


let resposta = confirm("Deseja mesmo cadastrar os dados: ")

if(resposta){
    console.log("O usuário confirmou a ação.")
}
else{
    console.log("O usuário cancelou a ação.")

}

let valordosProdutos = preco * quantidade1
let precoDesconto = valordosProdutos *0.10 
let precofinal = valordosProdutos - precoDesconto
let quantEstoque =  estoque - quantidade1
let valorEstoque = preco * quantEstoque


const produto = {
    nome: "Teclado",
    preco: 56, 
    quantidade: 100, 
    categoria:"Periféricos"
}



let produtos = ["Celular", "Televisão", "Notebook"]


console.log("Loja: " ,nomeLoja)
console.log("Produto: ", nome)
console.log(produto.categoria)



console.log("O valor do seu produto é R$: ", Math.round(preco))
console.log("O valor total de acordo com a quantidade comprada é: " ,valordosProdutos)
console.log("O valor do seu produto com desconto é R$: " ,precofinal)

console.log("A quantidade que você tem em estoque é: " ,quantEstoque)
console.log("O valor que você tem em estoque é R$: " ,Math.round(valorEstoque))
console.log("Quantos produtos a no Array: " ,produtos.length)