var newaccount = document.getElementById("newaccountbtn")
newaccount.addEventListener("click", newAccPage)
function newAccPage(){
    window.location.href = "/assets/pages/createAccount.html"
}
var usersName = (localStorage.getItem("loginDisplay2"))

const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#inputpass");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
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

    var loginCred = JSON.parse(localStorage.getItem("ZaraHomeCridentails"))


    var email = document.getElementById("inputemail")
    var pass = document.getElementById("inputpass")

    let loginBtn = document.getElementById("loginbtn")
    loginBtn.addEventListener("click", function(event){
        event.preventDefault()
        var loginEmail = email.value;
        var loginPass = pass.value;
        var check = false;
        for(var i = 0; i<loginCred.length; i++){
            if(loginCred[i].email == loginEmail && loginCred[i].password==loginPass){
                check = true
                break;

            }
            
        }
        if(check){
            alert("Login Successful ✅");
            window.location.href = "/assets/pages/zarahome.html"
            localStorage.setItem("loggedUsername", JSON.stringify(loginCred[i].name))
        }
        else{
            alert("Wrong Credinitials")
        }
    })

    document.getElementById("closingbtna").addEventListener("click", function(){
        window.location.href = "/assets/pages/zarahome.html"
    })