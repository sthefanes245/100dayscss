const searchBtn = document.querySelector('.lupa');
const searchBox = document.querySelector('.caixa-pesquisa');
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.menu2');
const notificationPanel = document.querySelector('.painel-notifi');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
})

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    notificationPanel.classList.toggle('active');

})
