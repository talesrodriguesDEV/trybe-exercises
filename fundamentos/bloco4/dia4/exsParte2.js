//1
function palindromeVerifier(string) {
    array = string.split('');
    let palindrome = true;
    let inverseArray = [];
    for(index = string.length - 1; index >= 0; index -= 1) {
        inverseArray.push(string[index]);
    }
    for(let index = 0; index < array.length; index += 1) {
        if(array[index] !== inverseArray[index]) {
            palindrome = false;
            break;
        } 
    }
    if(palindrome) {
        return true;
    } else {
        return false;
    }
}
console.log(palindromeVerifier('doidera'));;
//2
function maior(array) {
    let maiorNum = 0;
    let indice = 0;
    for(let index = 0; index < array.length; index += 1) {
        if(array[index] > maiorNum) {
            maiorNum = array[index];
            indice = index;
        }
    }
    return indice;
}
console.log(maior([2, 3, 11, 7, 1, 10]));
//3
function menor(array) {
    let menorNum = 1000;
    let indice = 0;
    for(let index = 0; index < array.length; index += 1) {
        if(array[index] < menorNum) {
            menorNum = array[index];
            indice = index;
        }
    }
    return indice;
}
console.log(menor([2, 4, 6, -7, 10, 0, -3]));
//4
function maiorNome(nome) {
    let arrayAux = [];
    let maior = 0;
    let maiorNome = "";
    for(index = 0; index < nome.length; index += 1) {
        arrayAux[index] = nome[index].split('');
    }
    for(index = 0; index < arrayAux.length; index += 1) {
        if(arrayAux.length > maior) {
            maiorNome = nome[index];
            maior = arrayAux[index].length;
        }
    }
    return maiorNome;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
//5
function moda(array) {
    let rep = [];
    for(let index = 0; index < array.length; index += 1) {
        rep.push(1);
        for(let index2 = index + 1; index2 < array.length; index2 += 1) {
            if(array[index] === array[index2]) {
                rep[index] += 1;
            } 
        }
    }
    let maisRep = 0;
    let moda;
    for(let index3 = 0; index3 < rep.length; index3 += 1) {
        if(rep[index3] > maisRep) {
            maisRep = rep[index3];
            moda = array[index3];
        }
    }
    return moda;
}
console.log(moda([2, 3, 2, 8, 5, 8, 2, 8, 2, 3, 7, 8, 2]));
//6
function somatorio(n) {
    let soma = 0;
    for (index = 1; index <= n; index += 1) {
        soma += index;
    }
    return soma;
}
console.log(somatorio(3));
//7
function wordEnding (word, ending) {
    arrayWord = word.split('');
    arrayEnding = ending.split('');
    if(arrayEnding < arrayWord) {
        if(arrayWord[arrayWord.length - 1] === arrayEnding[arrayEnding.length - 1] && arrayWord[arrayWord.length - 2] === arrayEnding[arrayEnding.length - 2] && arrayWord[arrayWord.length - 3] === arrayEnding[arrayEnding.length - 3]) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Parâmetros inválidos'
    }
}
console.log(wordEnding('tales', 'les'));