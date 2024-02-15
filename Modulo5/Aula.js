const sorteio = [12 ,12 ,42 ,11 ,95 ,36 ,78 ,58, ];
let contador = 0;
let maiorN = 0;

function gets(){
  const valor = sorteio[contador];
  contador++;
  return valor;
};

function prints(texto){
  console.log(texto);
};

function maior (){
    for(i = 0; i <= sorteio.length ; i++){
        if(sorteio[contador]>maiorN){
            maiorN = sorteio[i];
        }
    }
    return maiorN;
}

module.exports = {gets,prints,maior};