
let valorE = 3.17;
let valorG = 5.47;
let KMpercorrido = 480;
let DPKM = 8;
const tipo = "g";

const ValorTG = ((KMpercorrido/DPKM)*valorG);
const ValorTE = ((KMpercorrido/DPKM)*valorE);

if(tipo === 'E'){
    console.log('Seu carro usa etanol e o valor foi de '+ ValorTE)
} else {
    console.log('Seu carro usa gazolina e o valor foi de '+ ValorTG)
}


console.log('Fim do programa');