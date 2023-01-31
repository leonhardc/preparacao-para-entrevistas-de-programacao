/*
    Merge Sort

    Merge sort é um algorítmo de ordenação que funciona dividindo um array em subarrays 
    menores, classificando cada subarray e, em seguida, mesclando os subarrays classificados
    novamente para formar um array classificado final.

    De forma simples, podemos dizer que o processo de classificação por mesclagem é dividir a 
    matriz em duas metades, classificar cada metade e, em seguida, mesclar as metades classificadas
    novamente. Este processo é repetido até que todo o array esteja classificado. 
*/

function merge(left, right){
    
    let sortedArr = []

    /* Enquanto um dos dois arrays tiverem elementos */    
    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }

    }
    
    return [...sortedArr, ...left, ...right]
}

function mergeSort(array) {
    /* Caso base */
    if(array.length <= 1){
        return array
    }
    
    /* Achar o meio do array */
    let center = Math.floor(array.length / 2);

    /* Dividir o array na metade e mandar para função novamente */
    let left = mergeSort(array.slice(0, center));
    let right = mergeSort(array.slice(center));
    
    /* Faz o merge */
    return merge(left, right);
}

/* Teste */
console.log(
    mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)