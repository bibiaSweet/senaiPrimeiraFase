programa {
  funcao inicio() {
    real frete, peso, distancia, volume
    escreva ("DIGITE O PESO:")
    leia (peso)
    se (peso <= 0) {
        escreva("Valor inválido! O peso deve ser maior que zero.")
      } 
    escreva ("\nDIGITE A DISTÂNCIA:")
    leia (distancia)
    escreva ("\nDIGITE O VOLUME:")
    leia (volume)
    se (peso ou distancia ou volume <= 0) {
        escreva("Valor inválido! O peso deve ser maior que zero.")
      } 
      senao {
        frete=15+(2*peso)+(0.05*distancia)+(10*volume)
        escreva ("\nO valor do frete é de: R$" + frete)


      }

  }
}
