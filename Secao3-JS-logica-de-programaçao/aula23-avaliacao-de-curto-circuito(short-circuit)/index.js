/* 

&& -> false && true -> false "O valor mesmo" 
|| -> true && false -> Vai retornar "O valor verdadeiro"

Falsy
false
0
'' "" ``
null/undefined
NaN
! -> -> ->
*/

const a = 0
const b = null 
const c = "false" // Aqui
const d = false
const e = NaN

console.log(a || b || "João" || c || d || e)