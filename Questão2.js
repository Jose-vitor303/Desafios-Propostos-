
let sequenciaFibonacci = [];

sequenciaFibonacci [0] = 0;
sequenciaFibonacci [1] = 1;


for (var i = 2; i < 100; i++) {

    sequenciaFibonacci[i] = sequenciaFibonacci[i - 2] + sequenciaFibonacci[i - 1];
  }
 

console.log(sequenciaFibonacci);



function procurandoNumero(numero){

    if(sequenciaFibonacci.includes(numero)){

        alert(`O numero ${numero} pertence a Sequência de Fibonacci`);
    }
    else{
        alert(`O número ${numero} não pertence a Sequência de Fibonacci`)
    }

}
    


let numeroDesejado = parseInt(prompt("Informe o número que deseja encontrar"));

procurandoNumero(numeroDesejado)



