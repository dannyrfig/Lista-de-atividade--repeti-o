let tabuadaNum = parseInt(prompt("Digite um determinado número para que seja efetuada a tabuada do 1 ao 10")); // Solicitará que o usuário digite um número para efetuar
 
if (isNaN(tabuadaNum)) {
    alert(" Erro: você não digitou um número válido");
}

 for(let i = 1; i <= 10; i++ ){
    alert (` ${tabuadaNum} x ${i} = ${tabuadaNum * i}`);
}
    




 