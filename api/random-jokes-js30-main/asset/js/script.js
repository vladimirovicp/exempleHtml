// const url = 'https://type.fit/api/quotes';


// async function getData() {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }

// getData();

//quotes.json

async function getData2() {
    const res = await fetch('asset/json/quotes.json');
    const data = await res.json();

    console.log(data[0].text);
    console.log(data[0].author);


    document.getElementById("text").textContent = data[0].text;
    document.getElementById("author").textContent = data[0].author;

}

getData2();

const btn = document.querySelector('.btn');


if (btn) {
    btn.addEventListener("click", function (e) {

        getData2();

        document.getElementById("result").textContent = 'rezult';

        // document.body.classList.toggle('_lock');
        // burger.classList.toggle('open');
        // burgerList.classList.toggle('open');

    });
}



document.getElementById("result").textContent = 'rezult000';