// video
window.addEventListener("load", () => {
  let video = window.document.querySelector("#video");
  video.play();
  video.loop = true;
});

//temas
const btnClaro = document.getElementById("lightMode");
const btnEscuro = document.getElementById("darkMode");
const body = document.body;
body.classList.add("lightMode");
btnClaro.style.display = "inline";
btnEscuro.style.display = "none";

btnClaro.addEventListener("click", () => {
  body.classList.remove("lightMode");
  body.classList.add("darkMode");
  btnClaro.style.display = "none";
  btnEscuro.style.display = "inline";
});

btnEscuro.addEventListener("click", () => {
  body.classList.remove("darkMode");
  body.classList.add("lightMode");
  btnEscuro.style.display = "none";
  btnClaro.style.display = "inline";
});

//active
document.querySelectorAll('.navLink li').forEach((item) => {
  item.addEventListener('click', function () {
    // remove a classe active de todos os itens
    document.querySelectorAll('navLink li').forEach((li) => {
      li.classList.remove('active');
    });

    //adiciona a classe active ao item classe
    this.classList.add('active');
  });
});

//escondendo o span
document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".navBar");
  const spans = document.querySelectorAll(".navLink li a span");

  function toggleSpanVisibility() {
    if (navBar.offsetWidth > 4 * 16) { //converte 4rem em pixels
      spans.forEach((span) => {
        span.style.opacity = "0";
        span.style.opacity = "visible";
      });
    }
    else {
      spans.forEach((span) => {
        span.style.opacity = "1";
        span.style.opacity = "hidden";
      });
    }
  }
  //esconde os spans inicialmente
  toggleSpanVisibility();

  navBar.addEventListener("mouseenter", () => {
    spans.forEach((span) => {
      span.style.opacity = "1";
      span.style.opacity = "visible";
    });
  });

  navBar.addEventListener("mouseleave", () => {
    spans.forEach((span) => {
      span.style.opacity = "0";
      span.style.opacity = "hidden";
    });
  });
});


//filter
//isotopo jQuery
$(document).ready(
  function () {
    $(".grid").isotope({
      itemSelector: ".item",
    });

    $(".filterGroup").on("click", "li", function (){
      var filterValue = $(this).attr("data-filter");
      $(".grid").isotope({filter: filterValue});
      $(".filterGroup li").removeClass("active");
      $(this).addClass("active");
    });
  }
);




//inicializacao AOS fades
// AOS.init({
// duration
// });