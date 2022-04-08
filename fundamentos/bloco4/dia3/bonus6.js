let numero = 11;
let divisores = 0;

for(let index = 2; index < numero; index += 1) {
    if(numero % index === 0) {
        divisores += 1;
    }
}

if(divisores === 0) {
    console.log("É primo.");
} else {
    console.log("Não é primo.");
}