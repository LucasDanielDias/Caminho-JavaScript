let altura = 1.56;
let peso = 67; 
const IMC = peso / (altura * altura);

if(IMC<18.5){
    console.log('Vamo engorda, ta magro');
} else if(IMC >= 18.5 && IMC < 25){
    console.log('Ta certo amigão, peso bom');
} else if(IMC >= 25 && IMC < 30){
    console.log('Opa gordin, ainda ta bom');
} else if(IMC >= 30 && IMC <40){
    console.log('Já está em Obesidade');
}else{
    console.log('calma que fui pego na sua orbita');
}