programa {
  funcao inicio() {
    inteiro horas 
    real precoTotal
    real lucro 
    escreva ("Digite a quantidade de horas estimadas: ")
    leia (horas)
    precoTotal = 500 + (horas * 350)
    lucro = precoTotal - 500
    escreva ("Valor total a cobrar do cliente: R$" + precoTotal )
    escreva ("\nLucro do freela: R$ " + lucro)
  



  }
}
