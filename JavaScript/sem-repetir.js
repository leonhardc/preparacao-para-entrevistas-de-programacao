/*
    Retorne o número de permutações totais da string fornecida que não tenham letras 
    consecutivas repetidas. Pense que todos os caracteres na cadeia fornecida sejam 
    exclusivos.

    Por exemplo, aab deve retornar 2, porque tem um total de 6 permutações 
    (aab, aab, aba, aba, baa, baa), mas apenas 2 delas (aba e aba) não têm a mesma 
    letra (neste caso, a) se repetindo.
*/

function stringPermutations(str){
    /*
        Retorna todas as permutações possiveis da string passada como parametro
    */
    if (str.length <= 2){
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    }
    return str
        .split('')
        .reduce(
        (acc, letter, i) =>
            acc.concat(
                stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)
                ),
        []
        );
}

function permAlone(str) {
    /*
        Retorna o numero de permutações que não tem caracteres seguidos repetidos
    */
    let permutations = stringPermutations(str)
    let regex = /(.)\1+/
    let count = 0;

    for (permutation of permutations){
        if (! regex.test(permutation)) {
            count += 1
        }
    }
    return count;
  }
  console.log(
    permAlone('aab')
  )
  permAlone('aab');