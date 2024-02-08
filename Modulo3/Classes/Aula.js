class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`)
    }
}

const vitor = new Pessoa('Vitor G Pedrosa',25);
const lucas = new Pessoa('Lucas Daniel Dias', 21);

vitor.descrever();
lucas.descrever();

function comparar(P1, P2){
    if(P1.idade > P2.idade){
        console.log(`A pessoa que se chama ${P1.nome} é mais velha que a pessoa que se chama ${P2.nome}`);
    }else if(P1.idade < P2.idade){
        console.log(`A pessoa que se chama ${P2.nome} é mais velha que a pessoa que se chama ${P1.nome}`);
    }else {
        console.log("Ambas as pessoas tem a mesma idade.")
    }
}
comparar(vitor,lucas);
