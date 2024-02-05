let valorP = 300;
let base = valorP/100; 
let escolha = 4;
let Valorf = 0;

if(escolha===1){
    Valorf = valorP - (base*10);
    console.log('O valor final foi de : R$'+Valorf)
}else if(escolha===2){
    Valorf = valorP - (base*15);
    console.log('O valor final foi de : R$'+Valorf)
}else if(escolha===3){
    console.log('O valor final foi de : R$'+valorP)
}else{
    Valorf = valorP + (base*10)
    console.log('O valor final foi de : R$'+Valorf)
}