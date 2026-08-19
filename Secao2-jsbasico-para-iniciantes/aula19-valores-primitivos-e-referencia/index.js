/* 
Primitivos (imutáveis) - string, number, boolen, undefined
null (bigintt, symbol) - Valores copiados

Referência (mutável) - Array, object, function - Passados por referência
*/

const a = {
    nome: "Izaak",
    sobrenome: "Santos"
}

const b = {...a}

a.nome = "Pedro"
console.log(b)