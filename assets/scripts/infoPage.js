let appendInfo = JSON.parse(localStorage.getItem("info"))
// console.log('appendInfo:', appendInfo)

appendInfo.map(function(el){
    document.getElementById("imagesBox").innerHTML="";
    document.getElementById("contentDiv").innerHTML = "";

    let div1 = document.createElement("div")
    let productImg1 = document.createElement("img");
    productImg1.src = el.img;
    let div2 = document.createElement("div")
    let productImg2 = document.createElement("img");
    productImg2.src = el.productImg1;
    let div3 = document.createElement("div")
    let productImg3 = document.createElement("img");
    productImg3.src = el.productImg2;
    let div4 = document.createElement("div")
    let productImg4 = document.createElement("img");
    productImg4.src = el.productImg3;
    let div5 = document.createElement("div");
    div5.setAttribute("id","name")
    let name = document.createElement("h4")
    name.innerText = el.name;
    let div6 = document.createElement("div");
    div6.setAttribute("id","price")
    let price = document.createElement("h5")
    price.innerText = `₹ ${el.price}`;
    let div7 = document.createElement("div");
    div7.setAttribute("id","ref")
    let ref = document.createElement("p")
    ref.innerText = el.ref;
    let div8 = document.createElement("div")
    div8.setAttribute("id", "shortTitle")
    let shortTitle = document.createElement("p")
    shortTitle.innerText = el.shortTitle
    let div9 = document.createElement("div")
    div9.setAttribute("id","disc")
    let disc = document.createElement("p")
    disc.innerText = el.discription;
   
    // if(el.shortTitle==undefined){
    //     shortTitle.innerText = null
    // }
    // if(el.disc==undefined){
    //     disc.innerText = null
    // }



    div1.append(productImg1)
    div2.append(productImg2)
    div3.append(productImg3)
    div4.append(productImg4)
    div5.append(name)
    div6.append(price)
    div7.append(ref)
    div8.append(shortTitle)
    div9.append(disc)
    
    document.getElementById("imagesBox").append(div1,div2,div3,div4);
    document.getElementById("contentDiv").append(div5)
    document.getElementById("contentDiv").append(div6)
    document.getElementById("contentDiv").append(div7)
    document.getElementById("contentDiv").append(div8)
    document.getElementById("contentDiv").append(div9)
})