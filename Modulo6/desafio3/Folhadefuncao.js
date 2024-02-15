const salario = 3000;
const beneficios = 350;
let salarioF = 0;

function calculoS(){
    if(salario<=2000){
        salarioF = (salario-(salario*0.1)+beneficios);
    }else if(salario>2000 && salario <=3500){
        salarioF = (salario-(salario*0.15)+beneficios);
    }else{
        salarioF = (salario-(salario*0.2)+beneficios);
    }
    return  `O valor do salario final a ser pago é ${salarioF}`;
}
module.exports = { calculoS };