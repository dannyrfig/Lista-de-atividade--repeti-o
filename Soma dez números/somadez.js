let somaNum = 0;
for (let i = 1; i <= 10; i++) {
    
    let numDez = parseInt(prompt(`Digite o ${i}° número para que seja efetuada a soma`));

    if (isNaN(numDez)) {
        alert("Erro: você não digitou um número válido");

    } else {
        somaNum += numDez; 
    }
} 
console.log (`A soma dos números é equivalente a: ${somaNum}`);
