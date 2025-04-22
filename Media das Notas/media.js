let soma = 0

for(let i = 1; i <= 5; i++){ // Irá solicitar ao usuário 5 notas
    let mediaNotas = parseInt(prompt(`Insira a ${i}° nota para descobrir sua média`)); //Solicita a nota do usuário e converte para um número inteiro 
    if(isNaN(mediaNotas)){ // Verifica se não é um número 
        alert("Erro: o número que você digitou não é válido ");
        
    }else{ 
        soma += mediaNotas/5 // Irá efetuar a soma das notas juntamente com a média delas 
        
    }
    }
    alert (`A média das notas é: ${soma}`)