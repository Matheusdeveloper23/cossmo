//MUDANÇA DE COR DO CABEÇALHO NA ROLAGEM DA PAGINA
const header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0)
})

// MENU
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a'); // Seleciona todos os links no menu de navegação

menu.onclick = () => {
    // Alterna a classe para o ícone do menu
    menu.classList.toggle('ri-close-line');
    menu.classList.toggle('ri-layout-grid-fill');
    
    // Alterna a visibilidade da barra de navegação
    navbar.classList.toggle('active');
};

// Fecha o menu quando um link da navegação é clicado
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ri-close-line');
        menu.classList.add('ri-layout-grid-fill');
        navbar.classList.remove('active');
    });
});

//Scrollreveal animação rolagem da pagina
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal('.home-text', '.buds-Text', {origin:'left'})
sr.reveal('.home-img', {origin:'right'})
sr.reveal('.specs-text', {delay:200})
sr.reveal('.buds-text', '.buds-img',  {delay:200})
sr.reveal('.products-text', {delay:200})
sr.reveal('.specs-datails .box', {origin:'left', interval:200})
sr.reveal('.specs-img', {delay:600})
sr.reveal('.products-container .box,.footer .logo,.footer .footer-box', {interval:150})







// //MUDANÇA DE TEMA DA PAGINA
// // Obtemos referências aos elementos e variáveis de tema
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'ri-sun-line';
// const headerElement = document.querySelector('header'); // Obtém o elemento <header>
// const headerDarkBackground = 'header-dark-background'; // Classe para fundo branco no modo escuro

// // Função para obter o tema atual
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : iconTheme;

// // Checamos o tema e ícone previamente selecionados no localStorage
// const savedTheme = localStorage.getItem('selected-theme');
// const savedIcon = localStorage.getItem('selected-icon');

// // Aplicamos o tema e ícone salvos
// if (savedTheme) {
//     document.body.classList[savedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//     themeButton.classList[savedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
//     // Ajusta o fundo do header de acordo com o tema salvo
//     headerElement.classList[savedTheme === 'dark' ? 'add' : 'remove'](headerDarkBackground);
//     // Ajusta o fundo dos contêineres de acordo com o tema salvo
//     document.querySelector('.shop-container').classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
//     document.querySelector('.buds-container').classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
// }

// // Adicionamos o evento de clique ao botão de tema
// themeButton.addEventListener('click', () => {
//     // Alternamos a classe de tema e ícone
//     document.body.classList.toggle(darkTheme);
//     themeButton.classList.toggle(iconTheme);
    
//     // Alternamos a classe de fundo do header
//     headerElement.classList.toggle(headerDarkBackground);
//     // Alternamos a classe de fundo dos contêineres
//     document.querySelector('.shop-container').classList.toggle('dark-theme');
//     document.querySelector('.buds-container').classList.toggle('dark-theme');
    
//     // Salvamos o tema e ícone atuais no localStorage
//     localStorage.setItem('selected-theme', getCurrentTheme());
//     localStorage.setItem('selected-icon', getCurrentIcon());
// });
