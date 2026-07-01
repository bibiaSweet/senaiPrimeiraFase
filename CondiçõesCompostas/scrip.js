// 1. Estoque do Capitão Ganso
function exercicioGansoProvisoes() {
    let numeroMarujos = Number(prompt("Quantos marujos estão na escuna?"));
    let quantidadeDeComida = Number(prompt("Quantos kg de comida existem no estoque?"));
    let comidaNecessaria = numeroMarujos * 1.5;

    if (numeroMarujos >= 10 && quantidadeDeComida >= comidaNecessaria) {
        alert("Provisões suficientes. Rumo ao horizonte!");
    } else {
        alert("Algo está errado. Posseidom não quer ninguém no mar hoje.");
    }
}

// 2. Recrutamento do Capitão Ganso
function exercicioGansoRecrutamento() {
    let sabeNadar = confirm("O candidato sabe nadar? (OK para Sim / Cancelar para Não)");
    let idade = Number(prompt("Qual a idade do candidato?"));
    let temRecomendacao = confirm("Possui carta de recomendação? (OK para Sim / Cancelar para Não)");

    if (sabeNadar && idade > 16) {
        alert("Aprovado para o navio!");
    } else if (!sabeNadar && temRecomendacao && idade >= 14) {
        alert("Aprovado sob recomendação. Monitorar nas primeiras viagens.");
    } else {
        alert("Reprovado. Volte quando estiver mais preparado para o mar.");
    }
}

// 3. Sarumano e a Máquina de Fumaça
function exercicioFumacaMistica() {
    let criancasPequenas = Number(prompt("Quantas crianças pequenas estão perto do palco?"));
    let velocidadeVento = Number(prompt("Qual a velocidade do vento atual (em m/s)?"));

    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
        alert("Fumaça liberada. Que comecem os mistérios!");
    } else {
        alert("Fumaça blocked. Aguardar condições ideais.");
    }
}

// 4. Sarumano e o Deslocamento
function exercicioDeslocamento() {
    let estaGripado = confirm("Sarumano está gripado? (OK para Sim / Cancelar para Não)");
    let tempoViagem = Number(prompt("Qual o tempo de viagem estimado (em minutos)?"));

    if (!estaGripado && tempoViagem < 45) {
        alert("Viagem autorizada. Rumo ao show!");
    } else {
        alert("Deslocamento inviável. Melhor recusar este evento.");
    }
}

// 5. Sarumano e a Entrada no Palco
function exercicioEntradaPalco() {
    let somFuncionando = confirm("O sistema de som está funcionando?");
    let figurinoCompleto = confirm("O figurino está totalmente completo?");

    if (somFuncionando && figurinoCompleto) {
        alert("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
    } else if (!somFuncionando && figurinoCompleto) {
        alert("Sem som. Realizar apresentação alternativa no salão.");
    } else if (somFuncionando && !figurinoCompleto) {
        alert("Faltando parte do figurino. Te vira no improviso!");
    } else {
        alert("Apresentação cancelada. Hora da mágica de desaparecer…");
    }
}

// 6. Sistema de Transporte Interno
function exercicioTransporteInterno() {
    let emManutencao = confirm("O transporte está em manutenção ativa?");
    let emergenciaAtiva = confirm("O nível de emergência do parque está alto?");

    if (!emManutencao && !emergenciaAtiva) {
        alert("Transporte liberado para uso.");
    } else {
        alert("Transporte indisponível por motivo de segurança.");
    }
}

// 7. Acesso ao Centro de Comando
function exercicioCentroComando() {
    let crachaValido = confirm("O crachá do funcionário é válido?");
    let digitalReconhecida = confirm("A impressão digital foi reconhecida?");

    if (crachaValido && digitalReconhecida) {
        alert("Acesso liberado ao Centro de Comando");
    } else if (!crachaValido && digitalReconhecida) {
        alert("Crachá inválido. Dirija-se à recepção");
    } else if (crachaValido && !digitalReconhecida) {
        alert("Falha na digital. Tente novamente ou chame o suporte");
    } else {
        alert("Acesso negado. Verifique sua identificação.");
    }
}

// 8. Jaulas Automatizadas
function exercicioJaulasAutomatizadas() {
    let visitantesNaArea = Number(prompt("Quantos visitantes estão na área das jaulas?"));
    let horaAtual = Number(prompt("Qual o horário atual? (Digite de 0 a 23)"));

    if (visitantesNaArea === 0 && (horaAtual < 8 || horaAtual > 18)) {
        alert("Liberação autorizada. Abrindo jaula.");
    } else {
        alert("Liberação negada. Área em uso ou fora do horário permitido.");
    }
}