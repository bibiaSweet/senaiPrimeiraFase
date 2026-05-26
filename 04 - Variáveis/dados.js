let totalRolagens = 0;

function rolarDado(lados) {
    // Math.random sorteia, Math.floor arredonda pra baixo. 
    // Somamos +1 para não tirar zero no dado.
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