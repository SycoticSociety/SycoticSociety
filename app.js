const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

var today = new Date();
var hourNow = today.getHours ();
var greeting;
if (hourNow > 18) {
greeting = 'Good evening!';
} else if (hourNow > 12) {
greeting = 'Good afternoon! ';
} else if (hourNow > 0) {
greeting = 'Good morning!';
} else {
greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
