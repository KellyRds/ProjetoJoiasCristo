var menu = document.querySelection('nav ul');
var menu = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menubar.addEventListerner('click',function(){
    if (iconMenu.getAttribute("src") =='imagens/menu.png'){
        iconMenu.setAttribute("src","imagens/close.png")
    }else{
        iconMenu.setAttribute("src","imagens/menu.png")
    }
menu.classList.toggle('active');
});