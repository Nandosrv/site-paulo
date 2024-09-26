function toggleNav() {
    const menu = document.getElementById("menu");
    const icon = document.getElementById("icon");
    const content = document.getElementById("content");

    // Alterna a classe 'visible' no menu
    menu.classList.toggle("visible");

    // Alterna o ícone entre 'fa-bars-staggered' e 'fa-times'
    if (menu.classList.contains("visible")) {
        icon.classList.remove("fa-bars-staggered");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars-staggered");
    }
}

// Fecha o menu ao clicar fora dele
window.onclick = function(event) {
    const menu = document.getElementById("menu");
    const navBtn = document.getElementById("nav-btn");

    // Verifica se o clique foi fora do menu e do botão
    if (!menu.contains(event.target) && !navBtn.contains(event.target)) {
        menu.classList.remove("visible");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars-staggered");
    }
};
