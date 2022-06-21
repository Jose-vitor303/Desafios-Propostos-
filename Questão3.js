"use strict"


let box = document.getElementsByClassName("box")[0];

fetch("./dados.json")
    .then(function(resp){

        return resp.json();

    })

    .then(function(data){

        let diaMenorValor = 0;
        let diaMaiorValor = 0;
        let somaValores = 0;
        let maiorValor = 0;
        let contador = 0;
        let mediaMensal = 0;
        let menorValor = 1000000000000;
        let DiasMaiorMediaMensal = 0;
        //const menorValor = 0;

        // maiorValor = data.reduce(function(prev, current) { 
        //     return prev.valor > current.valor ? prev : current; 
        // });

    

        for (let i = 0; i < data.length; i++) {
            
          
            let dias = document.createElement("span");
            let valor = document.createElement("a")
            let section = document.createElement("section");
           
          
            if(data[i]["valor"] > maiorValor){

                maiorValor = data[i]["valor"];
                diaMaiorValor = data[i]["dia"];
            }
            
        
            box.appendChild(section);
            section.appendChild(dias)
            section.appendChild(valor);
            section.classList.add("date")
            dias.textContent = data[i]["dia"]
            valor.textContent = data[i]["valor"].toLocaleString('pt-BR', {

                style : 'currency',
                currency : 'BRL'

            });

            if(data[i]["valor"] != 0 ){

                 somaValores += data[i]["valor"];
                 contador++;

                 if(data[i]["valor"] < menorValor){

                    menorValor = data[i]["valor"];
                    diaMenorValor = data[i]["dia"];
                    
                 }
            }
            else{

                dias.classList.add("horizontal")
            }
        }

    
        
        // console.log(somaValores);
    
        mediaMensal = somaValores/contador
        console.log(maiorValor);  
        console.log(diaMaiorValor)  
        console.log(menorValor);
        console.log(diaMenorValor);

    

        let secondSection = document.createElement("section");
        let elementMaiorValor = document.createElement("span");
        let elementMenorValor = document.createElement("span");
        let elementDiaMaiorValor = document.createElement("span");
        let elementDiaMenorValor = document.createElement("span");
        let sectionMaiorValor = document.createElement("section");
        let sectionMenorValor = document.createElement("section");

        document.body.appendChild(secondSection);
        sectionMaiorValor.classList.add("section__dates");
        sectionMenorValor.classList.add("section__dates");
        secondSection.classList.add("box");
        elementDiaMenorValor.classList.add("fix");
       
        sectionMaiorValor.appendChild(elementDiaMaiorValor);
        sectionMenorValor.appendChild(elementDiaMenorValor);
        sectionMaiorValor.appendChild(elementMaiorValor);
        sectionMenorValor.appendChild(elementMenorValor);

        secondSection.appendChild(sectionMaiorValor);
        secondSection.appendChild(sectionMenorValor);
        elementDiaMaiorValor.textContent = diaMaiorValor;
        elementDiaMenorValor.textContent = diaMenorValor
        elementMaiorValor.textContent = maiorValor.toLocaleString('pt-BR', {

            style : 'currency',
            currency : 'BRL'

        });

        elementMenorValor.textContent = menorValor.toLocaleString('pt-BR', {

            style : 'currency',
            currency : 'BRL'

        });
  


    
      
        // novoSection.appendChild(maior);
        
        // console.log(mediaMensal);

        for(let j = 0; j<data.length; j++){

            if(data[j]["valor"] != 0 ){

                if(data[j]["valor"] > mediaMensal){

                    DiasMaiorMediaMensal++;

                }
              
            }
        }

        // console.log(DiasMaiorMediaMensal);

        let qtdDias = document.getElementsByClassName("days")[0];

        qtdDias.textContent = DiasMaiorMediaMensal;

      
    })