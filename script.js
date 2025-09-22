document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("userMenuBtn");
    const menu = document.getElementById("userMenu");

    btn.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = menu.classList.contains("opacity-100");
        if (isOpen) {
            menu.classList.remove("opacity-100", "scale-100");
            menu.classList.add("opacity-0", "pointer-events-none", "scale-95");
        } else {
            menu.classList.remove("opacity-0", "pointer-events-none", "scale-95");
            menu.classList.add("opacity-100", "scale-100");
        }
    });

    document.addEventListener("click", function (e) {
        if (!menu.classList.contains("opacity-0")) {
            menu.classList.remove("opacity-100", "scale-100");
            menu.classList.add("opacity-0", "pointer-events-none", "scale-95");
        }
    });

    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});