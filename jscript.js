let btn = document.getElementById("btn");
let navbar = document.getElementById("nav-bar");
let head = document.querySelector(".host");

btn.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
    // btn.classList.toggle('active');
})
const text = "Welcome to my preview page. Hope you enjoy.";

let index = 0;

function writeText() {
    head.innerText = text.slice(0, index);
    index++
    if (index > text.length){
        index = 0
        console.log(index);
    }
}
setInterval(writeText, 100)
console.log(index);