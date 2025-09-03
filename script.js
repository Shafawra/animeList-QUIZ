const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


const btnTheme = document.getElementById("btnTheme")
const body = document.body;

btnTheme.addEventListener("click", () => {
    document.body.style.background = "#222";
    document.body.style.color = "whitesmoke"
})

let btnHeader = document.querySelectorAll(".btnHeader");
let icon = document.querySelectorAll(".icon");
let desc = document.querySelectorAll(".faq-content");

btnHeader.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        desc[i].classList.toggle("max-h-0");
        disc[i].classList.toggle("max-h-fit");
    });
})



