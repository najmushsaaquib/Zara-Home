

    let data = JSON.parse(localStorage.getItem("cart"))
    console.log(data)
    let cartCount = document.getElementById("cart");
    let total = document.getElementById("total");

    let countOfCart = ()=>{
        if(data.length == 0){
            cartCount.innerText = 0
        }
        else{
            cartCount.innerText = data.length
        }

    }
    countOfCart()
    document.getElementById("basketLength").innerText = data.length


  


    let totalPrice = document.getElementById("price_total");

    let deliveryPrice = document.getElementById("delivery_charge");

    var deliveryCharge = `₹ ${20}`

    deliveryPrice.innerText=deliveryCharge
    let priceTotal = ()=>{
       var output =  data.map(ele=> {
            return ele.price
        }).reduce((acc,av)=>{
            return acc+av
        })
        // console.log(output)
        totalPrice.innerText=   ` ₹ ${output}`

        document.getElementById("price_here").innerText= ` ₹ ${output}`

        let result = (20) + Math.round(output)
        // console.log(typeof(+deliveryCharge))
        total.innerText = `₹ ${result}`
    }
priceTotal()





    let btn = document.getElementById("btn").addEventListener("click",()=>{
     let entered_name = document.getElementById("name").value
    let entered_address = document.getElementById("address").value
    let entered_floor = document.getElementById("floor").value
    let entered_city = document.getElementById("city").value
    let entered_email = document.getElementById("email").value
    let entered_surname = document.getElementById("surname").value
    let entered_postcode= document.getElementById("Postcode").value
    let entered_telephone = document.getElementById("mobileNumber").value

    var data = {
        name : entered_name,
        address : entered_address,
        floor : entered_floor,

        city : entered_city,
        email : entered_email,
        surname : entered_surname,
        postcode : entered_postcode,
        telephone : entered_telephone
    }
        localStorage.setItem("data",JSON.stringify(data)) 

    if(entered_name==""||entered_address==""||entered_floor=="" || entered_city=="" || entered_email=="" || entered_surname=="" || entered_postcode=="" ||entered_telephone==""){
        alert("Make sure you fill all the given input tags with correct information")
    }
    else{
        // alert("continue")
        window.location.href="./Payment.html"
    }

    })

    let delivery_details = document.getElementById("delivery_details")

    var newData = JSON.parse(localStorage.getItem("data"))
    // console.log(newData)

    let billingName = document.createElement("p")
    billingName.innerText=newData.surname +" " + newData.name

    let billingAddress = document.createElement("p")
    billingAddress.innerText= newData.address + "   " +newData.floor

    let billingCity = document.createElement("p")
    billingCity.innerText=newData.postcode + "    " + newData.city

    let billingMobile = document.createElement("p")
    billingMobile.innerText = newData.telephone

    delivery_details.append(billingName,billingAddress,billingCity,billingMobile)

    let upper_delivery = document.getElementById("upper-delivery").addEventListener("click",()=>{
        window.location.href="./delivery.html"
    })


