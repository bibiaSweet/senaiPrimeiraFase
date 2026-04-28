let salario, dias, salarioDiario 
salario = Number (prompt ("Digite seu salário: "))
dias = Number (prompt ("Digite quantos dias trabalhou no mês:"))
salarioDiario = salario / dias
console.log ("Junin recebe por dia: " + salarioDiario.toFixed(2))