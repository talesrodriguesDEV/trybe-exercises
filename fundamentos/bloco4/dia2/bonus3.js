let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
let newNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (i == numbers.length - 1){
        newNumber = numbers[i] * 2;
        novoArray.push(newNumber);
    } else {
        newNumber = numbers[i] * numbers[i + 1];
        novoArray.push(newNumber);
    }    
}

console.log(numbers);
console.log(novoArray);