let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let dataArr = JSON.parse(localStorage.getItem("productDetail"));
let data = dataArr[0];
console.log(dataArr);
// append Images starts here
let imageDiv = document.getElementById("basketImages");
appendData(data);

function appendData(data) {
  let div = document.createElement("div");

  let image1 = document.createElement("img");
  image1.src = data.productImg1;
  image1.setAttribute("class", "images");

  let image2 = document.createElement("img");
  image2.src = data.productImg2;
  image2.setAttribute("class", "images");

  let image3 = document.createElement("img");
  image3.src = data.productImg3;
  image3.setAttribute("class", "images");

  div.append(image1, image2, image3);
  imageDiv.append(div);
}
// append Images ends here

// description and all other information starts here
function display(data) {
  let info = document.getElementById("info");
  let information = document.getElementById("information");
  appendInformation(data);

  function appendInformation(data) {
    let name = document.createElement("h2");
    name.innerText = data.name;

    let price = document.createElement("h3");
    price.innerText = `₹  ${data.price}`;

    let ref = document.createElement("p");
    ref.innerText = data.ref;
    ref.style.fontWeight = "100";
    ref.style.marginLeft = "15px";
    let description = document.createElement("p");
    description.innerText = data.description;
    description.style.fontWeight = "100";
    description.style.textAlign = "justify";
    description.style.marginLeft = "15px";
    info.append(name, price, ref, description);
  }

  // let spanPrice=document.getElementById('prc')
  // spanPrice.innerHTML=`(₹ ${prc})`

  let prc = document.getElementById("basketPrice");
  let prc2 = document.getElementById("basketPrice2");
  let prc3 = document.getElementById("basketPrice3");

  prc.addEventListener("dblclick", () => {
    prc.style.backgroundColor = "black";
    prc.style.color = "white";
  });
  prc2.addEventListener("dblclick", () => {
    prc2.style.backgroundColor = "black";
    prc2.style.color = "white";
  });

  prc3.addEventListener("dblclick", () => {
    prc3.style.backgroundColor = "black";
    prc3.style.color = "white";
  });

  prc.addEventListener("click", () => {
    prc.style.backgroundColor = "white";
    prc.style.color = "black";
  });
  prc2.addEventListener("click", () => {
    prc2.style.backgroundColor = "white";
    prc2.style.color = "black";
  });

  prc3.addEventListener("click", () => {
    prc3.style.backgroundColor = "white";
    prc3.style.color = "black";
  });

  let price = document.getElementById("price1");

  price.innerText = `₹ ${data.price}`;
  let price2 = document.getElementById("price2");

  price2.innerText = `₹ ${data.price}`;

  let price3 = document.getElementById("price3");

  price3.innerText = `₹ ${data.price}`;

  let button = document.getElementById("addToBasket");

  function check(cartArr, el) {
    for (let i = 0; i < cartArr.length; i++) {
      if (el.name == cartArr[i].name) {
        return true;
      }
    }
    return false;
  }

  console.log(data);

  data.count = 1;
  button.addEventListener("click", () => {
    if (check(cartArray, data)) {
      console.log(data);
      data.count++;
      console.log("IF chala?")
      localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
      cartArray.push(data);
      console.log("else bhi chal gaya?")
      localStorage.setItem("cart", JSON.stringify(cartArray));
      let basket = document.getElementById("basketCount");
      let count = JSON.parse(localStorage.getItem("cart")).length;
      basket.innerHTML = `(${count})`;
    }
    // alert("Item added to basket")
  });
}

display(data);
// description and all other information ends here
