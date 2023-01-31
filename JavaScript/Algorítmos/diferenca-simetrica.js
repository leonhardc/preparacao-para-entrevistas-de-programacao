/*
        Demonstrativo de função recursiva que serve para calcular a diferença 
    simétrica (todos os elementos que estão em um determinado conjunto
    mas não simultaneamente nos dois) entre dois ou mais vetores.
    Vale lembrar que a diferença simétrica é uma operação que acontece
    estritamente entre dois conjuntos, então, no caso, se forem passados
    mais de dois conjuntos, primeiro será feita a diferença entre os dois 
    primeiros e o resultado passará pela mesma operação, de maneira recursiva
    com os outros conjuntos.
*/ 
function sym(args) {
  /*
    Recebe dois ou mais arrays e retorna a diferença simétrica.
  */
  let [frstArr, secArr, ...rest] = Object.values(arguments);  
  let result = [];
  
  /* Verifica os itens do primeiro arr que nao pertencem ao segundo */
  for(let item of frstArr){
    if(!secArr.includes(item) & !result.includes(item)){ result.push(item) }
  }
  /* Verifica os itens do segundo arr que não pertencem ao primeiro */  
  for(let item of secArr){
    if(!frstArr.includes(item) & !result.includes(item)){ result.push(item) }
  }
  
  /* Ordena o resultado */
  result = result.sort((a, b) => a - b)
  
  if(rest.length === 0){
    /* Se existirem somente dois argumentos, retorna o resultado */
    return result;
  }
  else{
    /* Se existirem mais de dois argumentos, faz a chamada recursiva */
    return sym(result, ...rest);    
  }
}
console.log(
  sym([1, 2, 3, 3], [5, 2, 1, 4])
);