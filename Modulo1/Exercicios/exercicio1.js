let nota1 = 5.3; 
let nota2 = 7.6 ;
let nota3 = 8.9 ;

const media = (nota1 + nota2 + nota3) / 3;

if(media<5){
    console.log('Você reprovou')
} else if(media >= 5 && media < 7){
    console.log('Você está de recuperação')
} else{
    console.log('Parabéns passou')
}
console.log(media)