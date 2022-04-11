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