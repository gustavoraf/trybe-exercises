document.getElementById("header-container").style.backgroundColor = "green"
titulos = document.querySelectorAll("h3")
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "salmon"
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow"
document.querySelector("body").style.backgroundColor = "gray"
document.getElementsByTagName("footer")[0].style.backgroundColor = "darkgreen"

for (i = 0; i < 2; i += 1) {
  titulos[i].style.backgroundColor = "purple"
}

for (i = 2; i < 4; i += 1) {
  titulos[i].style.backgroundColor = "black"
}

