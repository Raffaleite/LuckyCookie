const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTryLucky = document.querySelector('#btnTryLucky')
const btnAnotherCookie = document.querySelector('#btnAnotherCookie')

const mensage = [
  "A vida trará grandes surpresas para você.",
  "Seja a mudança que você deseja ver no mundo.",
  "A persistência é o caminho do êxito.",
  "Nada é impossível para um coração cheio de vontade.",
  "Grandes realizações nunca vêm de uma zona de conforto."
];

function gerarMensagemAleatoria() {
  const index = Math.floor(Math.random() * mensage.length);
  return mensage[index];
}

function TryLucky(){
  screen1.classList.add('hide')
  screen2.classList.remove('hide') 
  document.querySelector('#msg').innerText = gerarMensagemAleatoria()

}

function TryAgain(){
  screen1.classList.remove('hide')
  screen2.classList.add('hide') 
}


btnTryLucky.addEventListener('click', TryLucky)
btnAnotherCookie.addEventListener('click', TryAgain)