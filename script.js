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
