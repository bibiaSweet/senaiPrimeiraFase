// ==========================================
// Vendas
// ==========================================
let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    // registrar venda no total
    total = total + valor
    // atualizar total na página
    document.getElementById('totalVendido').innerHTML =  
    'Total de vendas: R$' + total.toFixed(2)

    // lista de vendas
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>'
    
    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()

    console.log(valor)
}

document.getElementById('inputVenda').addEventListener('keyup', tratarTecla)
function tratarTecla(e){
    console.log(e);
    if(e.key == 'Enter'){
        registrarVenda()
    }
}

// ==========================================
// Contagem
// ==========================================
let cont = 0
function incrementarContagem(){
    cont++
    document.getElementById('p-contagem').innerHTML = cont
}

function decrementarContagem(){
    cont--
    document.getElementById('p-contagem').innerHTML = cont
}
function somar10(){
    cont = cont + 10
    document.getElementById('p-contagem').innerHTML = cont
}
function somar2(){
    cont += 2
    document.getElementById('p-contagem').innerHTML = cont
}
function zerarContagem(){
    cont = 0
    document.getElementById('p-contagem').innerHTML = cont
}

// ==========================================
// Variáveis Globais/Locais
// ==========================================
let global = 'Eu sou uma variável global :/'
function funcao1(){
    let local = 'Sou uma variável local :D'
    console.log(local);
    console.log(global);
}
function funcao2(){
    console.log(global);
}

// ==========================================
// Lançador de Dados da Dona Bete
// ==========================================
let totalRolagens = 0;

function rolarDado(lados) {
    let resultado = Math.floor(Math.random() * lados) + 1;
    totalRolagens += resultado; 
    
    document.getElementById('totalDadosText').innerText = totalRolagens;
    document.getElementById('ultimoDadoText').innerText = resultado;
}

function resetarDados() {
    totalRolagens = 0; 
    
    document.getElementById('totalDadosText').innerText = totalRolagens;
    document.getElementById('ultimoDadoText').innerText = '-';
}