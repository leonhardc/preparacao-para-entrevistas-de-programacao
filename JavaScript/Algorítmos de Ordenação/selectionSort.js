function selectionSort(array) {
    /* Algoritmo Slection Sort */
    let newArray = array.slice(0)

    for(let indexAtual = 0; indexAtual<newArray.length-1; indexAtual++){
        let indexMenor = indexAtual+1;
        for(let indexSub = indexAtual+1; indexSub < newArray.length; indexSub++){
            /* Procura o index do menor valor da lista restante  */
            if(newArray[indexSub] < newArray[indexMenor]){
                indexMenor = indexSub
            }
        }
        if(newArray[indexAtual] > newArray[indexMenor]){
            let aux = newArray[indexAtual];
            newArray[indexAtual] = newArray[indexMenor];
            newArray[indexMenor] = aux;
        }        
    }
    return newArray;
  }

  console.log(
    selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
  )