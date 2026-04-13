programa {
  funcao inicio() {
   real brutoTotal 
   real premiacoes 
   real presentes
   real comissoes 
   real lucro 
   real meta
   escreva ("Digite a meta de lucro: R$ ")
   leia (meta)
   escreva ("Digite o bruto total: R$")
   leia (brutoTotal)
   escreva ("Digite valor premiações: R$ ")
   leia (premiacoes)
   escreva ("Digite valor presentes: R$ ")
   leia (presentes)
   escreva ("Digite valor comissoes: R$ ")
   leia (comissoes)
   lucro = brutoTotal - premiacoes - presentes - comissoes
   escreva ("O lucro obtido foi de R$ " + lucro)
   se (lucro >= meta){
    escreva ("\nA META FOI BATIDA")
   }
   senao {
    real falta = meta - lucro
   escreva ("\nA META NÃO FOI BATIDA. Faltou: R$ " + falta)

 



   }
  }
  }
}
