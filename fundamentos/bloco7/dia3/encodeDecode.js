function encode(string) {
  // seu código aqui
  let stringCod = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a' || string[index] === 'e' || string[index] === 'i'
        || string[index] === 'o' || string[index] === 'u') {
      switch (string[index]) {
      case 'a':
        stringCod += '1';
        break;
      case 'e':
        stringCod += '2';
        break;
      case 'i':
        stringCod += '3';
        break;
      case 'o':
        stringCod += '4';
        break;
      case 'u':
        stringCod += '5';
        break;
      default:
        console.log('Erro.');
      }
    } else {
      stringCod += string[index];
    }
  }
  return stringCod;
}
// console.log(encode('hi there!'));
function decode(stringCod) {
  // seu código aqui
  let string = '';
  for (let index = 0; index < stringCod.length; index += 1) {
    if (stringCod[index] === '1' || stringCod[index] === '2' || stringCod[index] === '3'
        || stringCod[index] === '4' || stringCod[index] === '5') {
      switch (stringCod[index]) {
      case '1':
        string += 'a';
        break;
      case '2':
        string += 'e';
        break;
      case '3':
        string += 'i';
        break;
      case '4':
        string += 'o';
        break;
      case '5':
        string += 'u';
        break;
      default:
        console.log('Erro.');
      }
    } else {
      string += stringCod[index];
    }
  }
  return string;
}

module.exports = { encode, decode };