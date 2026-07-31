/*  */
const nome = "Izaak Nascimento Santos"
const idade = 20
const peso = 55.60
const alturaemM = 1.80
let nascimento
let imc

imc = peso / (alturaemM * alturaemM)
nascimento = 2026 - idade

console.log("Seu nome é:" ,nome)
console.log("Nasceu em:" ,nascimento)
console.log("Sua idade é:" ,idade)
console.log("Seu peso é de:" ,peso+ "Kg")
console.log("Sua altura é de:" ,alturaemM.toFixed(2)+ "cm")
console.log("E seu IMC é de:",imc.toFixed(2))

console.log(nome , "Tem" , idade , "anos, e pesa" ,peso.toFixed(2)+ "Kg" )
console.log(`tem ${alturaemM.toFixed(2)} cm de altura e seu IMC é de ${imc.toFixed(2)}`)