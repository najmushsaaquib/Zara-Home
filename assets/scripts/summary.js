
    // cart 
    let cartCount = document.getElementById("cart");
    let cartdata = JSON.parse(localStorage.getItem("cart"))
    let total = document.getElementById("total");

    let countOfCart = ()=>{
        if(cartdata.length == 0){
            cartCount.innerText = 0
        }
        else{
            cartCount.innerText = cartdata.length
        }

    }
    
    countOfCart()
    document.getElementById("basketLength").innerText = cartdata.length
    
    let totalPrice = document.getElementById("price_total");
    let deliveryPrice = document.getElementById("delivery_charge");
    
    var deliveryCharge = `₹${20}`
    deliveryPrice.innerText=deliveryCharge
    let priceTotal = ()=>{
        var output =  cartdata.map(ele=> {
            return ele.price
        }).reduce((acc,av)=>{
            return acc+av
        })
        // console.log(output)
        totalPrice.innerText=   ` ₹ ${output}`
        let result = (20) + Math.round(output)
        // console.log(typeof(+deliveryCharge))
        total.innerText = `₹ ${result}`
    }
    priceTotal()
    
    
    
    
    
    
    
    let delivery_details = document.getElementById("billingData")
    
    var newData = JSON.parse(localStorage.getItem("data"))
    // console.log(newData)
    
    let billingName = document.createElement("h3")
    billingName.innerText= newData.name +" " + newData.surname
    
    let billingAddress = document.createElement("p")
    billingAddress.innerText= newData.address + "   " +newData.floor
    
    let billingCity = document.createElement("p")
    billingCity.innerText=newData.postcode + "    " + newData.city
    
    let billingMobile = document.createElement("p")
    billingMobile.innerText = newData.telephone
    
    delivery_details.append(billingName,billingAddress,billingCity,billingMobile)
    
    
    function myfunction(){
        
        let bill_details = document.getElementById("bill_details")
        
        var newData = JSON.parse(localStorage.getItem("data"))
        // console.log(newData)
        
        let billingName = document.createElement("h3")
        billingName.innerText=newData.name +" " + newData.surname
        
    let billingAddress = document.createElement("p")
    billingAddress.innerText= newData.address + "   " +newData.floor

    let billingCity = document.createElement("p")
    billingCity.innerText=newData.postcode + "    " + newData.city

    let billingMobile = document.createElement("p")
    billingMobile.innerText = newData.telephone


    bill_details.append(billingName,billingAddress,billingCity,billingMobile)
    }
    myfunction()

    let upper_delivery = document.getElementById("upper-delivery").addEventListener("click",()=>{
        window.location.href="delivery.html"
    })

    let upper_payment = document.getElementById("upper-payment").addEventListener("click",()=>{
        window.location.href="payment.html"
    })



var data = JSON.parse(localStorage.getItem("cardData"))

function appendingData(){


    let card_number = document.getElementById("card_number")
    card_number.textContent=data.cardNumber
    
    let cardName = document.getElementById("card_name")
    cardName.innerText = data.cardName

    let card_month = document.getElementById("card_month")
    card_month.innerText = data.card_month + " /"

    let card_year = document.getElementById("card_year")    
    card_year.innerText = data.card_year


}
let Data = JSON.parse(localStorage.getItem("cart"))
appendingData()
let cartimage = document.querySelector(".cartitems")
appendImage(Data)



function appendImage(data){
  cartimage.innerHTML=""

   data.forEach(element => {
    let div = document.createElement("div")

   let image1=document.createElement('img')
   image1.setAttribute("id","summary_Image")
    image1.src=element.img

    div.append(image1)

    cartimage.append(div)
   });
    
}




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("upper").style.background = "#999999"
//   modal.style.background = "lightgrey"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.href="/index.html"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // modal.style.background= "lightgrey";
  }
}

