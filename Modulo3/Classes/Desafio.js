let gasolina = 5.19;
let etanol = 3.2;
class Carro{
    marca;
    cor;
    rendimento;
    tipoC;
        constructor(marca,cor,rendimento,tipoC){
            this.marca = marca;
            this.cor =cor;
            this.rendimento = rendimento;
            this.tipoC = tipoC;
        }
}
function calculoViagem(Km,Cr){
    if(Cr.tipoC == 1){
        Cr.tipoC = etanol;
    }else if(Cr.tipoC == 2){
        Cr.tipoC = gasolina;
    }else{
        Cr.tipoC = (gasolina + etanol)/2;
    }
    media = Km/Cr.rendimento * Cr.tipoC;
    return console.log(`A media de Gasto do seu carro em uma viagem de ${Km} vai ser de ${media}`)
}
const Lamborguini= new Carro('Lamborguini','Preto', 7, 1);
calculoViagem(250,Lamborguini);
