class pessoa{
    nome;
    altura;
    peso;
    constructor(nome,altura,peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
}
function calcularIMC(p1){
    IMC = p1.peso / (Math.pow(p1.altura , 2));
    estado = estadoP(IMC);
    return console.log(`O IMC de/a ${p1.nome} é de ${IMC} e está ${estado}`);
}
function estadoP(IMC){
    if(IMC<18.5){
        return ('magro')
    } else if(IMC>=18.5 && IMC<25){
        return ('Certo')
    }else{
        return ('Gordo')
    }
}
const vitor =  new pessoa('Vitor', 2.9, 140);
calcularIMC(vitor);