let flag;
const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log("hii");
    return data;
  } catch (err) {
    console.log(err);
  }
};

function defaultAppend(data, parent) {
  parent.innerHTML = null;
  parent.style.display = "grid";
  parent.style.gridTemplateColumns = "auto auto";
  data.map((el) => {
    let div = document.createElement("div");
    div.id = "oneMainDiv";
    div.addEventListener("click", function () {
      takeMe(el);
    });
    let imgDiv = document.createElement("div");
    imgDiv.id = "imgDiv";
    let image = document.createElement("img");
    image.src = el.img;
    let nam = document.createElement("p");
    nam.textContent = el.name;
    nam.id = "productName";
    let price = document.createElement("p");
    price.textContent = `₹ ${el.price}`;
    price.id = "price";

    imgDiv.append(image);
    div.append(imgDiv, nam, price);
    parent.append(div);
  });
  document.querySelector("#item-length").innerText = `${data.length} ITEMS`;
}

function storeSingleItem(el) {}

function showOneGrid(data, parent) {
  console.log("hii");

  parent.innerHTML = null;
  parent.style.display = "grid";
  parent.style.gridTemplateColumns = "auto";
  // parent.style.imgWidth="100%"
  data.map((el) => {
    let div = document.createElement("div");
    div.id = "oneDiv";
    div.addEventListener("click", function () {
      takeMe(el);
    });

    let image = document.createElement("img");
    image.src = el.img;
    let nam = document.createElement("p");
    nam.textContent = el.name;
    nam.id = "productNameOne";
    let price = document.createElement("p");
    price.textContent = `₹ ${el.price}`;
    price.id = "price";

    div.append(image, nam, price);
    parent.append(div);
  });
  document.querySelector("#item-length").innerText = `${data.length} ITEMS`;
}

//!  Function to append data in the main body ends here

// ! Funtion to Show one grid element starts here
function showOne(data, container) {
  let one = document.querySelector("#one");
  one.addEventListener("click", () => {
    flag = true;
    showOneGrid(data, container);
  });
}
// ! Funtion to Show one grid element ends here

// ! Funtion to Show two grid element starts here

function showTwo(data, container) {
  let two = document.querySelector("#two");
  two.addEventListener("click", () => {
    console.log("hii");
    flag = false;
    defaultAppend(data, container);
  });
}

// ! Funtion to Show two grid element ends here

// ! function to open and close filter sides starts here
function openFilterSide() {
  var openFilter = document.querySelector("#open-filter");
  openFilter.addEventListener("click", loginOpen);
  function loginOpen() {
    var closeFilter = document.querySelector("#closelogin");
    var loginArea = document.querySelector("#loginside");
    loginArea.classList.add("loginactive");
  }
}

function closeFilterSide() {
  var closeFilter = document.querySelector("#close");
  closeFilter.addEventListener("click", loginClose);
  function loginClose() {
    var loginArea = document.querySelector("#loginside");
    loginArea.classList.remove("loginactive");
    //closeFilter.style.display = "none"
  }
}
// ! function to open and close filter sides starts here

// ! Sorting functionality Starts here
function sortLow(data, container) {
  let low = document.querySelector("#lowest");
  low.addEventListener("click", () => {
    console.log("Hello");

    data.sort((a, b) => {
      return a.price - b.price;
    });

    if (flag === true) {
      showOneGrid(data, container);
    } else {
      defaultAppend(data, container);
    }
  });
}

function sortHigh(data, container) {
  let high = document.querySelector("#highest");
  high.addEventListener("click", () => {
    console.log("High");

    data.sort((a, b) => {
      return b.price - a.price;
    });
    // defaultAppend(data, container);
    if (flag === true) {
      showOneGrid(data, container);
    } else {
      defaultAppend(data, container);
    }
  });
}

function resetFilter() {
  document.querySelector("#clear").addEventListener("click", () => {
    location.reload();
  });
}
// ! Sorting functionality ends here

// ! Function for getting  Data for HTML

function mainHtml() {
  return `<div id="filter">
  <div id="items">
    <span id="item-length" > </span>
  </div>
  <div id="view">
    <span style="font-size: 12px">VIEW</span>
    <span id="one">1</span>
    <span id="two">2</span>
  </div>
  <div id="filterText">
    <span id="open-filter" > +FILTERS </span>
  </div>
</div>

<div id="productContainer"></div>


<div id="loginside">
  <div id="fil">
    <p class="sideP">FILTERS</p>
  </div>
  <div id="FilterPrice">
    <p class="sidePrice">BY PRICE</p>
  </div>
  <div id="h2l">
    <div class="lableDiv" >
      <input
        type="radio"
        id="highest"
        name="fav_language"
        value="Highest"
      />
      <span class="lable-css">HIGHEST</span>
    </div>
    <div class="lableDiv" >
      <input type="radio" id="lowest" name="fav_language" value="Lowest" />
      <span class="lable-css">LOWEST</span>
    </div>
  </div>
  
  <div id="lowerDiv">
    <div id="clear">
      <button id="clearBtn">Reset</button>
    </div>
    <div id="close">
      <button>Close</button>
    </div>
  </div>
</div>
`;
}
// ! Function for getting  Data for HTML

// localStorage.clear()


export {
  mainHtml,
  getData,
  showOne,
  showTwo,
  openFilterSide,
  closeFilterSide,
  sortLow,
  sortHigh,
  resetFilter,
  defaultAppend,
  showOneGrid,
  storeSingleItem,
};
