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