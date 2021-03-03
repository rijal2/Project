const menuToogle = document.querySelector('.saklar input');
const nav = document.querySelector('nav ul');

menuToogle.addEventListener('click', function() {nav.classList.toggle('slide')});