function pairwise(arr, arg) {
    /*
        Dado um array arr, encontre pares de elementos cuja soma seja igual 
        ao segundo argumento arg e retorne a soma de seus índices.
    */
    let indices =  []; 
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            let soma = arr[i] + arr[j];
            if(soma === arg){
                if(indices.indexOf(i) < 0 && indices.indexOf(j) < 0){
                    indices.push(i)
                    indices.push(j)
                }                                
            }
        }
    }
    return indices.reduce(
        (acc, item) => {return acc+item},
        0
    );
  }

// Testes  
console.log(
    " Teste 1: Retorna 11", pairwise([1, 4, 2, 3, 0, 5], 7) === 11, pairwise([1, 4, 2, 3, 0, 5], 7), "\n",
    "Teste 2: Retorna 1 ", pairwise([1, 3, 2, 4], 4) === 1, pairwise([1, 3, 2, 4], 4), "\n",
    "Teste 3: Retorna 1 ", pairwise([1, 1, 1], 2) === 1, pairwise([1, 1, 1], 2), "\n",
    "Teste 4: Retorna 10", pairwise([0, 0, 0, 0, 1, 1], 1) === 10, pairwise([0, 0, 0, 0, 1, 1], 1), "\n",
    "Teste 5: Retorna 0 ", pairwise([], 100) === 0, pairwise([], 100), "\n",
)