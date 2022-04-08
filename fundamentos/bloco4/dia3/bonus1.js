let n = 10;
let asteriscos = "";

if(n <= 1) {
    console.log("Erro.");
} else {
    for(let index = 1; index <= n; index += 1) {
        asteriscos += "*";
    }
    for(let index = 1; index <= n; index += 1) {
        console.log(asteriscos);
    }
}