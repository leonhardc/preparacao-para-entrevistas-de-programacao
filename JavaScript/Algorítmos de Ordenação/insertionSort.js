// function insertionSort(array) {
//     /* Versão otimizada do insertion sort */
//     let newArray = array.slice(0)

//     for(let index = 0; index<newArray.length; index++){
//         let curr_element = newArray[index];
//         while(index > 0 && newArray[index-1] > curr_element){
//             newArray[index] = newArray[index-1] 
//             index -= 1;
//         }
//         newArray[index] = curr_element;
//     }
    
//     return newArray;
// }

function insertionSort(array) {
    /* Versão não otimizada do insertion sort */
    let newArray = array.slice(0)

    for(let index = 0; index<newArray.length; index++){
        let indexAtual = index;
        while(indexAtual > 0){
            if(newArray[indexAtual-1] > newArray[indexAtual]){
                let aux = newArray[indexAtual-1];
                newArray[indexAtual-1] = newArray[indexAtual];
                newArray[indexAtual] = aux;
            }             
            indexAtual -= 1;
        }
    }
    
    return newArray;
}

console.log(
    insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)

