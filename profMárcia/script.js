// // // let i = 0;

// // // while (i<=10) {
// // //     console.log (i);
// // //     i++;
// // // }

// // // for (let i = 1;) 


// // // contagem regressiva

// // // let i = 10;

// // // while (i >= 1) {
// // //     console.log(i)
// // //     i--;
// // // }

// // for (let i = 10; i >= 1; i--){
// //     console.log(i)
// // }


// // contagem de dois em dois

// for(let i = 0; i <=20; i+=2){
//     console.log(i)
// }



function mostrarResultado(texto) {
document.getElementById("resultado").innerText = texto;
}

function exercicio1() {
let soma1 = 0;
for (let i = 1; i <= 10; i++) {
soma1 += i;
}
mostrarResultado("A soma dos números de 1 até 10 é: " + soma1);
}

function exercicio2() {
let resultado = "Tabuada do 5:\n";
for (let i = 1; i <= 10; i++) {
resultado += `5 x ${i} = ${5 * i}\n`;
}
mostrarResultado(resultado);
}    

function exercicio3() {
let resultado = "Quadrado dos números de 1 a 10:\n";
for (let i = 1; i <= 10; i++) {
resultado += `${i}² = ${i * i}\n`;
}
mostrarResultado(resultado);
}

function exercicio4() {
let palavra = "JavaScript";
let resultado = "";
for (let i = 0; i < palavra.length; i++) {
resultado += palavra[i] + "\n";
}
mostrarResultado(resultado);
}

function exercicio5() {  
let resultado = "Múltiplos de 3 entre 1 e 30:\n";
for (let i = 3; i <= 30; i += 3) {
resultado += i + "\n";
}
mostrarResultado(resultado);
}

function exercicio6() {
let asteriscos = "";
for (let i = 0; i < 10; i++) {
asteriscos += "*";
}
mostrarResultado("Imprimindo 10 asteriscos:\n" + asteriscos);
}

function exercicio7() {
let somaPares = 0;
for (let i = 2; i <= 20; i += 2) {
somaPares += i;
}
mostrarResultado("A soma dos números pares entre 1 e 20 é: " + somaPares);
}

function exercicio8() {
let resultado = "Números de 0 a 50 (de 5 em 5):\n";
for (let i = 0; i <= 50; i += 5) {
resultado += i + " ";
}
mostrarResultado(resultado);
}

function exercicio9() {
let resultado = "";
for (let i = 0; i < 8; i++) {
resultado += "Olá!\n";
}
mostrarResultado(resultado);
}

function exercicio10() {
let somaImpares = 0;
for (let i = 1; i <= 15; i += 2) {
somaImpares += i;
}
mostrarResultado("A soma dos números ímpares entre 1 e 15 é: " + somaImpares);
}

function exercicio12() {
let resultado = "";
let sequencia = "";
for (let i = 1; i <= 5; i++) {
sequencia += i;
resultado += sequencia + "\n";
}
mostrarResultado(resultado);
}

function exercicio13() {
let fatorial = 1;
for (let i = 1; i <= 5; i++) {
fatorial *= i;
}
mostrarResultado("O fatorial de 5 (5!) é: " + fatorial);
}

function exercicio14() {
let textoTeste = "desenvolvimento";
let contadorDeO = 0;

for (let i = 0; i < textoTeste.length; i++) {
if (textoTeste[i].toLowerCase() === "o") {
contadorDeO++;
}
}
mostrarResultado(`A palavra "${textoTeste}" tem ${contadorDeO} letras 'o'.`);
}

function gerarRelatorioSprint() {
let totalConcluidas = 0;
let totalIncompletas = 0;
let relatorioTexto = "";

let diasSprint = Number(prompt("Quantos dias possui a Sprint?"));

for (let i = 1; i <= diasSprint; i++) {
        
let concluidasDia = Number(prompt("Dia " + i + ": Quantas tarefas foram concluídas?"));
let incompletasDia = Number(prompt("Dia " + i + ": Quantas tarefas ficaram incompletas?"));

totalConcluidas += concluidasDia;
totalIncompletas += incompletasDia;

relatorioTexto += "Dia " + i + ": " + concluidasDia + " concluída(s) | " + incompletasDia + " incompleta(s)\n";
}

 relatorioTexto += "\nRelatório Final da Sprint\n";
 relatorioTexto += "Total de tarefas concluídas: " + totalConcluidas + "\n";
 relatorioTexto += "Total de tarefas incompletas: " + totalIncompletas;

 mostrarResultado(relatorioTexto);
}

function gerarRelatorioBugs() {
let diasSprint = Number(prompt("Quantos dias teve a Sprint?"));
    
let totalBugs = 0;
let relatorioTexto = "RELATÓRIO DE BUGS\n";
    
let maiorBugs = 0;
let menorBugs = 0;
let diaMaisBugs = 0;
let diaMenosBugs = 0;
    
let diasMaisDe10Bugs = 0;
let diasSemBugs = 0;

for (let i = 1; i <= diasSprint; i++) {
let bugsDia = Number(prompt("Dia " + i + ": Quantos bugs foram encontrados?"));
        
relatorioTexto += "Dia " + i + ": " + bugsDia + " bugs\n";
totalBugs += bugsDia;
        
if (i === 1) {
maiorBugs = bugsDia;
menorBugs = bugsDia;
diaMaisBugs = i;
diaMenosBugs = i;
} else {
if (bugsDia > maiorBugs) {
maiorBugs = bugsDia;
diaMaisBugs = i;
}
if (bugsDia < menorBugs) {
menorBugs = bugsDia;
diaMenosBugs = i;
}
}
        
if (bugsDia > 10) {
diasMaisDe10Bugs++;
}
        
if (bugsDia === 0) {
diasSemBugs++;
 }
}

let mediaBugs = totalBugs / diasSprint;

relatorioTexto += "--------------------\n";
relatorioTexto += "Total de bugs: " + totalBugs + "\n";
relatorioTexto += "Média de bugs: " + mediaBugs + "\n";
relatorioTexto += "Maior quantidade de bugs: " + maiorBugs + "\n";
relatorioTexto += "Dia com mais bugs: " + diaMaisBugs + "\n";
relatorioTexto += "Menor quantidade de bugs: " + menorBugs + "\n";
relatorioTexto += "Dia com menos bugs: " + diaMenosBugs + "\n";
relatorioTexto += "Dias com mais de 10 bugs: " + diasMaisDe10Bugs + "\n";
 relatorioTexto += "Dias sem bugs: " + diasSemBugs;

document.getElementById("relatorioBugsTextarea").value = relatorioTexto;
}