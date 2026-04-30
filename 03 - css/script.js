

function monika (){

let n, chance

n = Number (prompt("Digite o número de vezes (n):"));

chance = (0.1 / (1 + 500 * n)) * 100

// console.log ("Chance de aprovação: " + chance.toFixed(2) + "%")
alert ("Chance de aprovação: " + chance.toFixed(4) + "%")
}


// ======================================================================= // 



function calcularPrecoBrique(){
// infos
let valorCompra, valorVenda

//leituras
valorCompra = Number (prompt ("Digite o valor pago pela obra:"))

//processamentos
valorVenda = valorCompra * 3 

//saidas
console.log ("O preço de venda da obra deve ser: R$ " + valorVenda .toFixed(2))
alert ("O preço de venda da obra deve ser: R$ " + valorVenda .toFixed(2))


document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed (2)

}

function guilhermeportões () {

let clt, estagiario, pj, total

clt = Number (prompt ("Número de CLT:"))
estagiario = Number (prompt ("Número de estagiários:"))
pj = Number (prompt ("Número de PJ:"))

total = clt + estagiario + pj

console.log ("Número total de Devs: " + total) }