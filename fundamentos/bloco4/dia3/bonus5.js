let n = 11;
let qtdeLinhas = n - (n - 1)/2;
//    *
//   * *
//  *   *
// ******* 
for(let index = 1; index <= qtdeLinhas; index += 1) {
    let linha = "";
    for(let index2 = index; index2 <= (n + 1)/2; index2 += 1) {
        linha += " ";
    }
    linha += "*";
    if(index != 1 && index != qtdeLinhas) {
        linha += " ";
        if(index >= 3) {
            for(index2 = 1; index2 < index - 1; index2 += 1) {
                linha += "  ";
            }
        }
        linha += "*";
    } else if(index == qtdeLinhas) {
        for(let index3 = 1; index3 < n; index3 += 1) {
            linha += "*";
        }
    }
    console.log(linha);
}
