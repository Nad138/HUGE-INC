document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);



function addImages(){
var tablero = document.getElementById("tablero");
var ul = document.createElement("ul");
var li = document.createElement("li");
var div = document.createElement("div");
var figure = document.createElement("figure");
var coder = document.createElement("img");
var nombreBox = document.createElement("figcaption");
var nombre = document.createElement("span");

tablero.appendChild(ul);
ul.appendChild(li);
li.appendChild(div);
div.appendChild(figure);
for(var i=1;i<55;i++){
coder.setAttribute("src","assets/img/students/"+i+".png");

figure.appendChild(coder);
figure.appendChild(nombreBox);
nombreBox.appendChild(nombre);

  }
}

addImages();
