/* Operadores Aritméticos
// + Adição/ Concatenação(Concatenar é unir dois valores)
// - Subtração
// * Multiplicação
// ** Potenciação
// / Divisão
// % Resto da divisão (Conhecido como módulo)

// OPERADOR DE ATRIBUIÇÃO
// = Atribuição simples.  x = 10                 x passa a valer 10
// +=  Soma e atribui.    x += 5 → x = x + 5     Se x=10, vira 15
// -= Subtração e atribui.  x -= 3 → x = x - 3   Se x=10, vira 7
// *= Multiplica e atribui.  x *= 2 → x = x * 2  Se x=10, vira 20
// /= Divide e atribui.   x /= 2 → x = x / 2     Se x=10, vira 20
// %= Módulo e atribui.	 x %= 3 → x = x % 3      Se x=10, vira 1
// **= Potência e atribui.	x **= 2 → x = x ** 2    Se x=4, vira 16
// <<= Shift left	x <<= 1 → desloca bits para esquerda    Se x=2 (10 binário), vira 4
// >>= Shift right	x >>= 1 → desloca bits para direita     Se x=4 (100 binário), vira 2
// &= AND bit a bit	x &= y      Faz operação AND entre bits
// ` =`	OR bit a bit    `x    = y`	Faz operação OR entre bits
// ^= XOR bit a bit	x ^= y  Faz operação XOR entre bits
//EXEMPLO PRÁTICOS 
let a = 10;
a += 2;   // 12
a -= 4;   // 8
a *= 3;   // 24
a /= 6;   // 4
a %= 3;   // 1
a **= 3;  // 1 ** 3 = 1

// NaN - Not a number  parseInt(Inteiro), parseFloat(Decimais)
const num1 = 10
const num2 = "Izaak"
console.log(num1 * num2)

// ++ Incremetação (Pode ser tanto pré como pós variável(no pré primeiro ele faz a conta, 
// e depois retorna o valor para gente). (Já o pós ele executa primeiro
// a ação que a gente pediu pra executar, e depois ele faz o incremento do valor!!!!)

// -- Decremento

// ORDEM DE COMO SERÁ EXECUTADO OS OPERADORES //

// () Tudo que estever dentro dos
      parentêses, será executado primeiro 
// ** Potenciação
// * / % Multiplicação, divisão e módulo
// + - Adição e subtração
*/

/* const num1 = 10
const num2 = 8
const num3 = 2
console.log(num1 + num2 * num3) */



let cont = 10
let cont1 = 5
console.log(cont1 ** cont)
