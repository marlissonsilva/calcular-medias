let calcular = document.getElementById('btn-calcular');
let reset = document.getElementById('btn-reset');
let res = document.getElementById('res');

const medias = [

]

function focar() {
    let nome = document.querySelector('input#name');
    nome.focus()
}


function mediaAluno() {
    let nome = document.querySelector('input#name');
    let nota1 = document.querySelector('input#nota1');
    let nota2 = document.querySelector('input#nota2');
    let nota3 = document.querySelector('input#nota3');
    let nota4 = document.querySelector('input#nota4');


    nota1 = Number(nota1.value)
    nota2 = Number(nota2.value)
    nota3 = Number(nota3.value)
    nota4 = Number(nota4.value)
    1
    let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4

    let media = mediaNotas >= 5 ? "Aprovado" : "Reprovado"

    if (nome.value == '') {
        alert('Preencha todos os campos!')
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        alert('Preencha os campos corretamente!')
    } else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        alert('Dados inválidos! Digite números entre 0 e 10')
    } else {
        let result = `<p> O(A) aluno(a) <strong>${nome.value}</strong> teve media <strong> ${mediaNotas.toFixed(2)}</strong> = <strong>${media}</strong></p>`
        medias.push(result)
        res.innerHTML = `${medias}`
    }

}

function resetar() {
    let nome = document.querySelector('input#name');
    let nota1 = document.querySelector('input#nota1');
    let nota2 = document.querySelector('input#nota2');
    let nota3 = document.querySelector('input#nota3');
    let nota4 = document.querySelector('input#nota4');

    nome.value = '';
    nota1.value = '';
    nota2.value = '';
    nota3.value = '';
    nota4.value = '';
}

calcular.addEventListener('click', mediaAluno)
reset.addEventListener('click', resetar)



