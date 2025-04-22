let soma = 0

for(let i = 1; i <= 5; i++){
    let mediaNotas = parseInt(prompt(`Insira a ${i}° nota para descobrir sua média`));
    if(isNaN(mediaNotas)){
        alert("Erro: o número que você digitou não é válido ");
        
    }else{ 
        soma += mediaNotas/5 // Irá efetuar a soma das notas juntamente com a média delas 
        
    }
    }
    alert (`A média das notas é: ${soma}`)