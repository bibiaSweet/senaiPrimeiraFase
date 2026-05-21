let cont = 0;

function atualizarTela() {
    document.getElementById('p-contagem').innerHTML = cont;
}

function incrementarContagem() {
    cont++;
    atualizarTela();
}

function decrementarContagem() {
    if(cont > 0) cont--; // Trava para não ler página negativa
    atualizarTela();
}

function somar10() {
    cont += 10;
    atualizarTela();
}

function somar2() {
    cont += 2;
    atualizarTela();
}

function zerarContagem() {
    cont = 0;
    atualizarTela();
}