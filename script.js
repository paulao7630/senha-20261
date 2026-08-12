document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-btn");
    const actionBtn = document.getElementById("action-btn");

    // Lógica para alternar o tema escuro/claro
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
        });
    }

    // Ação do botão principal
    if (actionBtn) {
        actionBtn.addEventListener("click", () => {
            alert("Ambiente funcionando perfeitamente no Vercel! 🚀");
        });
    }
});

