let accordionAdmoltech = document.getElementById('accordion-admoltech');
accordionAdmoltech.addEventListener('click', change);

function change(event) {
    //let targ = event.target;

    //console.log(event.target.className);

    let info = event.target.className;
    if (info !== 'accordion-admoltech_info') return;

    console.log(event.target);

    if (event.target.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        //targ.classList.add('select');
        info.classList.add('select');
        showText(event.target.nextElementSibling);
    }

    // if (targ.classList.contains('select')) {
    //     hideAll();
    // } else {
    //     hideAll();
    //     targ.classList.add('select');
    //     showText(targ.nextElementSibling);
    // }
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