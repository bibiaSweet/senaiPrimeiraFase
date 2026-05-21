let total = 0;

function registrarVenda() {
    let input = document.getElementById('inputVenda');
    let valor = Number(input.value);

    if (valor <= 0) {
        alert("Mano Juca não faz caridade! Digite um valor válido.");
        return;
    }

    // Variável global
    total += valor;
    
    // Variável local
    let formatado = valor.toFixed(2);

    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + total.toFixed(2);
    document.getElementById('listaVendas').innerHTML += `Venda registrada: R$${formatado} <br>`;
    
    input.value = '';
    input.focus();
}

// Permite cadastrar apertando a tecla Enter no teclado
document.getElementById('inputVenda').addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        registrarVenda();
    }
});