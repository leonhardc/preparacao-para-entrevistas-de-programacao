function updateInventory(arr1, arr2) {
    let curInv = arr1.slice(); /* Inventário atual */
    let newInv = arr2.slice(); /* Novo inventário */
    let result = []; /* resultado da operação */

    for(let item of newInv){
        let product = curInv.filter(prod => prod[1] === item[1])[0];

        if(product === undefined){
            /* 
                Primeiro caso: Consulta vazia (undefined). Adicionar um novo
                produto ao inventário.
            */
            result.push(item);
        }        
        else{
            /*
                Segundo caso: Consulta retornou algum valor.
            */
            if(product[0] !== item[0]){
                /*
                    Caso a consulta tenha retornado um valor mas as quantidas estejam
                    diferentes.
                */
                product[0] = item[0] + product[0]; // atualiza quantidade
                result.push(product); // adiciona na lista
            }
            else{
                /*
                    Caso a consulta tenha retornado algum valor mas as quantidades 
                    estejam iguais
                */
                result.push(product); // somente adiciona na lista
            }     
        }
    }

    /*
        Verificar os itens do inventario que não foram adicionados na verificação
        anterior
    */
   for(let item of curInv){
        /*
            O caso dos itens que estão no inventário atual mas não no novo.
            Atualiza resultado.
        */
        let product = result.filter(prod => prod[1] === item[1])[0];
        if(product === undefined){
            result.push(item);
        } 
   }

    /*
        Ordenar os itens de forma alfabética
    */
    //console.log(result);
    result.sort(function (a, b) {
            /* Ordenação ascendente */
            if (a[1] < b[1]) {
                return -1;
            }
            if (b[1] < a[1]) {
                return 1;
        }
    });
    return result;
}

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