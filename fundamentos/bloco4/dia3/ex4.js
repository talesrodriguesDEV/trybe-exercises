let n = 50;
let primos = [];

for(let index = 1; index <= n; index += 1){
    let divisores = 0;
    for(let index2 = index - 1; index2 > 1; index2 -=1){
        if(index % index2 == 0){
            divisores += 1;
        }
    }
    if(divisores == 0){
        primos.push(index);
    }
}

console.log(primos);

let maior = 0;
for(let index = 0; index < primos.length; index += 1){
    if(primos[index] > maior){
        maior = primos[index];
    }
}
//Possível simplificação do código, visto que o array primos
//é construído em ordem:
// maior = primos[primos.length - 1];
console.log("Maior: " + maior);