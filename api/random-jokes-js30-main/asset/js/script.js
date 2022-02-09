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
    return data;
}

//const data = await getData2();

let count = 0;
let maxCount = 0; 

async function go(i){
    const data = await getData2();

    
    setTimeout(() => { 
        document.getElementById("neon").classList.add('effect');
    }, 200);


    maxCount = data.length;

    setTimeout(() => { 
        document.getElementById("text").textContent = data[i].text;
        document.getElementById("autor").textContent = data[i].author;
    }, 500);



    maxCount >= count ? count++ : count = 0;

    setTimeout(() => { 
        document.getElementById("neon").classList.remove('effect');
    }, 800);

    
}


go(count);


const btn = document.querySelector('.btn');

if (btn) {
    
    btn.addEventListener("click", function (e) {      
            go(count);
    });
}