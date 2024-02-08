function nome(name){
   return 'Meu nome é ' + name;
}

function validarIdade(Idade){
    if(Idade>=18){
        return 'já posso ser preso, tenho 18 ou mais';
    }else{
        return 'Ainda não posso beber';
    }
}

function explicacao(name,idade){
     console.log(nome(name) + ' e ' + validarIdade(idade));
}
explicacao('Lucas',21);