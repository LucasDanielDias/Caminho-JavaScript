const numeros = [8, 12, 45, 7, 5, 4, 86, 48, 20];
let barreira = numeros[0];
let MaiorP = 0;
let MenorI = 0;
let compare = 0;

function funcao() {
  for (let i = 0; i < numeros.length; i++) {
    compare = numeros[i];
    if (i === 0) {
      barreira = compare;
    } else {
      if (compare % 2 === 0) {
        if (compare > MaiorP) {
          MaiorP = compare;
        }
      } else {
        if (MenorI === 0 || compare < MenorI) {
          MenorI = compare;
        }
      }
    }
  }
  return `O maior número par é ${MaiorP}, o menor número ímpar é ${MenorI} de um total de ${barreira} números recebidos`;
}

module.exports = { funcao };