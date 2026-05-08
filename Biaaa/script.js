const parametrosUrl = new URLSearchParams(window.location.search);
const mesAtual = parametrosUrl.get('mes') || 'Janeiro';
const chaveStorage = `transacoes_${mesAtual}`;

document.getElementById('titulo-mes').innerText = `Controle de ${mesAtual}`;
document.getElementById('label-mes-sidebar').innerText = `Mês: ${mesAtual}`;

let transacoes = JSON.parse(localStorage.getItem(chaveStorage)) || [];

const formatarMoeda = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function atualizarUI() {
    const lista = document.getElementById('lista-transacoes');
    lista.innerHTML = '';

    let totalInc = 0, totalExp = 0;

    transacoes.forEach(t => {
        if(t.tipo === 'receita') totalInc += t.valor;
        else totalExp += t.valor;

        const li = document.createElement('li');
        li.className = t.tipo === 'receita' ? 'receita-item' : 'despesa-item';
        li.innerHTML = `
            <div>
                <strong>${t.descricao}</strong><br>
                <small>${new Date().toLocaleDateString()}</small>
            </div>
            <span>${formatarMoeda(t.valor)}</span>
            <button class="btn-remove" onclick="remover(${t.id})"><i class="fa-solid fa-trash-can"></i></button>
        `;
        lista.appendChild(li);
    });

    document.getElementById('receitas').innerText = formatarMoeda(totalInc);
    document.getElementById('despesas').innerText = formatarMoeda(totalExp);
    document.getElementById('saldo').innerText = formatarMoeda(totalInc - totalExp);
    
    localStorage.setItem(chaveStorage, JSON.stringify(transacoes));
}

document.getElementById('formulario').addEventListener('submit', e => {
    e.preventDefault();
    const desc = document.getElementById('descricao').value;
    const val = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    transacoes.push({ id: Date.now(), descricao: desc, valor: val, tipo: tipo });
    atualizarUI();
    e.target.reset();
});

function remover(id) {
    transacoes = transacoes.filter(t => t.id !== id);
    atualizarUI();
}

atualizarUI();