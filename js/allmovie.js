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