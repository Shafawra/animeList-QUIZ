const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const btnTheme = document.getElementById("btnTheme").addEventListener("click", () => {
    document.body.style.background = "#1F2937";

    if (btnTheme.innerHTML === "☀️") {
        btnTheme.innerHTML = "🌒";
      } else {
        btnTheme.innerHTML = "☀️";
      }
})
