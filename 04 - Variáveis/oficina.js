let totalBruto = 0;
let repasseCelso = 0;
let caixaSeguradora = 0;
let caixaSandro = 0;
let contagemClientes = 0;

function registrarServico() {
    let valorBase = Number(document.getElementById('valorServico').value);
    let isSeguradora = document.getElementById('checkSeguradora').checked;
    let isCelso = document.getElementById('checkCelso').checked;

    if (valorBase <= 0) return alert("Insira um valor válido.");

    contagemClientes++;
    let valorCobrado = valorBase;
    let repasseDestaVenda = 0;

    // Regra da Seguradora (Sobrescreve tudo)
    if (isSeguradora) {
        valorCobrado = valorBase * 0.70; // Desconto de 30%
        caixaSeguradora += valorCobrado;
        caixaSandro += valorCobrado; // Tudo pro Sandro, nada pro Celso
        alert(`Serviço de Seguradora. Valor cobrado: R$${valorCobrado.toFixed(2)}`);
    } else {
        // Regra do 10º cliente (Desconto de 5%)
        if (contagemClientes % 10 === 0) {
            valorCobrado = valorBase * 0.95;
            alert(`Cliente 10X! Desconto de 5% aplicado. Valor: R$${valorCobrado.toFixed(2)}`);
        }

        // Regra do Seu Celso
        if (isCelso) {
            repasseDestaVenda = valorCobrado * 0.10;
            repasseCelso += repasseDestaVenda;
        }
        
        caixaSandro += (valorCobrado - repasseDestaVenda);
    }

    totalBruto += valorCobrado;

    // Atualiza a tela
    document.getElementById('txtNumClientes').innerText = contagemClientes;
    document.getElementById('txtBruto').innerText = totalBruto.toFixed(2);
    document.getElementById('txtRepasse').innerText = repasseCelso.toFixed(2);
    document.getElementById('txtSeguradora').innerText = caixaSeguradora.toFixed(2);
    document.getElementById('txtSandro').innerText = caixaSandro.toFixed(2);

    // Limpa o campo
    document.getElementById('valorServico').value = '';
    document.getElementById('checkSeguradora').checked = false;
    document.getElementById('checkCelso').checked = false;
}