let frete, peso, distancia, volume

peso = Number (prompt ("Digite o peso:"))
distancia = Number (prompt ("Digite o distancia:"))
volume = Number (prompt ("Digite a volume:"))
frete = (15+ (2*peso) + (0.05 * distancia) + (10 * volume))
console.log (" O valor do frete é de: R$" + frete.toFixed (2))
