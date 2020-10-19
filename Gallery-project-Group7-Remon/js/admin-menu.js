/*Menu*/
function menu() {
  var start = document.getElementById("side-bar");
  if (start.style.transform == "translate3d(0px, 0px, 0px)") {
    start.style.transform = "translate3d(-200px, 0px, 0px)";
  } else {
    start.style.transform = "translate3d(0px, 0px, 0px)";
  }
}
