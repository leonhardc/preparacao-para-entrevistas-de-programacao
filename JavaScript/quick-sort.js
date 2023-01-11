function quickSort(array){
    if (array.length === 0) return [];
    if (array.length === 1) return array;
    /* Pivot nesse implementação será o primeiro elemento */
    var pivot = array[0];

    var head = array.filter(n => n < pivot); /* Sublista esqueda */
    var equal = array.filter(n => n === pivot); /* elementos iguais ao pivot */
    var tail = array.filter(n => n > pivot); /* Sublista direita */

    return quickSort(head).concat(equal).concat(quickSort(tail)); /* recursão */
}
/* Testes */
console.log(
    quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)