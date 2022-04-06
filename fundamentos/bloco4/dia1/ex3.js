const a = 3;
const b = 5;
const c = 2;
let aux1;

let res1 = (a > b);
if (res1) {
    aux1 = a;
} else {
    aux1 = b;
}

let res2 = (aux1 > c);
if (res2){
    aux2 = aux1;
} else {
    aux2 = c;
}

console.log(aux2);