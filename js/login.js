var username=document.getElementById("username")
var password=document.getElementById("password")
var storedusername=localStorage.getItem("username")
var storedpassword=localStorage.getItem("password")
var btn=document.getElementById("btn")
function login(){
if(username.value=="" || password.value==""){
alert("you must fill all fields") 
}
else if(username.value!=storedusername || password.value!=storedpassword){
    alert("Wrong username or password")
}
else{
    location.href="index.html"
}
}
btn.addEventListener("click",login)
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