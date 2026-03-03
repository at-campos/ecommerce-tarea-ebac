console.log("Hola mundo!");

const header = document.querySelector("header");
const cartIco = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIco.addEventListener("click", () => {
    cart.classList.toggle("show");
})