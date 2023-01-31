/*
    Busca binária

    Este algorítmo se propõe a fazer uma busca em um array, usando o método de busca
    conhecido como binary search, ou busca binária. O algorítmo retorna um array que
    mostra o caminho que ele seguiu até encontrar o valor desejado. Caso ele não encon-
    tre o valor, o algorítmo retorna a string 'Value Not Found'.

    A busca binária é um algorítmo de busca eficiente que se baseia na hipotese do array
    passado como parametro já ser ordenado. Ele segue o paradigma de dividir para conquistar.
    Ele funciona dividindo repetidamente pela metade a porção da lista que deve conter o item, 
    até reduzir as localizações possíveis a apenas uma.

*/

function binarySearch(searchList, value) {
    
    let arrayPath = [];            /* Guarda o caminho percorrido pelo algorítmo */
    let start = 0;                 /* Marca o indice inicial da busca no array ou subarray */
    let end = searchList.length-1; /* Marca o infice final da busca no array ou subarray */
    
    do {
        
        let mid = Math.floor((start + end)/2); /* Calcula o meio */
        let target = searchList[mid]

        /* Mostra o passo a passo do trajeto */
        // console.log(
        //     "value: ", value, 
        //     ", target: ", target,
        //     ", start: ", start, 
        //     ", end: ", end, 
        //     ", mid: ", mid, 
        //     ", Path: ", arrayPath
        // ) 

        /* Podemos parar de procurar quando achamos o valor */
        if(target === value){
            arrayPath.push(target);
            break;
        }

        /* 
           Caso o valor de target nessa iteração seja maior que o valor que
           procuramos, então, provavelmente ele estará no subarray da esquerda.
           Logo, mudamos o nosso indice end. 
        */
        if(target > value){
            end = mid-1;
            arrayPath.push(target);
        }

        /* 
           Caso o valor de target nessa iteração seja menor que o valor que 
           procuramos, então, provavelmente ele estará no subarray da direita.
           Logo, atualizamos o valor do indice stard 
        */
        if(target < value){
            start = mid+1;
            arrayPath.push(target); 
        }

        /* Se estivermos presos em um unico elemento podemos parar o laço */
        if(mid === Math.floor((start + end)/2)){
            break
        }
 
    } while(true)

    /* 
       Verificamos se temos um caminho vazio ou se não encontramos o nosso 
       elemento  
    */
    if(!arrayPath | (arrayPath[arrayPath.length - 1 ] !== value)){
        return "Value Not Found";
    }

    return arrayPath;
}

/* Array onde será testado o nosso algorítmo */ 
const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
  ];

/* Aqui são os numero que serão procurados pelo algorítmo */ 
const tests = {
    "Teste 1: ":  0,
    "Teste 2: ":  1,
    "Teste 3: ":  2,
    "Teste 4: ":  6,
    "Teste 6: ":  11,
    "Teste 5: ":  13,
    "Teste 7: ":  7,
}

/* Aqui é uma execussão automatizada dos nossos testes */ 
for( prop in tests){
    console.log("========================================================")
    console.log(prop, binarySearch(testArray, tests[prop]));
}


