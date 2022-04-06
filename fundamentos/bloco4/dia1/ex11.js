let salBruto = 3000;
let salBase;
let salLiq;
let inss;
let ir;

//INSS
if (salBruto <= 1556.94) {
    salBase = 0.92 * salBruto;
} else if (salBruto >= 1556,95 && salBruto <= 2594.92) {
    salBase = 0.91 * salBruto;
} else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
    salBase = 0.89 * salBruto;
} else if (salBruto > 5189.82) {
    salBase -= 570.88;
}

//IR
if (salBase <= 1903.98) {
    salLiq = salBase;
} else if (salBase >= 1903.99 && salBase <= 2826.65) {
    salLiq = 0.925 * salBase + 142.80;
} else if (salBase >= 2826.66 && salBase <= 3751.05) {
    salLiq = 0.85 * salBase + 354.80;
} else if (salBase >= 3751.06 && salBase <= 4664.68) {
    salLiq = 0.775 * salBase + 636.13;
} else if (salBase > 4664.68) {
    salLiq = 0.725 * salBase + 869,36;
}

console.log(salLiq);