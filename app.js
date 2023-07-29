let menu = [
  {
    id: 1,
    title: "Salt Pepper Calamari",
    category: "Main Dishes",
    price: 28.99,
    img:
      "https://twophttps://prettydeliciouseats.com/wp-content/uploads/2021/07/Air-fryer-salt-pepper-calamari-20-scaled.jpg",
    desc: `Spicy rice with calamar, serving with calamar.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Main Dishes",
    price: 17.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ra",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Honey Duck",
    category: "Main Dishes",
    price: 38.99,
    img:
      "https://houseofnasheats.com/wp-content/uploads/2022/10/Roast-Duck-Recipe-16.jpg",
    desc: `Fried duck, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Mango sticky rice",
    category: "Deserts",
    price: 5.99,
    img:
      "https://assets.epicurious.com/photos/62d6c5130fc696fea8e55a9c/1:1/w_2240,c_limit/MangoStickyRice_RECIPE_04142022_9683_final.jpg",
    desc: `Mango and stick rices `,
  },
  {
    id: 5,
    title: "Khao tom",
    category: "Deserts",
    price: 12.99,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lao_cuisine_khaotom.jpg/440px-Lao_cuisine_khaotom.jpg",
    desc: ` The pork is marinated with salt and pepper `,
  },
  {
    id: 6,
    title: "Mekhong Thai Spirit",
    category: "Drinks",
    price: 9.99,
    img:
      "https://fooddrinkdestinations.com/wp-content/uploads/2021/12/Thailand-Food-Guide-159.jpg",
    desc: `Thai whiskey is a bit of a misnomer for this tasty spirit`,
  },
  {
    id: 7,
    title: "Sang Som",
    category: "Drinks",
    price: 15.99,
    img:
      "https://fooddrinkdestinations.com/wp-content/uploads/2021/12/Thailand-Food-Guide-169.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "Main Dishes",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Khanom Wan Thai",
    category: "Deserts",
    price: 3.99,
    img:
      "https://migrationology.com/wp-content/uploads/2010/08/nam-kati-toorien.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//burda önce div içine butonları create leme yapacağım
let container=document.querySelector('.btn-container');

const btnTumu= document.createElement('button');
btnTumu.id='btnAll'
btnTumu.textContent='ALL';
btnTumu.classList.add('btn btn-otline-warning btn-item');
btnTumu.setAttribute('type','button');
container.appendChild(btnTumu);


const btnDishes= document.createElement('button');
btnDishes.id='main-dishes'
btnDishes.textContent='MAIN DISHES';
btnDishes.classList.add('btn btn-otline-warning btn-item');
btnDishes.setAttribute('type','button');
container.appendChild(btnDishes);


const btnDesert= document.createElement('button');
btnDesert.id='deserts'
btnDesert.textContent='DESERTS';
btnDesert.classList.add('btn btn-otline-warning btn-item');
btnDesert.setAttribute('type','button');
container.appendChild(btnDesert);

const btnDrink= document.createElement('button');
btnDrink.id='drinks'
btnDrink.textContent='DRINKS';
btnDrink.classList.add('btn btn-otline-warning btn-item');
btnDrink.setAttribute('type','button');
container.appendChild(btnDrink);

let tumMenuButonu=document.querySelector('#btnAll');

tumMenuButonu.addEventListener('click',menuGoster);

const menuLocasion = document.querySelector(".section-center");
menuLocasion.id='menuLocasion';

function menuGoster() {
    let menuItems = menu.map(item => { 
        return `
        <div class="card bg-light text-white photo">
         <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
            <div class="card-img-overlay">
                <h5 class="card-title"> ${item.title} </h5>
                <p class="card-text"> ${item.desc} </p>
                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                ${item.price}
                </div>
            </div>
        </div> ` 
    })
    menuLocasion.innerHTML = menuItems ;
}
menuShow();

let dishesBtn = document.querySelector("#main-dishes")
dishesBtn.addEventListener("click", dishesMenu)
function dishesMenu () {
    let menuItems = menu.map(item => {
        if(item.category == "Main Dishes"){ 
            return `
            <div class="card bg-light text-white photo">
            <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${item.title} </h5>
                    <p class="card-text"> ${item.desc} </p>
                    <div class="badge bg-primary text-wrap" style="width: 6rem;">
                    ${item.price}
                    </div>
                </div>
            </div> 
    ` 
        }
    })
    menuLocasion.innerHTML = menuItems ;
}

let drinkBtn = document.querySelector("#drinks")
drinkBtn.addEventListener("click", drinkMenu)
function drinkMenu () {
    let menuItems = menu.map(item => {
        if(item.category == "Drinks"){ 
            return `
        <div class="card bg-light text-white photo">
        <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
            <div class="card-img-overlay">
                <h5 class="card-title"> ${item.title} </h5>
                <p class="card-text"> ${item.desc} </p>
                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                ${item.price}
                </div>
            </div>
        </div> 
` 
        }
    })
    menuLocasion.innerHTML = menuItems ;
}
    
let desertsBtn = document.querySelector("#deserts")
desertsBtn.addEventListener("click", desertsMenu)
function desertsMenu () {
    let menuItems = menu.map(item => {
        if(item.category == "Deserts"){ 
            return `
        <div class="card bg-light text-white photo">
        <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
            <div class="card-img-overlay">
                <h5 class="card-title"> ${item.title} </h5>
                <p class="card-text"> ${item.desc} </p>
                <div class="badge bg-primary text-wrap" style="width: 6rem;">
                ${item.price}
                </div>
            </div>
        </div> 
` 
        }
    })
    menuLocasion.innerHTML = menuItems ;
}






