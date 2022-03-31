let productDetail=JSON.parse(localStorage.getItem("productDetail"))
let cartArray=[]||JSON.parse(localStorage.getItem("cart"))
console.log(cartArray)
let data = 
   {
    img:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/7246/022/250/7246022250_7_1_2.jpg?t=1629189677605",
    name:"JACQUARD LEAF NAPKINS (PACK OF 4)",
    price:2299,
    shortTitle: "Cotton napkins with a jacquard design in the shape of a leaf. Sold in packs of 4.",
    ref:"REF. 7246/022",
    discription: "JOIN LIFE Care for water: produced using less water. The use of closed cycles that allow water to be reused or technologies such as low bath ratio machines or mass dyeing help us to reduce water consumption in the processes of dyeing or washing garments.",
    productImg1: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/7246/022/250/7246022250_2_7_2.jpg?t=1642585108840",
    productImg2: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/7246/022/250/7246022250_2_1_2.jpg?t=1618928130161",
    productImg3: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/7246/022/250/7246022250_2_3_2.jpg?t=1618928130161"
   }
    
// append Images starts here
let imageDiv=document.getElementById('basketImages')
  appendData(data)
  
  function appendData(data)
  {
  
    let div= document.createElement('div')
    
    let image1=document.createElement('img')
    image1.src=data.productImg1
    image1.setAttribute("class","images")
    
    let image2=document.createElement('img')
    image2.src=data.productImg2
    image2.setAttribute("class","images")
    
    let image3=document.createElement('img')
    image3.src=data.productImg3
    image3.setAttribute("class","images")
    
    div.append(image1,image2,image3)
    imageDiv.append(div)
}
// append Images ends here



// description and all other information starts here
function display(data)
{



let info=document.getElementById('info')
let information=document.getElementById('information')
appendInformation(data)
function appendInformation(data)
{
    
 

 let name=document.createElement('h2')
 name.innerText=data.name;

 
 let price=document.createElement('h3')
 price.innerText=`₹  ${data.price}`;

 let ref=document.createElement('p')
 ref.innerText=data.ref
 ref.style.fontWeight="100"
 ref.style.marginLeft="15px"
 let description=document.createElement('p')
 description.innerText=data.discription;
description.style.fontWeight="100"
description.style.textAlign="justify"
description.style.marginLeft="15px"
info.append(name,price,ref,description)
}


// let spanPrice=document.getElementById('prc')
// spanPrice.innerHTML=`(₹ ${prc})`

let prc=document.getElementById('basketPrice')
let prc2=document.getElementById('basketPrice2')
let prc3=document.getElementById('basketPrice3')

prc.addEventListener("dblclick",()=>
{
  prc.style.backgroundColor="black"
  prc.style.color="white"
})
prc2.addEventListener("dblclick",()=>
{
  prc2.style.backgroundColor="black"
  prc2.style.color="white"
})

prc3.addEventListener("dblclick",()=>
{
  prc3.style.backgroundColor="black"
  prc3.style.color="white"
})

prc.addEventListener("click",()=>
{
  prc.style.backgroundColor="white"
  prc.style.color="black"
})
prc2.addEventListener("click",()=>
{
  prc2.style.backgroundColor="white"
  prc2.style.color="black"
})

prc3.addEventListener("click",()=>
{
  prc3.style.backgroundColor="white"
  prc3.style.color="black"
})

let price=document.getElementById('price1')


price.innerText=`₹ ${data.price}`
let price2=document.getElementById('price2')

price2.innerText=`₹ ${data.price}`

let price3=document.getElementById('price3')

price3.innerText=`₹ ${data.price}`

let button=document.getElementById('addToBasket')

button.addEventListener("click",()=>
{
    cartArray.push(data)
    localStorage.setItem("cart",JSON.stringify(cartArray))
    
    
})
}
display(data)
// description and all other information ends here
