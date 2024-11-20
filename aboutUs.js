// Seleciona os elementos do menu hambúrguer e menu lateral
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = document.querySelector('.close-menu');

// Função para abrir o menu
hamburger.addEventListener('click', () => {
    sideMenu.style.left = '0px';
});

// Função para fechar o menu
closeMenuButton.addEventListener('click', () => {
    sideMenu.style.left = '-250px';
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sideMenu.style.left = '-250px';
    }
});
