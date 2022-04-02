const togglePassword = document.querySelector("#togglePassword");
        // const password = document.querySelector("#inputpass");

        // togglePassword.addEventListener("click", function () {
        //     // toggle the type attribute
        //     const type = password.getAttribute("type") === "password" ? "text" : "password";
        //     password.setAttribute("type", type);
            
        //     // toggle the icon
        //     this.classList.toggle("bi-eye");
        // });


        const togglePassword2 = document.querySelector("#togglePassword2");
        const password2 = document.querySelector("#signpassword");

        togglePassword2.addEventListener("click", function () {
            // toggle the type attribute
            const type = password2.getAttribute("type") === "password" ? "text" : "password";
            password2.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });
        

// function myFunction() {
//   let x = document.getElementById("inputpass");
// //   var x = document.getElementById("signpassword");
//   if (x.type === "password") {
//     x.type = "text";
   
//   } else {
//     x.type = "password";
   
//   }

// }
function myFunction2() {

  var x = document.getElementById("signpassword");
  if (x.type === "password") {
    x.type = "text";
   
  } else {
    x.type = "password";
   
  }

}





var users = JSON.parse(localStorage.getItem("ZaraHomeCridentails")) || []

var signname = document.getElementById("signname");
var signemail = document.getElementById("signemail");
var signpassword = document.getElementById("signpassword")

// signupbutton------------------------------------------------//
var createaccount = document.getElementById("createaccount")
var loginbtn = document.getElementById("loginbtn")

// signup call function--------------------------//
createaccount.addEventListener("click", signupdata)

// login call function----------------------//


function signupdata(e) {
    e.preventDefault()
   
    if (signname.value == "" || signemail.value == "" || signpassword.value == "") {
        alert("Invalid Credentials.⚠")
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
        alert("User Registration Successfull!! Please Login")
        window.location.href = "/assets/pages/signup.html"
        // checkuserdata(users)
    }


}
document.getElementById("closingbtn1").addEventListener("click", function(){
    window.location.href = "/assets/pages/signup.html"
})