let varA = "A"
let varB = "B"
let varC = "C"
let vC

//Primeira forma de resolver
vC = varA
varA = varB
varB = varC 
varC = vC

//Segunda forma de resolver
[varA, varB, varC] = [varB, varC, varA]

[varA, varB, varC] = ["B","C", "A"]


console.log(varA, varB, varC)