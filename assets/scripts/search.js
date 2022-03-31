let searchResult = document.getElementById("searchResults")
let keywords = JSON.parse(localStorage.getItem("search_Term"))||[]
// console.log('keywords:', keywords)

function showItems(keywords){
    document.querySelector("#searchResults").innerHTML = "";
    keywords.forEach(function(el){
        let div = document.createElement("div")
        div.setAttribute("class", "searchResultDiv")
        let div1 = document.createElement("div");
        div1.setAttribute("class", "searchResultInfo")

        let productImg = document.createElement("img");
        productImg.src = el.img;
        let productName = document.createElement("h5")
        productName.innerText = el.name;
        let productPrice = document.createElement("p")
        productPrice.innerText = `₹ ${el.price}`;
        let infoBtn = document.createElement("button")
        infoBtn.setAttribute("class","infoBtn")
        infoBtn.addEventListener("click",function(){
            let arr = [];
            arr.push(el)
            localStorage.setItem("info",JSON.stringify(arr))
            window.location.href = "/assets/pages/info-page.html"
        })
        infoBtn.innerText = "➡See Information⬅";
        div1.append(productImg,productName,productPrice,infoBtn)
        div.append(div1)
        searchResult.append(div)
    })
}


function searchText(){
   
    let text = document.getElementById("searchBar").value.toUpperCase().trim();
    // console.log('text:', text)
    let fillerData = keywords.filter(function(e,index){
        return e.name.toUpperCase().includes(text);
    });
    // console.log(fillerData);

    showItems(fillerData)

    if(text==""){
        document.querySelector("#searchResults").innerHTML = "";
    }
    if(fillerData.length == 0){
        document.querySelector("#searchResults").innerHTML = `No results found for the term "${text}".`;
    }
}
// showItems(fillerData)