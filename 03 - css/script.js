// ======================================================================= //
// NOVA FUNÇÃO: Faz o efeito de abrir/fechar as seções
// ======================================================================= //
function alternarVisibilidade(idDoGrupo) {
    // Busca a nossa <div> no HTML através do ID ('grupo1' ou 'grupo2')
    let grupo = document.getElementById(idDoGrupo);
    
    // A propriedade classList.toggle funciona como um interruptor de luz:
    // Se a div NÃO TEM a classe 'mostrar-conteudo', ele adiciona (e os botões aparecem).
    // Se a div JÁ TEM a classe 'mostrar-conteudo', ele remove (e os botões somem).
    grupo.classList.toggle("mostrar-conteudo");
}
// ======================================================================= //

function monika() {
    let n, chance
    n = Number(prompt("Digite o número de vezes (n):"));
    chance = (0.1 / (1 + 500 * n)) * 100
    document.getElementById("resultado03").innerHTML = "Chance de aprovação: " + chance.toFixed(4) + "%"
}

// ======================================================================= // 

function romeroBrique() {
    let valorCompra, valorVenda
    valorCompra = Number(prompt("Digite o valor pago pela obra:"))
    valorVenda = valorCompra * 3
    console.log("O preço de venda da obra deve ser: R$ " + valorVenda.toFixed(2))
    alert("O preço de venda da obra deve ser: R$ " + valorVenda.toFixed(2))
    document.getElementById("resultado04").innerHTML = "O preço de venda da obra deve ser: R$ " + valorVenda.toFixed(2)
}

// ======================================================================= // 

function guilhermeportões() {
    let clt, estagiario, pj, total
    clt = Number(prompt("Número de CLT:"))
    estagiario = Number(prompt("Número de estagiários:"))
    pj = Number(prompt("Número de PJ:"))
    total = clt + estagiario + pj
    alert("Número total de Devs: " + total)
    document.getElementById("resultado02").innerHTML = "Número total de Devs: " + total
}

// ======================================================================= // 

function verificarProvisoes() {
    let marujos, comida
    let comidaPorMarujo
    marujos = Number(prompt("Quantidade de marujos:"))
    comida = Number(prompt("Quilos de comida:"))
    comidaPorMarujo = comida / marujos

    if (marujos >= 10 && comidaPorMarujo >= 1.5) {
        alert("Provisões suficientes. Rumo ao horizonte!")
        document.getElementById("resultado01").innerHTML = "Provisões suficientes. Rumo ao horizonte!"
    } else {
        document.getElementById("resultado01").innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
    }
}

// ======================================================================= // 

function juninSalarioDiario() {
    let salario, dias, salarioDiario
    salario = Number(prompt("Digite seu salário: "))
    dias = Number(prompt("Digite quantos dias trabalhou no mês:"))
    salarioDiario = salario / dias
    document.getElementById("resultado05").innerHTML = "Junin recebe por dia: " + salarioDiario.toFixed(2)
}

// ======================================================================= // 

function peba() { 
    let vitorias, empates, pontos
    vitorias = Number(prompt("Digite o número de vitórias: "))
    empates = Number(prompt("Digite o número de empates: "))
    pontos = (vitorias * 3) + empates
    document.getElementById("resultado06").innerHTML = "Quantidade de pontos: " + pontos 
}

// ======================================================================= // 

function peErnanBuco() {
    let custos, doacao, dizimo, divida
    custos = Number(prompt("Digite os custos:"))
    doacao = Number(prompt("Digite as doações:"))
    dizimo = Number(prompt("Digite o valor do dízimo:"))
    divida = custos - doacao - dizimo
    document.getElementById("resultado07").innerHTML = "O valor da divída será de: R$" + divida.toFixed(2)
}

// ======================================================================= // 

// Removi a versão duplicada e deixei a versão mais correta
function verificarIdade() {
    let idade 
    idade = Number(prompt("Digite sua idade:"))
    if (idade >= 18) {
        document.getElementById("resultado09").innerHTML = "Você é maior de idade" 
    } else {
        document.getElementById("resultado09").innerHTML = "Você é menor de idade"
    }
}

// ======================================================================= // 

function pePequeno () {
    let preco, quantidade
    let valorTotal

    quantidade = Number (prompt ("Quantidade:"))
    preco = Number (prompt("Preço: R$"))

    valorTotal = quantidade * preco

    document.getElementById ("resultado11").innerHTML = "Valor a receber: R$" + valorTotal.toFixed(2)
}

// ======================================================================= // 

function trajetoPomar () {
    let inicial, final, total 

    inicial = Number (prompt ("Quantidade inicial de laranjas:"))
    final = Number (prompt ("Quantidade final de laranjas:"))

    total = inicial - final 

    document.getElementById("resultado10").innerHTML = "Total de laranjas vendidas no dia são: " + total
}

// ======================================================================= // 

function adivinharNumero(){
    let numero = Math.ceil(Math.random()*3) // Sorteia entre 1 e 3
    let chute = Number(prompt("Chuta aí (entre 1 e 3):"))
    
    // Agora vai funcionar direitinho porque adicionei o id="resposta" lá no HTML
    let resposta = document.getElementById("resposta");
    
    if(chute == numero){
        resposta.innerHTML = "Acertou!"
    }else{
        resposta.innerHTML = "ERROU! O número era " + numero
    }
}





