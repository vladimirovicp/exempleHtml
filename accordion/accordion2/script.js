const details = document.querySelectorAll(".item > details");
const detailsSub = document.querySelectorAll(".item_sub > details");

for(i=0;i<details.length;i++) {
    details[i].addEventListener("toggle", accordion);
}
for(let i=0;i<detailsSub.length;i++) {
    detailsSub[i].addEventListener("toggle", accordion);
}
function accordion(event) {
    if (!event.target.open) return;
    let item = event.target.parentNode;
   // console.log(event.target.children)
    if( item.className === 'item'){
        for(i=0;i<details.length;i++) {
            if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
            details[i].removeAttribute("open");
        }
        for(i=0;i<detailsSub.length;i++) {
            detailsSub[i].removeAttribute("open");
        }
    } else if( item.className === 'item_sub'){

        const current = event.target.parentNode.children;
        for(i=0;i<current.length;i++) {
            if (current[i].tagName != "DETAILS" || !current[i].hasAttribute('open') || event.target == current[i]) continue;
            current[i].removeAttribute("open");
        }
    }









    // for(i=0;i<details.length;i++) {
    //
    //     if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
    //     details[i].removeAttribute("open");
    //
    // }


}