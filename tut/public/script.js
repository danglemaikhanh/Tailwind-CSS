const toggleMenu = document.querySelector('#toggle__burger');
const menu = document.querySelector('#toggle__menu');
const navItems = document.querySelectorAll('.nav__item');

toggleMenu.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.actived').classList.remove('actived');
        item.classList.add('actived');  
    });
});