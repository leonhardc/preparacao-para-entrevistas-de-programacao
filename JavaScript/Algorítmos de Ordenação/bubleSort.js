function bubbleSort(array) {
    let newArray = array.slice(0);
    for(let i = 0; i < newArray.length; i++){
        let jump = false;
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

console.log(
    "bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) returned ", bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
)