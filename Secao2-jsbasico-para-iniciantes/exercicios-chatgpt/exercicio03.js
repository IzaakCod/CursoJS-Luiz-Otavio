/* Exercício — Sistema de Reserva de Hotel

Crie um programa em JavaScript que simule uma reserva de quarto em um hotel.
O programa deve:

Criar uma constante com o nome do hotel.
Criar um objeto com o tipo do quarto, preço da diária e categoria.
Criar um array com pelo menos 4 tipos de quartos disponíveis.
Usar prompt() para perguntar o nome do cliente e quantas diárias ele deseja reservar.
Calcular o valor total da hospedagem.
Aplicar 15% de desconto no valor total.
Usar confirm() para perguntar se o cliente deseja confirmar a reserva.
Se confirmar, mostrar no console.log() o nome do cliente, hotel, quarto, quantidade de diárias, valor total, desconto e valor final.
Se cancelar, informar que a reserva foi cancelada.
Usar Math.round() para arredondar o valor final.
Usar .length para mostrar quantos tipos de quartos estão disponíveis.

Regra: tudo que for criado deve ter alguma funcionalidade no programa. */

const nomeHotel = "Hotel-Compasse"

let caracteristicaHotel = {
    quarto:"405",
    precoDiaria: 100,
    categoria:"Suíti"
}

const quartos = ["Suítisimples", "Suíti-Master", "Quarto simples", "Quarto"]

let quartos1 = 100

let nomecliente = prompt("Qual o seu nome: ")
let quantidadeCliente = parseInt(prompt("Quantas diárias deseja: "))

let valorTotal = caracteristicaHotel.precoDiaria * quantidadeCliente
let valorDesconto = valorTotal * 0.15
let valorFinal = valorTotal - valorDesconto

let resposta = confirm("Deseja concluir a reserva: ")
    if(resposta){
        console.log("Você concluíu sua reserva")
    }
    else{
        console.log("Você cancelou sua reserva")
    }


console.log(nomeHotel)
console.log(`O seu nome é: ${nomecliente}`)
console.log(`O quarto que você está hospedado é o: ${caracteristicaHotel.quarto}`)
console.log(`A quantidade de diárias que você pegou foi de: ${quantidadeCliente}`)
console.log(`O valor da sua hospendagem foi de: ${valorTotal} sem o desconto`)
console.log(`O desconto foi de ${valorDesconto}`)
console.log(`O valor final da sua hospedagem foi ${Math.round(valorFinal)}`)
console.log(`A quatidade de quartos disponíveis são: ${quartos1}`)
console.log(`A quantidade de tipos de quartos disponíveis é: ${quartos.length}`)