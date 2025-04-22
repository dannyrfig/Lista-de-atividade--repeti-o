let somaNum = 0;
for (let i = 1; i <= 10; i++) {
    
    let numDez = parseInt(prompt(`Digite o ${i}° número para que seja efetuada a soma`));// Solocita ao usuário um número para que seja efetuada a soma 

    if (isNaN(numDez)) { // Verifica se o número inserido é válido
        alert("Erro: você não digitou um número válido");

    } else {
        somaNum += numDez; // Efetua a soma dos dez números inseridos pelo usuário
    }
} 
console.log (`A soma dos números é equivalente a: ${somaNum}`); // Mostra o resultado da soma dos tres números
