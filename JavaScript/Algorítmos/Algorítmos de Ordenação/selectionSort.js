/* 
    Selection Sort

    A classificação por seleção é um algorítmo simples e eficiente que funciona selecionando
    repetidamente o menor (ou maior) elemento da parte não classificada da lista e movendo-o
    para a parte classificada da lista. O algorítmo seleciona repetidamente o menor (ou maior)
    elemento da parte não classificada da lista e o troca pelo primeiro elemento da parte não
    classificada. Esse processo é repetido para a parte restante da parte não classificada até
    que toda lista esteja classificada
*/

function selectionSort(array) {
    
    let newArray = array.slice(0) /* Cópia do array original */

    for(let indexAtual = 0; indexAtual<newArray.length-1; indexAtual++){
        
        let indexMenor = indexAtual+1;
        
        for(let indexSub = indexAtual+1; indexSub < newArray.length; indexSub++){
            /* Procura o index do menor valor da lista restante  */
            if(newArray[indexSub] < newArray[indexMenor]){
                indexMenor = indexSub
            }
        }
        /* Troca */
        if(newArray[indexAtual] > newArray[indexMenor]){
            let aux = newArray[indexAtual];
            newArray[indexAtual] = newArray[indexMenor];
            newArray[indexMenor] = aux;
        } 

    }
    return newArray;
  }

  /* Teste */
  console.log(
    selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
  )