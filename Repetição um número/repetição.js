let num = parseInt(prompt("Digite um determinado número para que seja efetuada a sequência"));
if(isNaN(num)){
    alert("Erro: O número que você digitou não é válido");
} else {

    let numUm = ""

    for(let i = 1; i <=num; i++){
        numUm += i + "\n"
        console.log(i)
    }

    alert(`A sequencia de seu número é:\n${numUm}`);

}
    
    


