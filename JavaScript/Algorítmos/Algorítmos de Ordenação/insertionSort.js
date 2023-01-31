/* 
    Insertion Sort

    Insertion sort ou ordenação por inserção é um algorítmo de ordenação que, dado uma
    estrutura constroi uma matriz final um elemento de cada vez, uma inserção por vez. 

    O Insertion sort funciona de maneira semelhante a como se classifica as cartas de baralho
    em suas mãos. O array é virtualmente dividido em uma parte classificada e outra não 
    classificada. Os valores da parte não classificada são selecionados e colocados em ordem
    na parte classificada.

    Esse algorítmo tem as seguintes características:

    * É um dos algorítmos de ordenação mais simples.
    * É eficiente para pequenos valores de dados, ou seja para conjuntos pequenos.
    * A classificação por inserção é de natureza adaptativa, ou seja, é apropriada para conjuntos
    de dados parcialmente classificados.
*/

function insertionSort(array) {
    /* Versão não otimizada do insertion sort */
    let newArray = array.slice(0) /* Cópia do array original */

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

/* Teste */
console.log(
    insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)

