let accordionAdmoltech = document.querySelectorAll('.accordion-admoltech_info');

if (accordionAdmoltech.length > 0) {

    accordionAdmoltech.forEach(accordionAdmol => {
        accordionAdmol.addEventListener('click', change);
    });

    function change(event) {
       let targ = event.currentTarget;
        let info = event.currentTarget.className;

        if (info !== 'accordion-admoltech_info') return;

        if (targ.classList.contains('select')) {
            hideAll();
        }
        else {
            hideAll();
            targ.classList.add('select');
            showText(targ.nextElementSibling);
        }
    }


    function hideAll() {

        let h3El = accordionAdmoltech;
        let divEl = document.querySelectorAll('.accordion-admoltech_tabs__text');

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

}


