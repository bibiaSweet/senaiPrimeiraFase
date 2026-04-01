programa {
  funcao inicio() {
    real custos
    real doacao
    real dizimo 
    real divida 
    escreva ("Custo mensal:")
    leia (custos)

    escreva ("Doaçao mensal:")
    leia (doacao)

    escreva ("Dizimo diario:")
    leia (dizimo)

    divida = custos - doacao - dizimo

    escreva ("\nSaldo devedor:" + divida)

  }
}
