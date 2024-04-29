let botao1 = document.getElementById('facil')
botao1.addEventListener('click', facil)

let botao2 = document.getElementById('medio')
botao2.addEventListener('click', medio)

let botao3 = document.getElementById('dificil')
botao3.addEventListener('click', dificil)

let dificuldade = ""

function facil() {
    dificuldade = "facil"
    localStorage.setItem("dificuldade", dificuldade)
}
function medio() {
    dificuldade = "medio"
    localStorage.setItem("dificuldade", dificuldade)
}
function dificil() {
    dificuldade = "dificil"
    localStorage.setItem("dificuldade", dificuldade)
}