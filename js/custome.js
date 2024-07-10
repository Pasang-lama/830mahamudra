var header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled")
    }
})