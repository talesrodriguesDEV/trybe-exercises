let n = 5;

for(let index = 1; index <= n; index += 1) {
    let linha = "";
    for(let index2 = n - index; index2 >= 0; index2 -= 1) {
        linha += " ";
    }
    for(let index3 = 1; index3 <= index; index3 += 1) {
        linha += "*";
    }
    console.log(linha);
}