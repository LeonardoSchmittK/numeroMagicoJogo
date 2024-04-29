let numeroMagicoPvp;
const numeroMagicoInput = document.querySelector(".numeroMagico");
const numeroChuteInput = document.querySelector(".numeroChute");
const botaoRejogar = document.querySelector(".botaoRejogar");
const feedbackElemento = document.querySelector(".feedback");

const aplicarNumeroMagicoContainer = document.querySelector(
  ".aplicarNumeroMagicoContainer"
);
const aplicarNumeroChuteContainer = document.querySelector(
  ".aplicarNumeroChuteContainer"
);

function aplicarEstadoInicial() {
  setDisplay(aplicarNumeroMagicoContainer, "block");
  setDisplay(aplicarNumeroChuteContainer, "none");
  setDisplay(botaoRejogar, "none");
  feedbackElemento.innerHTML = "Escolha um número";
  emptyInput(numeroChuteInput);
  emptyInput(numeroMagicoInput);
}

aplicarEstadoInicial();

function aplicarNumeroMagico() {
  numeroMagicoPvp = +numeroMagicoInput.value;
  setDisplay(aplicarNumeroChuteContainer, "block");
  setDisplay(aplicarNumeroMagicoContainer, "none");
  feedbackElemento.innerHTML = "Agora adivinhe!";
  numeroChuteInput.focus();
}

function checarNumeroEscolhido() {
  let num = numeroChuteInput.value;
  if (num > numeroMagicoPvp) {
    // numero acima do certo
    feedbackElemento.innerHTML = `${num} está alto!`;
    return;
  }
  if (num < numeroMagicoPvp) {
    // numero abaixo do certo
    feedbackElemento.innerHTML = `${num} está baixo!`;
    return;
  }
  // numero certo!
  feedbackElemento.innerHTML = `Parabéns! ${num} é a resposta`;
  setDisplay(botaoRejogar, "block");
}

function setDisplay(el, display) {
  el.style.display = display;
}

function emptyInput(input) {
  input.value = "";
}

function rejogar() {
  aplicarEstadoInicial();
  numeroMagicoInput.focus();
}
