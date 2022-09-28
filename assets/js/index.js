//CODIGO PARA EL CAROUSEL
const carousel = document.querySelector("#carousel");
let sliderSection = document.querySelectorAll(".slider-div");
let sliderLast = sliderSection[sliderSection.length -1];

const leftBtn = document.querySelector("#btn-left");
const rightBtn = document.querySelector("#btn-right");

carousel.insertAdjacentElement('afterbegin', sliderLast);

function moveRight(){
    let sliderSectionFirst = document.querySelectorAll(".slider-div")[0];
    carousel.style.marginLeft = "-200%";
    carousel.style.transition = "all 0.5s";
    setTimeout(function(){
        carousel.style.transition = "none";
        carousel.insertAdjacentElement('beforeend', sliderSectionFirst)
        carousel.style.marginLeft = "-100%";
    }, 500);
}


rightBtn.addEventListener('click', function(){
    moveRight();
});

function moveLeft(){
    let sliderSection = document.querySelectorAll(".slider-div");
    let sliderLast = sliderSection[sliderSection.length -1];
    carousel.style.marginLeft = "0";
    carousel.style.transition = "all 0.5s";
    setTimeout(function(){
        carousel.style.transition = "none";
        carousel.insertAdjacentElement('afterbegin', sliderLast)
        carousel.style.marginLeft = "-100%";
    }, 500);
}

leftBtn.addEventListener('click', function(){
    moveLeft();
});

setInterval(function(){
    moveRight();
}, 5000);
            //FIN DEL CODIGO DE CAROUSEL



//CODIGO PARA EL BOTON SUBIR
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".go-top-container")
        .classList.add("show");
    }else{
        document.querySelector(".go-top-container")
        .classList.remove("show");
    }
}

document.querySelector(".go-top-container")
.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// console.log(document.documentElement.scrollTop)
// utilizar esta linea para ver cuantos pixeles ha bajado

//FIN DEL CODIGO PARA EL BOTON SUBIR