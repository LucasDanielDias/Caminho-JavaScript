let tabuada = [];
let tabuadaPar = [];
let tabuadaImpar = [];
for(let i = 0; i < 10; i++){
    tabuada.push(`Tabuada do ${i+1}`);
    for(let u = 0; u < 10; u++){
        let result = (i+1) * (u+1);
        tabuada.push(`/${i+1} X ${u+1} = ${result}/`);
        if(result % 2 == 0){
            tabuadaPar.push(`/${i+1} X ${u+1} = ${result}/`);
        }else{
            tabuadaImpar.push(`/${i+1} X ${u+1} = ${result}/`);
        }
    }
    tabuada.push(`Fim da tabuada do ${i+1}`);
}
console.log(tabuada);
console.log(`Os valores pares da tabuada são: ${tabuadaPar}`);
console.log(`Os valores impares da tabuada são: ${tabuadaImpar}`);