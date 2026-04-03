programa {
  funcao inicio() {
    real salario
    real moradia
    real agua
    real luz
    real internet
    real gasolina
    real streamings
    real telefone
    real outros
    escreva ("Salário recebido: R$")
    leia (salario)
    escreva ("Moradia: R$")
    leia (moradia)
    escreva ("Água: R$")
    leia (agua)
    escreva ("Luz: R$")
    leia (luz)
    escreva("Internet: R$")
    leia (internet)
    escreva ("Gasolina: R$")
    leia (gasolina)
    escreva ("Streamings: R$")
    leia (streamings)
    escreva ("Telefone: R$")
    leia (telefone)
    escreva ("Outros: R$")
    leia (outros)
    real saldoFinal
    saldoFinal = salario - (moradia + agua + luz + internet + gasolina + streamings + telefone + outros)
    escreva ("\nO saldo final de seu salário foi de: R$ " + saldoFinal)
    


  }
}
