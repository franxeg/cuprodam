document.querySelector('.hambur').addEventListener('click', anime);
var linea = document.querySelector(".linea");
var lineb = document.querySelector(".lineb");
var linec = document.querySelector(".linec");
var menu = document.querySelector(".menu");
var resp = document.querySelector(".responsive_ul");

function anime(){
    linea.classList.toggle("activelinea");
    lineb.classList.toggle("activelineb");
    linec.classList.toggle("activelinec");
    menu.classList.toggle("activelineb");
    resp.classList.toggle("activedisp");
}