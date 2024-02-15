const alunos = ['Lucas','Matheu','João'];
alunos.push('Theodory')
alunos[4] = "Viniboy"
console.log(alunos[2]);
console.log(alunos);
alunos.pop();
console.log(alunos);
alunos.shift();
console.log(alunos);

const nota = [];
nota.push(6);
nota.push(5);
nota.push(4);
nota.push(3);
nota.push(2);
nota.push(1);

console.log(nota.length);

let notaF = 0;
for(let index = 0; index< nota.length; index++){
    notaF += nota[index];
}
console.log(notaF);

let nome = 'Victor Gabriel Pedrosa';
for(let index = 0; index< nome.length; index++){
    console.log(nome[index]);
}