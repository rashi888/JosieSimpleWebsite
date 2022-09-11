
var menu = docment.querySelector('#menu');
var bg = document.querySelector('#bg');

menu.addEventListener('click',function(){
    bg.style.transform = 'scale(0.8)';
    bg.style.borderradius = '10px';
    bg.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.2)';
})
