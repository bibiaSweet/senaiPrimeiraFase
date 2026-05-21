const listaDinos = ["Espinossauro", "T-Rex", "Braquiossauro", "Velocirraptor", "Estegossauro", "Triceratopo", "Anquilossauro", "Parassaurolofo", "Alossauro", "Carnotauro"];

let arrecadacaoDino = 0;
let limitePremiosDino = 500; // O caixa quebra depois de 500 reais em prêmios
let totalPagoDino = 0;

function escolherDinoAleatorio() {
    let indice = Math.floor(Math.random() * listaDinos.length);
    document.getElementById('dinoEscolhido').value = listaDinos[indice];
    alert("A máquina escolheu: " + listaDinos[indice]);
}

function jogarDino() {
    let valor = Number(document.getElementById('valorApostaDino').value);
    let palpite = document.getElementById('dinoEscolhido').value;
    
    if (valor <= 0) {
        alert("Bota um dinheiro de verdade aí!");
        return;
    }

    arrecadacaoDino += valor;
    let premioPotencial = valor * 2;
    let dinoSorteado = listaDinos[Math.floor(Math.random() * listaDinos.length)];
    
    document.getElementById('txtSeuDino').innerText = palpite;

    // A MÁGICA DA DONA BETE (Regras de negócio)
    let acertou = (palpite === dinoSorteado);

    // Regra 2: Limite geral de prêmios
    if (acertou && (totalPagoDino + premioPotencial > limitePremiosDino)) {
        acertou = false; // Força o erro silenciosamente
    }
    
    // Regra 1: Prêmio não pode ser maior que 20% do arrecadado
    if (acertou && (premioPotencial > (arrecadacaoDino * 0.20))) {
        // A máquina rouba e troca o sorteio
        let novoSorteio;
        do {
            novoSorteio = listaDinos[Math.floor(Math.random() * listaDinos.length)];
        } while (novoSorteio === palpite); // Garante que não é o que o jogador escolheu
        dinoSorteado = novoSorteio;
        acertou = false;
        console.log("Dona Bete interviu no sorteio."); // Só os devs veem a maracutaia
    }

    document.getElementById('txtDinoSorteado').innerText = dinoSorteado;
    let btn50x = document.getElementById('btnChance50x');

    if (acertou) {
        document.getElementById('resultadoDino').innerText = `GANHOU! Você levou R$${premioPotencial.toFixed(2)}`;
        document.getElementById('resultadoDino').style.color = "#4ade80";
        totalPagoDino += premioPotencial;
        btn50x.style.display = "inline-block"; // Regra 4: Mostra botão 50x
    } else {
        document.getElementById('resultadoDino').innerText = "PERDEU! O dinheiro é da casa.";
        document.getElementById('resultadoDino').style.color = "#ef4444";
        btn50x.style.display = "none";
    }
}

function verificarCaixaBete() {
    let senha = prompt("Senha da gerência:");
    if (senha === "0171") {
        alert(`Relatório Dona Bete:\nArrecadado: R$${arrecadacaoDino.toFixed(2)}\nPago: R$${totalPagoDino.toFixed(2)}\nLucro: R$${(arrecadacaoDino - totalPagoDino).toFixed(2)}`);
    } else {
        alert("Você ganhou uma rodada grátis kkkkkkkk"); // Engana o tonto
    }
}

function chance50x() {
    alert("Rodando a roleta da fortuna...\n... \n... \nAh que pena! Você não tirou o Dino Dourado. Perdeu o prêmio e a aposta.");
    document.getElementById('btnChance50x').style.display = "none";
}