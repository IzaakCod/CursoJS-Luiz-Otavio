// Capturar evento de submit do formulário 

const form = document.querySelector("#form")


form.addEventListener("submit", function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")

const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)

console.log(peso, altura)

})


function criaP() {
    const p = document.createElement("p")
    return p 
}


function setResultado(msg) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""
    const p = criaP()


    resultado.appendChild(p)
}

/* let peso = Number(prompt("Qual o seu peso: "))
let altura = Number(prompt("Qual a sua altura: "))

let imc = peso / (altura * altura)
if(imc < 18,5){
}
else if(imc > 18,5 && imc < 24,9){

}
else if(imc > 25 &&  imc < 29,9){
    
}
else if(imc > 30 && imc < 34,9){

}
else if(imc > 35 && imc < 39,9){

}
else{

} */