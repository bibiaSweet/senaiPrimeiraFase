programa {
  funcao inicio() {
    real peso
    real precoPorQuilo = 10
    real precoPorGrama = precoPorQuilo / 1000
    real precoTotal
    escreva ("Digite o peso (g): ")
    leia (peso)
    precoTotal = peso * precoPorGrama
    escreva ("Valor a pagar: R$ " + precoTotal)
  

  }
}
