let  custos, doacao, dizimo, divida
 
custos = Number (prompt ("Digite os custos:"))
doacao = Number (prompt("Digite as doações:"))
dizimo = Number (prompt ("Digite o valor do dízimo:"))

divida = custos - doacao - dizimo

console.log ("O valor da divída será de: R$" + divida.toFixed (2) )