/*
    Buble Sort

    Buble sort é, provavelmente, o algorítmo de ordenação mais simples de entender
    e de implementar. Ele usa o paradigma de ordenação por flutuação. O algorítmo itera
    sobre um array de elementos e a cada iteração "flutua" para o topo (entenda como topo, 
    o final do array) o maior elemento da sequencia.
*/


function bubbleSort(array) {
    let newArray = array.slice(0); /* Faz uma cópia do array original para itera sobre ele */
    
    for(let i = 0; i < newArray.length; i++){
        
        let jump = false; /* Variável para verificar se houve salto de um elemento ou não */
        
        for(let indexAtual = 0; indexAtual<newArray.length-1; indexAtual++){
            
            if(newArray[indexAtual] > newArray[indexAtual+1]){
                
                let aux = newArray[indexAtual];
                newArray[indexAtual] = newArray[indexAtual+1];
                newArray[indexAtual+1] = aux;
                jump = true;

            }

        }

        if(!jump){ 
            break;
        }
    }
    return newArray;        
}

/* Teste */
console.log(
    "bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) returned ", bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)