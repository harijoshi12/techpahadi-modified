

var login = document.getElementById("login")
var register = document.getElementById("register")
var btn = document.getElementById("btn")
var login_btn = document.getElementById("login_btn")
var register_btn = document.getElementById("register_btn")

login_btn.addEventListener("click", function(){
    login.style.left = "50px"
    register.style.left = "450px"
    btn.style.left = "0px"
})

register_btn.addEventListener("click", function(){
    login.style.left = "-400px";
    register.style.left = "50px";
    btn.style.left = "110px";
})
