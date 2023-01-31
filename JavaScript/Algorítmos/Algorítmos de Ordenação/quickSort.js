/* 
    Quick sort

    Assim como o Merge Sort, o Quick sort é um algorítmo 'Dividir para Conquistar'. 
    Ele escolhe um elemento como pivô e particiona o array fornecido em torno do 
    pivô escolhido. Existem muitas versões distintas do quick sort que escolhem o 
    pivô de maneira distinta, como por exemplo:

    * Sempre escolhe o primeiro elemento como pivot (implementado abaixo);
    * Sempre escolhe o ultimo elemento como pivot; 
    * Escolhe um elemento aleatório como pivot ;
    * Escolhe a mediana como pivot.
*/

function quickSort(array){
    if (array.length === 0) return [];
    if (array.length === 1) return array;
    
    var pivot = array[0]; /* Pivot nesse implementação será o primeiro elemento */

    var head = array.filter(n => n < pivot);    /* Sublista esqueda */
    var equal = array.filter(n => n === pivot); /* Elementos iguais ao pivot */
    var tail = array.filter(n => n > pivot);    /* Sublista direita */

    return quickSort(head).concat(equal).concat(quickSort(tail)); /* Recursão */
}

/* Teste */
console.log(
    quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)