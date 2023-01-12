/*

*/

function binarySearch(searchList, value) {
    let arrayPath = [];
    let start = 0;
    let end = searchList.length-1;
    
    do {
        
        let mid = Math.floor((start + end)/2);
        let target = searchList[mid]

        console.log(
            "value: ", value, 
            ", target: ", target,
            ", start: ", start, 
            ", end: ", end, 
            ", mid: ", mid, 
            ", Path: ", arrayPath
        ) 

        if(target === value){
            arrayPath.push(target);
            break;
        }
        if(target > value){
            end = mid-1;
            arrayPath.push(target);
        }
        if(target < value){
            start = mid+1;
            arrayPath.push(target); 
        }
        if(mid === Math.floor((start + end)/2)){
            break
        }
 
    } while(true)

    if(!arrayPath | (arrayPath[arrayPath.length - 1 ] !== value)){
        return "Value Not Found";
    }

    return arrayPath;
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
  ];

const tests = {
    "Teste 1: ":  0,
    "Teste 2: ":  1,
    "Teste 3: ":  2,
    "Teste 4: ":  6,
    "Teste 6: ":  11,
    "Teste 5: ":  13,
    "Teste 7: ":  7,
}

for( prop in tests){
    console.log("========================================================")
    console.log(prop, binarySearch(testArray, tests[prop]));
}


