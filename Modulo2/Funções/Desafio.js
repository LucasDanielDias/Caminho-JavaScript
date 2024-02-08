function calculoIMC(altura,peso){
    let Imc = peso / (Math.pow(altura,2));
        if(Imc<18.5){
           return console.log('seu IMC está abaixo do recomendado');
        }else if(Imc>=18.5 && Imc<25){
            return console.log('seu IMC está Normal');
         }else if(Imc>=25 && Imc<30){
            return console.log('seu IMC está indicando Acima do peso');
         }else if(Imc>=30 && Imc<40){
            return console.log('seu IMC está indicando Obeso');
         }else{
            return console.log('seu IMC está indicando obesidade morbida');
         }
}
function main(){
    console.log('Ìnicio do progrma');
    console.log('pessoa1');
    calculoIMC(1.9,82.6);
    console.log('pessoa2');
    calculoIMC(1.65,82.6);
    console.log('Fim do programa');
}
main();