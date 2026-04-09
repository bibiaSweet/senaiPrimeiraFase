programa {
  funcao inicio() {
    real peso
    real altura
    real imc
    escreva ("Digite seu peso: ")
    leia (peso)
    escreva ("Digite sua altura: ")
    leia (altura)
        imc = peso / (altura * altura)

    se(imc >= 25){
      escreva ("Seu IMC ESTA ABAIXO DE 25")


    }

  }
}
