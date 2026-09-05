const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeIcon) {
        themeIcon.textContent = "☾";
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const isLight = document.body.classList.contains("light-mode");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        if (themeIcon) {
            themeIcon.textContent = isLight ? "☾" : "☼";
        }
    });
}