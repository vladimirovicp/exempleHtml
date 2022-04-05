let accordionAdmoltech = document.getElementById('accordion-admoltech');
accordionAdmoltech.addEventListener('click', change);

function change(event) {
    let targ = event.target;

    //console.log(targ);

    //console.log(event.target.className);

    let info = targ.className;
    if (info !== 'accordion-admoltech_info') return;


    if (targ.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        //targ.classList.add('select');
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}

function hideAll() {
    //let h3El = accordionAdmoltech.querySelectorAll('h3');
    let h3El = accordionAdmoltech.querySelectorAll('.accordion-admoltech_info');
    let divEl = accordionAdmoltech.querySelectorAll('.accordion-admoltech_tabs__text');

    // let h3El = accordionAdmoltech.querySelectorAll('.accordion-admoltech_info');
    // let divEl = accordionAdmoltech.querySelectorAll('.tabs__text');

    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
    }
}
function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
}