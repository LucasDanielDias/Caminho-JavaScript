const num = 10;
const par = (num % 2) === 0;

if((num+5)>=9){
    console.log('O numero é maior que 9');
}
if(num != 0){
if(!par){
    console.log('O numero é impar');
}else{
    console.log('O numero é par');
}
}else{
    console.log('Zero não vale');
}
console.log(par);