let numPar1 = parseInt(prompt("Digite um determinado número")); 

let numPar2 = parseInt(prompt("Digite um determinado número")); 

if (isNaN(numPar1) || isNaN(numPar2)) { 

    alert("Erro: O número que você digitou não é válido");
} else {
    let numTotal = ''; //Números que estão entre os dois números

    for (let i = numPar1; i <= numPar2 ; i++) { //Verifica os número entre os dois digitos inserido pelo usuário
        if (i % 2 === 0) { 
            numTotal += `${i}\n`; 
        }
    }

    alert(`Os números pares entre ${numPar1} e ${numPar2} são:\n${numTotal}`); 
}