let preco, quantidade
let valorTotal

quantidade = Number (prompt ("Quantidade:"))
preco = Number (prompt("Preço: R$"))

valorTotal = quantidade * preco

console.log ("Valor a receber: R$" + valorTotal.toFixed(2))