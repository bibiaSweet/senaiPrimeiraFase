

function monika (){

let n, chance

n = Number (prompt("Digite o número de vezes (n):"));

chance = (0.1 / (1 + 500 * n)) * 100

// console.log ("Chance de aprovação: " + chance.toFixed(2) + "%")
document.getElementById("resultado03").innerHTML = "Chance de aprovação: " + chance.toFixed(4) + "%"
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


document.getElementById("resultado04").innerHTML = "O preço de venda da obra deve ser: R$ " + valorVenda .toFixed(2)

}
// ======================================================================= // 


function guilhermeportões () {

let clt, estagiario, pj, total

clt = Number (prompt ("Número de CLT:"))
estagiario = Number (prompt ("Número de estagiários:"))
pj = Number (prompt ("Número de PJ:"))

total = clt + estagiario + pj
alert ("Número total de Devs: " + total)
document.getElementById ("resultado02").innerHTML = "Número total de Devs: " + total }

// ======================================================================= // 

function verificarProvisoes () {
    let marujos, comida
    let comidaPorMarujo

    marujos = Number (prompt ("Quantidade de marujos:"))
    comida = Number (prompt ("Quilos de comida:"))

    comidaPorMarujo = comida / marujos

    if (marujos >= 10 && comidaPorMarujo >= 1.5) { // ou = ||
        alert ("Provisões suficientes. Rumo ao horizonte!")
        document.getElementById ("resultado01").innerHTML = "Provisões suficientes. Rumo ao horizonte!"


    }else {
        document.getElementById ("resultado01").innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
    } }

    // ======================================================================= // 
