let n, chance

n = Number (prompt("Digite o número de vezes (n):"));

chance = (0.1 / (1 + 500 * n)) * 100

// console.log ("Chance de aprovação: " + chance.toFixed(2) + "%")
alert ("Chance de aprovação: " + chance.toFixed(4) + "%")