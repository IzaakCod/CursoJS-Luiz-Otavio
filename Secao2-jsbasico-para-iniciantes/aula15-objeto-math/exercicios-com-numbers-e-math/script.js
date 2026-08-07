const numero = Number(prompt("Digite um número: "))
// numero = Number(numero) Assim converte de string para número
const numeroTitulo = document.getElementById("numero-titulo")
// Primeira forma de fazer o exercício
const texto = document.getElementById("texto")

//Segunda forma de fazer o exercício
const raiz = document.getElementById("raiz")
const inteiro = document.getElementById("inteiro")
const e = document.getElementById("é")
const baixo = document.getElementById("baixo")
const cima = document.getElementById("cima")
const decimais = document.getElementById("decimais")

// Primeira forma de fazer o exercício
numeroTitulo.innerHTML = numero
texto.innerHTML = " "
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${numero ** 0.5} </p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
e.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arrendonda para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arrendonda para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p>`

// Segunda forma de fazer o exercício

numeroTitulo.innerHTML = numero
texto.innerHTML = " "
raiz.innerHTML = `<p>A raiz quadrada do seu número é: ${numero ** 0.5} </p>`
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
e.innerHTML = `<p>É NaN ${Number.isNaN(numero)}</p>`
baixo.innerHTML = `<p>Arrendonda para baixo: ${Math.floor(numero)}</p>`
cima.innerHTML = `<p>Arrendonda para cima: ${Math.ceil(numero)}</p>`
decimais.innerHTML = `<p>Com duas casa decimais: ${numero.toFixed(2)}</p>`
