let botao1 = document.getElementById('facil')
botao1.addEventListener('click', facil)

let botao2 = document.getElementById('medio')
botao2.addEventListener('click', medio)

let botao3 = document.getElementById('dificil')
botao3.addEventListener('click', dificil)

let dificuldade = ""

function facil() {
    dificuldade = "facil"
    let numeroAleatorio = parseInt(Math.random() * 10) + 1
    return numeroAleatorio
}
let numeroAleatorioFacil = facil()
function medio() {
    dificuldade = "medio"
    let numeroAleatorio = parseInt(Math.random() * 50) + 1
    return numeroAleatorio
}
let numeroAleatorioMedio = medio()
function dificil() {
    dificuldade = "dificil"
    let numeroAleatorio = parseInt(Math.random() * 100) + 1
    return numeroAleatorio
}
let numeroAleatorioDificil = dificil()