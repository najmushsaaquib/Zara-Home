//  function cartHtml() {
//   return `
//     <div id="container">
//         <div id="bag">
//             <span> <i class="fa-thin fa-bag-shopping "></i> </span>
//             <p>Your shopping basket is empty</p>
//         </div>
//     </div>
//     `;
// }

// export default cartHtml;

import navbar2 from "/components/header2.js";
document.querySelector("#navbar").innerHTML = navbar2();

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);

let appendContainer = document.querySelector("#left-cont");
displayCartItems(cartArr);

// displayCartItems function shows the items on the page
function displayCartItems(product) {
  appendContainer.innerHTML = "";

  product.map(function (el, index) {
    let singleItemContainer = document.createElement("div");
    singleItemContainer.id = "singleItemContainer";

    let singleItemImageContainer = document.createElement("div");
    singleItemImageContainer.id = "singleItemImageContainer";

    let image = document.createElement("img");
    image.src = el.img;
    image.id = "image";

    let singleItemTitleContainer = document.createElement("div");
    singleItemTitleContainer.id = "singleItemTitleContainer";

    let title = document.createElement("p");
    title.innerText = el.name;
    title.id = "title";

    let singleItemPriceAndQuantityContainer = document.createElement("div");
    singleItemPriceAndQuantityContainer.id =
      "singleItemPriceAndQuantityContainer";

    let singleItemPrice = document.createElement("div");
    singleItemPrice.id = "singleItemPrice";

    let price = document.createElement("p");
    let item_total = el.price * el.count;
    price.innerHTML = ` ₹ ${item_total} `;
    price.id = "price";

    let singleItemQuantity = document.createElement("div");
    singleItemQuantity.id = "singleItemQuantity";

    let minus = document.createElement("div");
    minus.innerHTML = `<i class="fas fa-minus"></i>`;
    minus.id = "minus";
    minus.addEventListener("click", function () {
      decrement(el, index);
    });

    let circle = document.createElement("div");
    circle.innerText = el.count;
    circle.classList.add("circle");

    let plus = document.createElement("div");
    plus.innerHTML = `  <i class="fas fa-plus"></i>`;
    plus.id = "plus";
    plus.addEventListener("click", function () {
      increment(el, index);
    });

    let singleItemRefContainer = document.createElement("div");
    singleItemRefContainer.id = "singleItemRefContainer";

    let ref = document.createElement("p");
    ref.innerText = el.ref;
    ref.className = "ref";

    let info = document.createElement("p");
    info.innerText = "double (200 x 200 cm)";
    info.className = "ref";

    let remove = document.createElement("div");
    remove.innerHTML = `<i class="fas fa-times "></i>`;
    remove.id = "remove";
    remove.addEventListener("click", function () {
      removeMe(index);
    });

    document.querySelector(
      "#itemsText"
    ).innerHTML = `${product.length} &nbsp;ITEMS`;

    singleItemPrice.append(price);
    singleItemQuantity.append(minus, circle, plus);

    singleItemImageContainer.append(image);
    singleItemTitleContainer.append(title);
    singleItemPriceAndQuantityContainer.append(
      singleItemPrice,
      singleItemQuantity
    );
    singleItemRefContainer.append(ref, info);
    singleItemContainer.append(
      singleItemImageContainer,
      singleItemTitleContainer,
      singleItemPriceAndQuantityContainer,
      singleItemRefContainer,
      remove
    );

    // let product = document.getElementById("product") ;
    appendContainer.append(singleItemContainer);

    let basket = document.getElementById("shopBasket");
    let countItem = JSON.parse(localStorage.getItem("cart")).length;
    basket.innerHTML = `SHOPPING BASKET (${countItem})`;

    let baskett = document.getElementById("basketCount");
    let count = JSON.parse(localStorage.getItem("cart")).length;
    baskett.innerHTML = `(${count})`;
  });
}

document.querySelector("#processbtn").addEventListener("click", () => {
  window.location.href = "/assets/pages/delivery.html";
});

// ! this function shows the total price of the cart items
showPrice(cartArr);
function showPrice(cartArr) {
  let sum = 0;
  cartArr.forEach((el) => {
    sum += el.price * el.count;
  });

  document.querySelector("#total-one").innerHTML = `₹ ${sum}`;
  document.querySelector("#total-twice").innerHTML = `₹ ${sum}`;

  console.log(sum);
}

// ! displayCartItems function shows the items on the page
function decrement(el, index) {
  if (cartArr[index].count > 1) {
    cartArr[index].count--;
    localStorage.setItem("cart", JSON.stringify(cartArr));
    displayCartItems(cartArr);
    showPrice(cartArr);
  }
}

function increment(el, index) {
  cartArr[index].count++;
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayCartItems(cartArr);
  showPrice(cartArr);
}

function removeMe(index) {
  console.log(index);

  cartArr.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayCartItems(cartArr);
  showPrice(cartArr);
}
