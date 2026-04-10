programa {
  funcao inicio() {
    real precoTotal
    real lucro
    real custoDenis 
    real horaJuninho 
    inteiro horas 
    escreva (" Quantidade de horas estimadas: ")
    leia (horas)
    escreva ("Valor do rapasse para Denis: R$ ")
    leia (custoDenis)
    escreva ("Valor hora Juninho: R$ ")
    leia (horaJuninho)
    precoTotal = custoDenis + horas * horaJuninho
    escreva ("O valor a cobrar será de: R$ " + precoTotal)
    lucro = precoTotal - custoDenis
    escreva ("\nSeu lucro foi de: R$ " + lucro )
    


  }
}
