
// -------------------------Dark Mode------------------------

let DarkMode = document.querySelector(".darkMode .fa-moon");

let AllElement = document.querySelectorAll("*");

DarkMode.addEventListener("click", () => {
    
  AllElement.forEach((el) => {
    el.classList.toggle("DarkMode");
  })

  Menu.classList.toggle("IconColor");
  DarkMode.classList.toggle("IconColor");
  DarkMode.classList.toggle("fa-moon");
  DarkMode.classList.toggle("fa-sun");
})

//   ---------------------end-----------------------

// ----------------------Slider-------

let Menu = document.querySelector(".menu .fa-bars");
let Slid = document.querySelector(".Slider");
Menu.addEventListener("click", () => {
  Slid.classList.toggle("HideSlider");
  Menu.classList.toggle("fa-bars");
  Menu.classList.toggle("fa-xmark");
})

// -------------hide Slider at click on the li-----------

let li = document.querySelectorAll(".Slider ul li");
li.forEach((e) => {
  e.addEventListener("click", () => {
    Slid.classList.toggle("HideSlider");
    Menu.classList.toggle("fa-bars");
    Menu.classList.toggle("fa-xmark");
  })
})


let Mss = document.querySelector("form .btn");
console.log(Mss);
Mss.addEventListener("click", () => {
  
  alert("Your Response have Sumbmitted❤️");
  Mss.reset();
})