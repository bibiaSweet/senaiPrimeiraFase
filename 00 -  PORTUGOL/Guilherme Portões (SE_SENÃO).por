programa {
  funcao inicio() {
    real clt
    real estagiarios
    real pj 
    real total 
    escreva ("Digite quantidade clt:")
    leia (clt)
    escreva ("Digite quantidade estagiarios:")
    leia (estagiarios)
    escreva ("Digite quantidade pj:")
    leia (pj)
    total = clt + estagiarios + pj
    escreva ("\nO total de dev são:" + total)
    se (clt >= (total / 2)) {
      escreva("\nStatus: A regra de força de trabalho está sendo cumprida.")
    } senao {
      escreva("\nAlerta: A empresa precisa de mais contratações CLT para atingir os 50%.")
    }
  }
}
    
  }
  }
}
