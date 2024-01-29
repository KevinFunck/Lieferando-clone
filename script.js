let foods = ["Chicken burger", "Beef burger", "Salat", "Monster burger"];
let prices = [12.50, 10.20, 7.50, 15.20];
let amounts = [];

let basket = [];
let basketprice = [];
let basketamount = [];





function render() {
   let foodContainer = document.getElementById('foodContainer');
   foodContainer.innerHTML = ``;


    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const price = prices[i];
        foodContainer.innerHTML += `
             <div class="menuBox">
                <div class="foodOrder" id=foodOrder onclick="add(${i})">
                    <div class="foodAndPrice">
                     <h3 class="fonts">${food}</h3>
                     <b class="price">${price.toFixed(2)}€</b>  
                    </div>     
                </div>
              </div>  
        `;    
    } 
}


function add(i) {
    let index = basket.indexOf(foods[i]);
    let food = foods[i];
    let price = prices[i];
   
    if(index == -1){
        basket.push(food);
        basketprice.push(price);
        basketamount.push(1);
    }else{
        basketamount[index]++;
    }

    calculator();
    renderBasket();
}

function renderBasket() {
    let order = document.getElementById('order');
    order.innerHTML = ``;
    

    for (let d = 0; d < basket.length; d++) {
        const baskets = basket[d];
        const basketprices = basketprice[d];
        const basketamounts = basketamount[d];
        order.innerHTML += `<div class="foodAndPrice"><p class="foodDiv"><b>${basketamounts}</b> ${baskets} ${basketprices.toFixed(2)}€</p>
                               <img class="trashIcon" onclick="deleteFood(${d})" src="img/trash.png">
                               <img class="trashIcon" onclick="plus(${d})" src="img/plus.png">
                                <img class="trashIcon" onclick="minus(${d})"  src="img/minus.png">
                           </div>`;
        
    }
}


function deleteFood(a) {
        basket.splice(a, 1);
        basketprice.splice(a, 1);
        basketamount.splice(a, 1); 
          
    renderBasket();
    calculator()   
}


function calculator() {
    let totalprice = 0;
    for (let c = 0; c < basketprice.length; c++) {
        totalprice += basketprice[c] * basketamount[c];
    }
    document.getElementById('totalpriceContainer').innerHTML = `<div class="flex"><h3>Gesammtpreis:</h3><b id="totalprice" class="distance">${totalprice.toFixed(2)}€</b></div>`;

    renderBasket();
}


function plus(basketIndex) {
    basketamount[basketIndex]++;

    renderBasket();
    calculator();
}


function minus(basketminus) {
    
    if(basketamount[basketminus] > 1) {
        basketamount[basketminus]--;
      
    }else{
        basket.splice(basketminus, 1);
        basketprice.splice(basketminus, 1);
        basketamount.splice(basketminus, 1);
    }
    renderBasket();
    calculator();
}





