const main_img = document.querySelector(".principal");
const main_img2 = document.querySelector(".principal2");
const tumbnails = document.querySelectorAll(".thumbnail");
const tumbnails2 = document.querySelectorAll(".thumbnail2");

const nav= document.querySelector("#nav");
const abrir=document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");
const inicio=document.querySelector("#inicio");
const personajes=document.querySelector("#personajes");
const deck=document.querySelector("#deck");
const red=document.querySelector("#red");

abrir.addEventListener("click", ()=>{
  nav.classList.add("visible")
})

cerrar.addEventListener("click", ()=> {
  nav.classList.remove("visible")
})

inicio.addEventListener("click", ()=> {
  nav.classList.remove("visible")
})

personajes.addEventListener("click", ()=> {
  nav.classList.remove("visible")
})

deck.addEventListener("click", ()=> {
  nav.classList.remove("visible")
})

red.addEventListener("click", ()=> {
  nav.classList.remove("visible")
})

var estado=true;

tumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {

    if (estado) {
      main_img.src = thumb.src;
      estado = false;
      console.log(estado);
    } 
    
    if(estado===false) {setTimeout(function () {
        main_img.src = "https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg?20201122212343";
        estado = true;
        console.log(estado);
      }, 3000);
    }
    
  });
});

tumbnails2.forEach((thumb) => {
  thumb.addEventListener("click", function () {

    if (estado) {
      main_img2.src = thumb.src;
      estado = false;
      console.log(estado);
    } 
    
    if(estado===false) {setTimeout(function () {
        main_img2.src = "https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg?20201122212343";
        estado = true;
        console.log(estado);
      }, 3000);
    }
    
  });
});