let num = parseInt(prompt("Digite um determinado número para que seja efetuada a sequência"));// Irá solicitar para o usuário digitar um determinado número para fazer a sequência
if(isNaN(num)){ // Irá analizar se é um número válido
    alert("Erro: O número que você digitou não é válido");
} else {

    let numUm = "" 

    for(let i = 1; i <=num; i++){
        numUm += i + "\n"
        console.log(i)
    }

    alert(`A sequencia de seu número é:\n${numUm}`); //Mostra ao usuário a sequencia do número que ele digitou

}
    
    


