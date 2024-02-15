const notas = [10, 5.5, 8, 3.6, 2.0];
let i = 0;
let media = 0;
let notaF = 0
function mediaCalc(){
    for(i=0;i<notas.length;i++){
        notaF += notas[i];
    }
    media = notaF/notas.length;
    if(media<5){
        return 'Reprovado';
    }else if(media >= 5 && media < 7){
        return 'Recuperação';
    }else{
        return 'Aprovado'
    }
}
module.exports = {mediaCalc};