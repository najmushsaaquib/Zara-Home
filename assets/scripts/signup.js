var usersName = (localStorage.getItem("loginDisplay2"))
// modallogin.innerHTML = usersName;
//show password function--------------------------------------------------------------------------//

      const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#inputpass");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        const togglePassword2 = document.querySelector("#togglePassword2");
        const password2 = document.querySelector("#signpassword");

        togglePassword2.addEventListener("click", function () {
            // toggle the type attribute
            const type = password2.getAttribute("type") === "password" ? "text" : "password";
            password2.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });












function myFunction() {
  let x = document.getElementById("inputpass");
//   var x = document.getElementById("signpassword");
  if (x.type === "password") {
    x.type = "text";
   
  } else {
    x.type = "password";
   
  }

}
function myFunction2() {

  var x = document.getElementById("signpassword");
  if (x.type === "password") {
    x.type = "text";
   
  } else {
    x.type = "password";
   
  }

}

    // sign in part-------------------------------------------------------------------------------------//

let modallogin = document.getElementById("modallogin")
let modallgOut = document.getElementById("modallgOut")
let closebtn = document.getElementById("closingbtna")

let modalbox = document.getElementById("modalbox")

modallgOut.addEventListener("click",signOut)
modallogin.addEventListener("click", openmodal)

closebtn.addEventListener("click", closemodal)

window.addEventListener("click", outsideclick)


function openmodal() {
    console.log("dhhfiut")
    modalbox.style.display = "block"
}

function closemodal() {

    modalbox.style.display = "none"
}
function outsideclick(e) {
    if (e.target == modalbox) {
        modalbox.style.display = "none"
    }
}

// signup part----------------------------------------------------------------------//

let newaccountbtn = document.getElementById("newaccountbtn")

let closebtn1 = document.getElementById("closingbtn1")

let modalbox1 = document.getElementById("modalbox1")





newaccountbtn.addEventListener("click", openmodal1)

closebtn1.addEventListener("click", closemodal1)
window.addEventListener("click", outsideclick1)


function openmodal1() {

    modalbox1.style.display = "block";
    modalbox.style.display = "none";

}
function closemodal1() {

    modalbox1.style.display = "none";
    modalbox.style.display = "block";
}

function outsideclick1(e) {
    if (e.target == modalbox1) {
        modalbox1.style.display = "none"
    }
}















var users = JSON.parse(localStorage.getItem("ZaraHomeCridentails")) || []

// readsignup data values---------------------------------------------------//

let signname = document.getElementById("signname");
let signemail = document.getElementById("signemail");
let signpassword = document.getElementById("signpassword")

let signname1 = document.getElementById("signname1");
let signemail1 = document.getElementById("signemail1");
let signpassword1 = document.getElementById("signpassword1")


// signupbutton------------------------------------------------//
let createaccount = document.getElementById("createaccount")
let createaccount1 = document.getElementById("createaccount1")
// loginbutton-------------------------------------------//
let loginbtn = document.getElementById("loginbtn")

// signup call function--------------------------//
createaccount.addEventListener("click", signupdata)
createaccount1.addEventListener("click", signupdata1)
// login call function----------------------//
loginbtn.addEventListener("click", logindata)




function signupdata(e) {
    e.preventDefault()
   
    if (signname.value == "" || signemail.value == "" || signpassword.value == "") {
        alert("invalid credentials")
    } else {
        let userdetails = {

            name: signname.value,
            email: signemail.value,
            password: signpassword.value
        }
        users.push(userdetails)
        console.log(users)
        localStorage.setItem("ZaraHomeCridentails", JSON.stringify(users))
        // modalbox.style.display = "none";
        alert("Account Created, please Sign-in")
        window.location.reload()
        // checkuserdata(users)
    }


}

function signupdata1(e) {
    e.preventDefault()
   
    if (signname1.value == "" || signemail1.value == "" || signpassword1.value == "") {
        alert("invalid cridentials")
    } else {
        let userdetails = {

            name: signname1.value,
            email: signemail1.value,
            password: signpassword1.value
        }
        users.push(userdetails)
        console.log(users)
        localStorage.setItem("ZaraHomeCridentails", JSON.stringify(users))
        modalbox.style.display = "none";
        // checkuserdata1(users)
    }


}

//------------------Username Show----------------//
// var usersName = (localStorage.getItem("loginDisplay2"))
        // modallogin.innerHTML = usersName;
//----------------------------------------------//
function logindata(e) {
    e.preventDefault()
    let count = 0;
    let inputemail = document.getElementById("inputemail").value;
    let inputpass = document.getElementById("inputpass").value;
       let flag = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email !== inputemail || users[i].password !== inputpass) {
            count++;
            if (count == users.length) {
                alert("Login failed");
            }
        } else {

            modallogin.innerHTML = users[i].name;
            // localStorage.setItem("loginDisplay", users[i].name);
            localStorage.setItem("loginDisplay2", ( users[i].name))
            
            modallogin.innerHTML = usersName;
            modalbox.style.display = "none";
            
            // let countItem = localStorage.getItem("countItem") || 0;
            // document.getElementById("basketCount").innerText = countItem;
            // window.location.href="Success.html"
          flag = true
        }

    }if(flag){
        alert("login Success")
        window.location.reload()
    }

}

if(usersName==null){
    modallogin.innerHTML = "LOG-IN";
}else{
    modallogin.innerHTML = usersName; 
}


function signOut(){
    localStorage.removeItem("loginDisplay2")
    window.location.reload()
}


// function checkuserdata(users) {

//     users.forEach(ele => {

//         if (ele.name == signname.value && ele.password == signpassword.value) {

//             modallogin.innerHTML=ele.name;
//             modalbox1.style.display = "none";
//         }
//     });
// }



// function checkuserdata1(users) {

//     users.forEach(ele => {

//         if (ele.name == signname1.value && ele.password == signpassword1.value) {

//             modallogin.innerHTML=ele.name;
//             modalbox2.style.display = "none";
//         }
//     });
// }
