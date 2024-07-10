var username=document.getElementById("username")
var email=document.getElementById("email")
var password=document.getElementById("password")
var repassword=document.getElementById("repassword")
var btn=document.getElementById("btn")
var Rex = /\w{3,}@\w{2,}.\w{2,}/i;
function register(event){
    if(username.value=="" || email.value=="" || password.value=="" || repassword.value==""){
        alert("All fields are required")}
    else if(!Rex.test(email.value)){
        alert("Enter correct email")
    }
    else if(password.value==repassword.value){
        localStorage.setItem("username",username.value)
        localStorage.setItem("password",password.value)
        alert("sign up Success")
        location.href="login.html"
    }
    else if(password.value!=repassword.value){
        alert("incorrect password conformation!")
    }
}

btn.addEventListener("click",register)
var bars = document.getElementById("bars");
var dropd = document.querySelector(".dropd");
console.log(bars, dropd);
bars.addEventListener("click", show);
function show() {

  if (dropd.style.display == "block") {
    dropd.style.display = "none";
  } else {
    dropd.style.display = "block";
  }
}