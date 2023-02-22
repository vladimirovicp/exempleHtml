const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('.menu__item')

if(menuItems.length > 0){

    menuItems.forEach(menuItem => {
        const menuLink = menuItem.querySelector('.menu__link');
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        console.log(e)
        //console.log(e.target);
        // console.log(e.target);

        closeItemMenu();
        e.target.classList.add('open');
    }
}


function closeItemMenu(){
    menuItems.forEach( item => {
        const menuLink = item.querySelector('.menu__link');
        menuLink.classList.remove('open');
    })
}