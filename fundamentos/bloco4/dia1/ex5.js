const a = -40;
const b = 90;
const c = 45;
let triangle;
let sai = a + b + c;

if (a < 0 || b < 0 || c < 0) {
    console.log("Erro.");
} else if (sai == 180) {
    triangle = true;
    console.log(triangle);
} else {
    triangle = false;
    console.log(triangle);
}