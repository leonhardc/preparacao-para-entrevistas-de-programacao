function updateInventory(arr1, arr2) {
    // Solução um pouco mais elegante
    let curInv = arr1.slice(); /* Inventário atual */
    let newInv = arr2.slice(); /* Novo inventário */
    
    for(let item of newInv){
        let product = curInv.filter(prod => prod[1] === item[1])[0];

        if(product === undefined){ // produto ainda nao existe no inventario
            curInv.push(item);
        }
        else{ // produto ja existe no inventario
            if(product[0] !== item[0]){ // quantidades sao diferentes
                product[0] = product[0] + item[0]; // atualiza quantidade
                for(let i = 0; i < curInv.length; i++){
                    // procura item na lista para atualizar conteudo da lista
                    if(curInv[i][1] === product[1]){ 
                        curInv[i][0] = product[0];
                        break; // para o laço depois que encontrar o produto desejado
                    }
                }
            }
        }  
    }
    /*
        Ordenar os itens de forma alfabética
    */
    curInv.sort(function (a, b) {
            /* Ordenação ascendente */
            if (a[1] < b[1]) {
                return -1;
            }
            if (b[1] < a[1]) {
                return 1;
        }
    });
    return curInv;
}

// Testes
// Exemplo de listas de inventário
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

console.log(
    updateInventory(
        [
            [21, "Bowling Ball"], 
            [2, "Dirty Sock"], 
            [1, "Hair Pin"], 
            [5, "Microphone"]
        ], 
        [
            [2, "Hair Pin"], 
            [3, "Half-Eaten Apple"], 
            [67, "Bowling Ball"], 
            [7, "Toothpaste"]
        ]
    )
)