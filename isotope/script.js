// const portfolioBtn = document.querySelector('.portfolio-btn');
// const portfolioImage = document.querySelector('.portfolio-image');

// portfolioBtn.addEventListener('click', () => {
//     portfolioImage.src = "img/winter/1.jpg"
// });


const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {

    // for (let i = 1; i <= 6; i++) {
    //     const img = new Image();
    //     img.src = `./img/summer/${i}.jpg`;
    // }

    seasons.forEach((value) => {
        //console.log(value, index, arr);
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./img/${value}/${i}.jpg`;
        }
    })

}
preloadSummerImages();

function changeClassActive(event) {
    // console.log(portfolioBtn[0])
    //  portfolioBtn.removeClass('active');



    portfolioBtn.forEach((value) => {
        if (value.classList.contains('active')) //проверяем, естьли класс актив у элемента
        {
            value.classList.remove('active'); //удаляем класс актив
        }
    });

    event.target.classList.add('active'); //добавили класс к меню по которому кликнули

}




const portfolioBtn = document.querySelectorAll('.portfolio-btn');
//const portfolioBtns = document.querySelectorAll('.portfolio-btn')
const portfolioImages = document.querySelectorAll('.portfolio-image');

//console.log(portfolioBtn);



// portfolioBtn.addEventListener('click', () => {
//     //portfolioImages.forEach((img, index) => img.src = `./img/winter/${index + 1}.jpg`);
//     portfolioImages.forEach((img, index) => img.src = "./img/winter/" + (index + 1) + ".jpg");
// });

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        //console.log(event.target.dataset.season)
        //console.log(dataset.season);
        portfolioImages.forEach((img, index) => img.src = "./img/" + event.target.dataset.season + "/" + (index + 1) + ".jpg");
    }

}

const portfolioBtns = document.querySelector('.portfolio-btns');

console.log(portfolioBtns);

portfolioBtns.addEventListener('click', (event) => {
    changeImage(event);
    changeClassActive(event);
});
