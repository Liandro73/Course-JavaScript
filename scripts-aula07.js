//Verbo + Substantivo
let corSite = "azul"
function resetaCor(){
    corSite = "vermelho";
}

console.log(corSite);

resetaCor();

console.log(corSite);

//Passagem de Parâmetros
let corBola = "branca"
function trocaCor(cor, tonalidade){
    corBola = cor + tonalidade;
}

console.log(corBola);

trocaCor("vermelho", " escuro");

console.log(corBola);

let aluno = "Alex Silveira"
function trocaAluno(nomeAluno){
    aluno = nomeAluno;
}

console.log(aluno);

trocaAluno("Dernival Liandro");

console.log(aluno);