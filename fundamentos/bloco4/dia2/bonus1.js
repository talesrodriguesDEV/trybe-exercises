let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
        if (numbers[i] > numbers[j]) {
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers);