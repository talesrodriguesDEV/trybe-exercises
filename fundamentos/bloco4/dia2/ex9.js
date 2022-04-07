let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}

for (let j = 0; j <= 24; j += 1) {
    array[j] = array[j] / 2;
}

console.log(array);