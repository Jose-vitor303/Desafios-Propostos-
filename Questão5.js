
let palavraInversa = "";

let novaPalavra = prompt("Informe uma String");


for(let i = novaPalavra.length-1; i >= 0; i--){


    palavraInversa = palavraInversa + novaPalavra.charAt(i);
}

console.log(palavraInversa);