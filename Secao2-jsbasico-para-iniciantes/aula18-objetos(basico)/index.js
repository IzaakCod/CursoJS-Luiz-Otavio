/* function criaPessoa(nome, sobrenome, idade){ //parâmetro
    return {nome, sobrenome, idade}
}
const pessoa1 = criaPessoa("Izaak", "Otávio", 20) // Argumento, que é enviado para o parâmetro
const pessoa2 = criaPessoa("Davi", "Otávio", 23)
const pessoa3 = criaPessoa("Laura", "Otávio", 69)
const pessoa4 = criaPessoa("Lady", "Otávio", 58)
const pessoa5 = criaPessoa("Flávia", "Otávio", 25)


console.log(pessoa1.sobrenome, pessoa2.nome) */

const pessoa1 = {
    nome: "Izaak",
    sobrenome: "Santos",
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()