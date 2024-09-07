// Seleciona os elementos HTML que serão manipulados pelo JavaScript
let cat = document.getElementById('cat'); 
let title = document.querySelector('h1'); 
let link = document.querySelector('main a'); 
let campoMessage = document.querySelector('.message');
let message = document.getElementById('randomMessage'); 
let button = document.querySelector('.otherMessage');

// Função para trocar a imagem do gato e mostrar a mensagem
function clickCat() {
    // Muda a imagem do gato para a animação
    cat.src = "assets/cat-gif.gif";

    removeFromScreen();
    addFromScreen();
}

// Função para gerar uma frase aleatória
function randomPhrase() {
    let randomNumber = Math.round(Math.random() * 10);
    return phrase[randomNumber];
}

// Função para esconder o título e link 
function removeFromScreen() {
    title.classList.toggle('hiddenClass');
    link.classList.toggle('hiddenClass');
}

// Função para mostrar a mensagem e o botão
function addFromScreen() {
    campoMessage.classList.toggle('hiddenClass');
    button.classList.toggle('hiddenClass');

    message.innerHTML = `"${randomPhrase()}"`
}

// Função para gerar outra mensagem
function otherMessage() {
    // Restaura a imagem original do gato
    cat.src = "assets/cat-img.png";

    removeFromScreen();
    addFromScreen();
}