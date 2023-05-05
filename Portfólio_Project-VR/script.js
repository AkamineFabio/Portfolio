const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const menuSide = document.querySelector('.menu-side');
const closeButton = document.querySelector('.menu-closebtn');
const closeArea = document.querySelector('.menu__close');


menuButton.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
});

closeArea.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
});

closeButton.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
})