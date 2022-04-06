const peça = "pe";

if (peça.toLowerCase() === "peão") {
    console.log("1 casa para frente");
} else if (peça.toLowerCase() === "torre") {
    console.log("movimentos horizontais e verticais");
} else if (peça.toLowerCase() === "cavalo") {
    console.log("movimentos em L");
} else if (peça.toLowerCase() === "bispo") {
    console.log("movimentos diagonais");
} else if (peça.toLowerCase() === "dama") {
    console.log("movimentos diagonais, horizontais e verticais");
} else if (peça.toLowerCase() === "rei") {
    console.log("1 casa em qualquer direção");
} else {
    console.log("Erro.");
}