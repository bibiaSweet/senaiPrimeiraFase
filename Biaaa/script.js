function monika (){

let n, chance

n = Number (prompt("Digite o número de vezes (n):"));

chance = (0.1 / (1 + 500 * n)) * 100

// console.log ("Chance de aprovação: " + chance.toFixed(2) + "%")
document.getElementById("resultado03").innerHTML = "Chance de aprovação: " + chance.toFixed(4) + "%"
}


// ======================================================================= // 



function romeroBrique(){
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

function juninSalarioDiario () {

    let salario, dias, salarioDiario 
salario = Number (prompt ("Digite seu salário: "))
dias = Number (prompt ("Digite quantos dias trabalhou no mês:"))
salarioDiario = salario / dias
document.getElementById ("resultado05").innerHTML = "Junin recebe por dia: " + salarioDiario.toFixed(2)

    // ======================================================================= // 

function peba

    let vitorias, empates, pontos
vitorias = Number (prompt ("Digite o número de vitórias: "))
empates = Number (prompt ("Digite o número de empates: "))
pontos = (vitorias * 3) + empates
document.getElementById ("resultado06").innerHTML = "Quantidade de pontos: " +

    // ======================================================================= // 

    function peErnanBuco  () {

let  custos, doacao, dizimo, divida
 
custos = Number (prompt ("Digite os custos:"))
doacao = Number (prompt("Digite as doações:"))
dizimo = Number (prompt ("Digite o valor do dízimo:"))

divida = custos - doacao - dizimo

document.getElementById ("resultado07").innerHTML ="O valor da divída será de: R$" + divida.toFixed (2)}

    // ======================================================================= // 

    function tellesTransportesPeso () {

    let pesoBrutoTotal, tara, pesoDaCarga

pesoBrutoTotal = Number (prompt ("Digite o peso bruto total:"))
tara = Number (prompt ("Digite a tara: "))

pesoDaCarga = pesoBrutoTotal - tara

document.getElementById ("resultado08").innerHTML = "O peso da carga é de: " + pesoDaCarga }

    // ======================================================================= // 
