//Når brukeren scroller kjøres funksjonen scrollFunction
window.onscroll = function(){scrollFunction()};

//henter navbar elementet 
var navbar = document.getElementById("myNavbar")
var h = document.getElementById("title");

//henter offset posisjonen til navbar?
var sticky = navbar.offsetTop;

//set sticky classen til navbaren  når den når sin scroll posisjon. Fjerner sticky klassen når den forlater
//sin scroll posisjon
function scrollFunction(){
 if(window.pageYOffset > sticky){
     navbar.classList.add("sticky");
 }
 else{
     navbar.classList.remove("sticky");
 }
}







