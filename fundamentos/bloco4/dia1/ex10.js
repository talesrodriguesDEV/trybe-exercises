const custo = 100;
const valorVenda = 180;
let custoTotal = 1.2 * custo;
let lucro = valorVenda - custoTotal;

if (custo < 0 || valorVenda < 0) {
    console.log("Erro.");
} else {
    console.log(1000 * lucro);
}
