//id = numeroUsuario
//acessar -> dificuldade

//Pega o valor do input e armazena na variavel numeroUsuario o valor dela
let input = document.getElementById('numeroUsuario')
let numeroUsuario = input.value

//Armazena a dificuldade passada pela outra script (dlc-1.js) e guarda na variavel dificuldadeEscolhida
let dificuldadeEscolhida = localStorage.getItem("dificuldade")

//Pegar o botao e chamar a função
let botaoAcao = document.getElementById('botao')
botaoAcao.addEventListener('click', adivinharNumero(dificuldadeEscolhida))

//Pega o elemento da div vazia para mostrar a resposta se é maior ou menor
let respostaDiv = document.getElementById('div')

//Contador para verificar em quantos chutes ele acertou
let contador = 0


function adivinharNumero(dificuldadeEscolhida){
    if(dificuldadeEscolhida == "facil"){
        let numeroAleatorio = parseInt(Math.random() * 10) + 1
        if(numeroUsuario == numeroAleatorio){
            respostaDiv.innerHTML = `Você acertou o número aleatório em ${contador}. Parabéns!`
        }else{
            if(numeroUsuario > numeroAleatorio){
                respostaDiv.innerHTML = "O número chutado é MAIOR que o número aleatório"
            }else{
                respostaDiv.innerHTML = "O número chutado é MENOR que o número aleatório"
            }
        }
    }else if(dificuldadeEscolhida == "medio"){
        let numeroAleatorio = parseInt(Math.random() * 50) + 1
        if(numeroUsuario == numeroAleatorio){
            respostaDiv.innerHTML = `Você acertou o número aleatório em ${contador}. Parabéns!`
        }else{
            if(numeroUsuario > numeroAleatorio){
                respostaDiv.innerHTML = "O número chutado é MAIOR que o número aleatório"
            }else{
                respostaDiv.innerHTML = "O número chutado é MENOR que o número aleatório"
            }
        }
    }else{
        let numeroAleatorio = parseInt(Math.random() * 100) + 1
        if(numeroUsuario == numeroAleatorio){
            respostaDiv.innerHTML = `Você acertou o número aleatório em ${contador}. Parabéns!`
        }else{
            if(numeroUsuario > numeroAleatorio){
                respostaDiv.innerHTML = "O número chutado é MAIOR que o número aleatório"
            }else{
                respostaDiv.innerHTML = "O número chutado é MENOR que o número aleatório"
            }
        }
    }
    contador++
}