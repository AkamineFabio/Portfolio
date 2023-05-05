
const menu = document.querySelector('.menu');
const closeicon = document.querySelector('.menu__closeIcon');
const buttonMenu = document.querySelector('.header__button');
const blankMenu = document.querySelector('.menu__blank');

buttonMenu.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
});

closeicon.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
});

blankMenu.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
});



