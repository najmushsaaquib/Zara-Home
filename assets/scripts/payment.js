
    let imgdata = [
        {
            img : "https://static.zarahome.net/8/static4/itxwebstandard/images/payment/web/1.svg?20220331021008"
        },
        {
            img : "https://static.zarahome.net/8/static4/itxwebstandard/images/payment/web/2.svg?20220331021008"
        },
        {
            img : "https://static.zarahome.net/8/static4/itxwebstandard/images/payment/web/3.svg?20220331021008"
        },
        {
            img : "https://static.zarahome.net/8/static4/itxwebstandard/images/payment/web/8.svg?20220331021008"
        },
        {
            img : "https://static.zarahome.net/8/static4/itxwebstandard/images/payment/web/17.svg?20220331021008"
        },
        {
            img : "https://static.zarahome.net/8/static4/itxwebstandard/images/payment/web/90.svg?20220331021008"
        },

        
    ]

    // cart total price
    let cartCount = document.getElementById("cart");
    let data = JSON.parse(localStorage.getItem("cart"))
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
        // document.getElementById("price_here").innerText= ` ₹ ${output}`
        let result = (20) + Math.round(output)
        // console.log(typeof(+deliveryCharge))
        total.innerText = `₹ ${result}`
    }
priceTotal()



        imgdata.forEach(elem => {
            let imgdiv = document.createElement("div")
            
            let image= document.createElement("img")
            image.setAttribute("src",elem.img)
            
            imgdiv.addEventListener("click",()=>{
            
            imgdiv.setAttribute("id","border")
            //    console.log(imgdiv)
            document.getElementById("card-details").style.display="flex"

            })

            imgdiv.append(image)

            let main = document.getElementById("image-pay")
            main.append(imgdiv)

        });

        function myfun(){

        let entered_number =document.getElementById("entered_number").value
        let entered_name = document.getElementById("entered_name").value
        let entered_month = document.getElementById("month").value
        let entered_year = document.getElementById("year").value
        let entered_cvv = document.getElementById("cvv").value
       

        //  console.log(entered_number)
        let card_number = document.getElementById("card_number")
        card_number.textContent=`${entered_number}`
        
        
        let cardName = document.getElementById("card_name")
        cardName.innerText = `${entered_name}`

        let card_month = document.getElementById("card_month")
        card_month.innerText = `${entered_month + "/"}`

        let card_year = document.getElementById("card_year")    
        card_year.innerText = `${entered_year}`


        var obj = {
            cardNumber : entered_number,
            cardName :entered_name,
            card_month:entered_month,
            card_year:entered_year,
            enteredCvv:entered_cvv

        }

        console.log(obj)

        var cardData = localStorage.setItem("cardData",JSON.stringify(obj))
        }


        


    let btn = document.getElementById("btn").addEventListener("click",()=>{


        let entered_number =document.getElementById("entered_number").value
        let entered_name = document.getElementById("entered_name").value
        let entered_month = document.getElementById("month").value
        let entered_year = document.getElementById("year").value
        let entered_cvv = document.getElementById("cvv").value


        if(entered_number!="" && entered_name!="" && entered_year!="" && entered_month!="" && entered_cvv!=""  ) window.location.href="summary.html"


        else{
            alert("Check the card details that You have entered")
        }
    })



    let upper_delivery = document.getElementById("upper-delivery").addEventListener("click",()=>{
        window.location.href="delivery.html"
    })
