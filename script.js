let catShow = 6
let sort = {sortObject:"price", sortType: -1}

const cats=[
    {name:"Кот полосатый",color:"Коричневый",age:3,legs:"4",price:30000,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:5,legs:"4",price:32000,like:false,discount: false,image:"./img/cat2.png"},
    {name:"Кот полосатый",color:"Коричневый",age:1,legs:"4",price: 5000,like:false,discount:"-40%",image:"./img/cat3.png"},
    {name:"Кот полосатый",color:"Коричневый",age:6,legs:"4",price:15000,like:false,discount: false,image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:9,legs:"4",price:  300,like:false,discount: false,image:"./img/cat2.png"},
    {name:"Кот полосатый",color:"Коричневый",age:1,legs:"4",price:90000,like:false,discount: false,image:"./img/cat3.png"},
    {name:"Кот полосатый",color:"Коричневый",age:2,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat3.png"},
    {name:"Кот полосатый",color:"Коричневый",age:9,legs:"4",price:12500,like:false,discount: false,image:"./img/cat2.png"},
    {name:"Кот полосатый",color:"Коричневый",age:6,legs:"4",price:12500,like:false,discount: false,image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:9,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:3,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:1,legs:"4",price:12500,like:false,discount: false,image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:7,legs:"4",price:12500,like:false,discount: false,image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:5,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:8,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:2,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:8,legs:"4",price:52500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:9,legs:"4",price:12500,like:false,discount: false,image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:2,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:1,legs:"4",price:12500,like:false,discount: false,image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:0,legs:"4",price:12500,like:false,discount:"-40%",image:"./img/cat1.png"},
    {name:"Кот полосатый",color:"Коричневый",age:3,legs:"4",price:12500,like:false,discount: false,image:"./img/cat1.png"},
]

function getCard({name,color,age,legs,price,like,discount,image,id}){
    const card = document.createElement('div')
    card.className = "card"
    card.innerHTML =`<div class="card__img-wrapper">
            <img class="card__img" src="${image}" alt="dog">
            ${discount ? `<div class='sale'>${discount}</div>`:""}
            <button onclick="toggleLike(${id})" class="like"><img src="${like ? "./img/likeActive.svg":"./img/like.svg"}" alt="like"></button>
        </div>
        <div class="card__main">
            <div class="card__name">${name}</div>
            <div class="card__description">
                <div class="card__description-item">${color}
                    окрас</div>
                <div class="card__description-item">
                    <span class="years">${age} мес.</span>
                    Возраст
                </div>
                <div class="card__description-item">
                    <span class="legs">${legs}</span>
                    Кол-во лап
                </div>
            </div>
            <div class="cost">${price} руб.</div>
        </div>
    <button class="card__button">Купить</button>`
    return card;
}

function toggleLike(id){
    console.log(id)
    console.log(cats[id])
    cats[id].like = !cats[id].like
    notifCat(cats[id].like?"Лайкнули котика":"Разлайкнули котика")
    renderCats()
}

function notifCat(message){
    const notif = document.createElement('div')
    notif.className = "notif"
    notif.innerHTML = message
    const alertWrapper = document.getElementById("alert-wrapper");
    alertWrapper.appendChild(notif)
    setTimeout(()=>{
        alertWrapper.removeChild(notif)
    },5000)
}

function renderCats(){
    const cardList = document.getElementById("card-list");
    cardList.innerHTML = ""
    cats.sort((a,b)=>((b[sort.sortObject] - a[sort.sortObject])*sort.sortType))
    let shownCats = cats.slice(0,catShow)
    shownCats.map((cat,id)=>{
        cardList.appendChild(getCard({...cat,id}))
    })
}
function showMore(){
    catShow+=6;
    if(catShow>cats.length){
        catShow=cats.length
    }
    renderCats()
}

function setSortPrice(){
    sort.sortType *= -1
    sort.sortObject = "price"
    renderCats()
}

function goToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function setSortAge(){
    sort.sortType *= -1
    sort.sortObject = "age"
    renderCats()
}

function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}


window.onload = function() {
    renderCats()
    const showMoreBtn = document.getElementById("show-more");
    const sortPriceBtn = document.getElementById("sort-price");
    const sortAgeBtn = document.getElementById("sort-age");
    const arrowTopBtn = document.getElementById("arrow-top");
    showMoreBtn.addEventListener("click",showMore)
    sortPriceBtn.addEventListener("click",setSortPrice)
    sortAgeBtn.addEventListener("click",setSortAge)
    arrowTopBtn.addEventListener("click",goToTop)

    function scrollHandler(){
        console.log(window.scrollY)
        if(window.scrollY <=200){
            arrowTopBtn.classList.remove("visible")
        }else{
            arrowTopBtn.classList.add("visible")
        }
    }

    document.addEventListener("scroll",scrollHandler)
}

