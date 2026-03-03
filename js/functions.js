console.log("Hola mundo!");

const header = document.querySelector("header");
const cartIco = header.lastElementChild;
const cart = document.querySelector(".cart");

const removeIco = document.querySelectorAll(".remove");

cartIco.addEventListener("click", () => {
    cart.classList.toggle("show");
})


removeIco.forEach(el => {
    el.addEventListener("click", () => {
        const elParent = el.parentElement;
        elParent.remove();
    })
})