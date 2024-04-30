//id = numeroUsuario
//acessar -> dificuldade


//Armazena a dificuldade passada pela outra script (dlc-1.js) e guarda na variavel dificuldadeEscolhida
let dificuldadeEscolhida = dificuldade

//Pegar o botao e chamar a função
let botaoAcao = document.getElementById('botao')
botaoAcao.addEventListener('click', function(){
    adivinharNumero(dificuldadeEscolhida)
})

//Pega o elemento da div vazia para mostrar a resposta se é maior ou menor
let respostaDiv = document.getElementById('div')

//Contador para verificar em quantos chutes ele acertou
let contador = 0


function adivinharNumero(dificuldadeEscolhida){
    //Pega o valor do input e armazena na variavel numeroUsuario o valor dela
    console.log(numeroAleatorioFacil)
    console.log(numeroAleatorioMedio)
    console.log(numeroAleatorioDificil)
    let input = document.getElementById('numeroUsuario')
    let numeroUsuario = input.value
    if(dificuldadeEscolhida == "facil"){
        console.log("entrei no facil")
        console.log(numeroAleatorio);
        if(numeroUsuario == numeroAleatorioFacil){
            respostaDiv.innerHTML = `Você acertou o número aleatório em ${contador}. Parabéns!`
        }else{
            if(numeroUsuario > numeroAleatorioFacil){
                respostaDiv.innerHTML = "O número chutado é MAIOR que o número aleatório"
            }else{
                respostaDiv.innerHTML = "O número chutado é MENOR que o número aleatório"
            }
        }
    }else if(dificuldadeEscolhida == "medio"){
        console.log("entrei no medio")
        if(numeroUsuario == numeroAleatorioMedio){
            respostaDiv.innerHTML = `Você acertou o número aleatório em ${contador}. Parabéns!`
        }else{
            if(numeroUsuario > numeroAleatorioMedio){
                respostaDiv.innerHTML = "O número chutado é MAIOR que o número aleatório"
            }else{
                respostaDiv.innerHTML = "O número chutado é MENOR que o número aleatório"
            }
        }
    }else{
        console.log("entrei no dificil")
        if(numeroUsuario == numeroAleatorioDificil){
            respostaDiv.innerHTML = `Você acertou o número aleatório em ${contador}. Parabéns!`
        }else{
            if(numeroUsuario > numeroAleatorioDificil){
                respostaDiv.innerHTML = "O número chutado é MAIOR que o número aleatório"
            }else{
                respostaDiv.innerHTML = "O número chutado é MENOR que o número aleatório"
            }
        }
    }
    contador++
}