const vitor = {
    name: 'Victor Leandro de Assis',
    idade: 35,
    altura: 1.68,

    descrever: function(){
        console.log(`meu nome é ${this.name} tenho ${this.altura} de altura e tenho ${this.idade} de idade.`);
    }
}
vitor.descrever();