var product = JSON.parse(localStorage.getItem("cart")) || [];
console.log(product.length);
var prod = document.getElementById("product");

if(product.length == 0){
    document.querySelector("#remer").style.display = "block";
}
console.log(product);
display(product)

function display(product) {
  prod.innerHTML = "";

  product.map(function (el, index) {
    var mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";

    let image = document.createElement("img");
    image.src = el.img;
    image.id = "image";

    let title = document.createElement("h4");
    title.innerText = el.name;
    title.id = "title";

    var priceDiv = document.createElement("div");
    priceDiv.id = "priceDiv";
    var iconDiv = document.createElement("div");
    iconDiv.id = "iconDiv";

    let minus = document.createElement("div");
    minus.innerHTML = `<i class="fas fa-minus"></i>`;
    minus.id = "minus";
    minus.addEventListener("click", function () {
      decrement(index, circle, price);
    });

    let circle = document.createElement("div");
    circle.innerText = el.count;
    circle.classList.add("circle");

    let plus = document.createElement("div");
    plus.innerHTML = `<i class="fas fa-plus"></i>`;
    plus.id = "plus";
    plus.addEventListener("click", function () {
      increment(index, circle, price);
    });

    let price = document.createElement("h3");
    let item_total = el.price * el.count;
    price.innerHTML = `${item_total} ₹`;
    price.id = "price";

    let ref = document.createElement("p");
    ref.innerText = el.ref;
    ref.className = "ref";

    let info = document.createElement("p");
    info.innerText = "double (200 x 200 cm)";
    info.className = "ref";

    let remove = document.createElement("div");
    remove.innerHTML = `<i class="fas fa-times"></i>`;
    remove.id = "remove";
    remove.addEventListener("click", function () {
      makeDelete(index);
    });

    iconDiv.append(minus, circle, plus);

    priceDiv.append(price);

    mainDiv.append(image, remove, title, priceDiv, iconDiv, ref, info);

    // var product = document.getElementById("product") ;
    prod.append(mainDiv);
  });
}

/* ------------------------------ REMOVE FUNCTION -------------------------------- */

function makeDelete(i) {
  // console.log(i)
  product.splice(i, 1);
  localStorage.setItem("BAG", JSON.stringify(product));
  //   location.reload();

  var tCount = 0;
  for (var i = 0; i < product.length; i++) {
    tCount = tCount + product[i].count;
  }
  console.log(tCount);
  localStorage.setItem("countItem", JSON.stringify(tCount));
  document.getElementById("basketCount").innerText = tCount;
  document.querySelector("#Item").innerHTML = `${tCount} ITEMS`;
  document.getElementById("basket").innerHTML = `SHOPPING BASKET(${tCount})`;

  var total = product.reduce(function (acc, cv) {
    return acc + Number(cv.price) * cv.count;
  }, 0);
  // console.log(total) ;
  var p = total.toFixed(2);
  document.querySelector("#total").innerHTML = `<p>${p} ₹</p>`;
  document.querySelector("#total2").innerHTML = `<h4>${p} ₹*</h4>`;

  display(product);
}

/* ---------------------------- QUANTITY UPDATE(INCREMENT) ------------------------- */
function increment(i, c, p) {
  // console.log(i)
  product[i].count = product[i].count + 1;
  console.log(product);
  // var circle = document.getElementsByClassName("circle") ;
  c.innerHTML = `${product[i].count}`;

  p.innerHTML = `${product[i].price * Number(c.innerText)} ₹`;

  localStorage.setItem("BAG", JSON.stringify(product));

  var total = product.reduce(function (acc, cv) {
    return acc + Number(cv.price) * cv.count;
  }, 0);
  // console.log(total) ;
  var p = total.toFixed(2);
  document.querySelector("#total").innerHTML = `<p>${p} ₹</p>`;
  document.querySelector("#total2").innerHTML = `<h4>${p} ₹*</h4>`;

  var quantity1 = document.getElementById("Item");
  totalCount = 0;
  for (var i = 0; i < product.length; i++) {
    totalCount = totalCount + product[i].count;
  }
  console.log(totalCount);
  quantity1.innerHTML = `${totalCount} ITEMS`;
  localStorage.setItem("countItem", JSON.stringify(totalCount));
  document.getElementById("basketCount").innerText = totalCount;

  var quantity2 = document.getElementById("basket");
  quantity2.innerHTML = `SHOPPING BASKET(${totalCount})`;
}

/* ---------------------------- QUANTITY UPDATE(DECREMENT) ------------------------- */

function decrement(i, c, p) {
  // console.log(i)

  if (product[i].count > 1) {
    product[i].count = product[i].count - 1;
    console.log(product);
    // var circle = document.getElementsByClassName("circle") ;
    c.innerHTML = `${product[i].count}`;

    p.innerHTML = `${product[i].price * Number(c.innerText)} ₹`;

    localStorage.setItem("BAG", JSON.stringify(product));

    var total = product.reduce(function (acc, cv) {
      return acc + Number(cv.price) * cv.count;
    }, 0);
    // console.log(total) ;
    var p = total.toFixed(2);
    document.querySelector("#total").innerHTML = `<p>${p} ₹</p>`;
    document.querySelector("#total2").innerHTML = `<h4>${p} ₹*</h4>`;

    var quantity1 = document.getElementById("Item");
    var totalCount = 0;
    for (var i = 0; i < product.length; i++) {
      totalCount = totalCount + product[i].count;
    }
    localStorage.setItem("countItem", JSON.stringify(totalCount));
    document.getElementById("basketCount").innerText = totalCount;
    console.log(totalCount);
    quantity1.innerHTML = `${totalCount} ITEMS`;

    var quantity2 = document.getElementById("basket");
    quantity2.innerHTML = `SHOPPING BASKET(${totalCount})`;
  }
}

// ----------------------  TOTAL PRICE  ----------------------------

var total = product.reduce(function (acc, cv) {
  return acc + Number(cv.price * cv.count);
}, 0);

// console.log(total) ;
var p = total.toFixed(2);
document.querySelector("#total").innerHTML = `<p>${p} ₹</p>`;
document.querySelector("#total2").innerHTML = `<h4>${p} ₹*</h4>`;

var totalCount = 0;
for (var i = 0; i < product.length; i++) {
  totalCount = totalCount + product[i].count;
}
console.log(totalCount);
localStorage.setItem("countItem", JSON.stringify(totalCount));
document.querySelector("#Item").innerHTML = `${totalCount} ITEMS`;
document.getElementById("basket").innerHTML = `SHOPPING BASKET(${totalCount})`;
// quantity1.innerHTML = `${totalCount} ITEMS`

/*----------------------------------FOR PAYMENT PAGE---------------------------------------*/

var button = document.getElementById("btn");
button.addEventListener("click", function () {
  payment_page();
});

function payment_page() {
  var payment_total = document.getElementById("total2").textContent;
  payment_total = payment_total.slice(0, -3);
  console.log(payment_total);

  var newdata = JSON.parse(localStorage.getItem("BAG"));

  newdata.push(payment_total);

  localStorage.setItem("FROM BAG", JSON.stringify(newdata));

  localStorage.setItem("Total", JSON.stringify(payment_total));

  window.location.href = "../check_pay_summary/checkoutpage/checkout.html";
}

//LOGIN
let loginDisplay = localStorage.getItem("loginDisplay") || null;
console.log(loginDisplay);
if (loginDisplay !== null) {
  document.getElementById("modallogin").innerHTML = loginDisplay;
}

//BASKET
let countItem = localStorage.getItem("countItem") || 0;
document.getElementById("basketCount").innerText = countItem;
