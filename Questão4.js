

function estados(){

   let valorTotalMensal = todosValores.mensal();

   let porcentagem = 0;


   for (let i = 0; i < todosValores.valores.length; i++) {

    porcentagem = (this.valores[i]*100)/valorTotalMensal;

    console.log(porcentagem.toFixed(2));
   }

}   

const todosValores =  {
        valores : [67836.43, 36678.66, 29229.88, 27165.48, 19849.53],


        percentual : estados,
        mensal : function (){
    
            let totalMensal = this.valores[0] + this.valores[1] + this.valores[2] + this.valores[3] + this.valores[4]

            return totalMensal
        
        },

        
    };
    
   

console.log(todosValores.mensal());
console.log(todosValores.percentual());

