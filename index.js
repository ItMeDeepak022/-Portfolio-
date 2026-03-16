
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


function formSubmit(e) {
  e.preventDefault()
  let obj = {
    name: e.target.name.value,
    email: e.target.email.value,
    mobileNo: e.target.mobileNo.value,
    message: e.target.message.value,
  }


   fetch("https://portfolio-backend-deploy-nu.vercel.app/Info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(data => {
       if(data.status){
        alert(data.message)
        e.target.reset()
       }
       else{
        alert(data.message)
       }
    })


    .catch(err => console.log(err));

}

document.querySelector("body").addEventListener("contextmenu", (e) => {
  e.preventDefault();

});