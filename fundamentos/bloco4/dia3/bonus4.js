let n = 101;
//    *
//   ***
//  *****
// ******* 
for(let index = 1; index <= n - (n - 1)/2; index += 1) {
    let linha = "";
    for(let index2 = index; index2 <= (n + 1)/2; index2 += 1) {
        linha += " ";
    }
    linha += "*";
    if(index >= 2) {
        for(let index3 = 1; index3 <= index - 1; index3 += 1) {
            linha += "**";
        }
    }
    console.log(linha);
}
