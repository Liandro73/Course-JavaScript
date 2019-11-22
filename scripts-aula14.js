// Operadores Lógicos

    //E (&&)
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log('');

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log('Usando E o resultado é: ', podeAplicar);
console.log('');

    //OU (||)
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log('');

let maiorDeIdade1 = false;
let possuiCarteiraDeTrabalho1 = true;
let podeAplicar1 = maiorDeIdade1 || possuiCarteiraDeTrabalho1;
console.log('Usando OU o resultado é: ', podeAplicar1);
console.log('');

    //NOT (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato recusado: ', candidatoRecusado);