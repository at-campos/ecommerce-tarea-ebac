console.log("Hola mundo!");

const header = document.querySelector("header");
const cartIco = header.lastElementChild;
const cart = document.querySelector(".cart");
const menuIco = header.firstElementChild;
const menu = document.querySelector(".sideMenu");
const menuCloseIco = document.querySelector(".sideMenu__closeIco");
const cartProducts = cart.querySelector(".cart__products");
let removeIco = document.getElementsByClassName("remove");
const addButton = document.querySelectorAll(".products__button");
const allButtons = document.querySelectorAll("button");

let cartBadge = document.createElement("span");
cartBadge.setAttribute("class", "header__cart-badge");
cartIco.append(cartBadge);
cartBadge.textContent = cartProducts.childElementCount;

cartIco.addEventListener("click", () => {
    cart.classList.toggle("show");
})

menuIco.addEventListener("click", () => {
    menu.classList.toggle("menuShow");
})

menuCloseIco.addEventListener("click", () => {
    menu.classList.toggle("menuShow");
})

addButton.forEach(el => {  // TODO: Volver esto una función
    el.addEventListener("click", () => {
        // Consigue el item padre
        const thisItem = el.parentElement;

        // Busca los datos del item
        const productPhoto = thisItem.querySelector(".products__img");
        const productName = thisItem.querySelector(".products__title");
        const productPrice = thisItem.querySelector(".products__price");

        //Organizar item para carrito
        const newCartProduct = document.createElement("div");       // ITEM
        newCartProduct.setAttribute("class", "cart__item");

        const newCartProductImg = document.createElement("img");    // IMAGEN
        newCartProductImg.setAttribute("src", productPhoto.src);
        newCartProductImg.setAttribute("class", "cart__img");
        newCartProduct.append(newCartProductImg);

        var newCartName = document.createElement("p");            //TITULO
        newCartName.setAttribute("class", "cart__item-name");
        newCartName.textContent = productName.innerHTML;
        newCartProduct.append(newCartName);

        var newCartPrice = document.createElement("p");             // PRECIO
        newCartPrice.setAttribute("class", "cart__item-price");
        newCartPrice.textContent = productPrice.innerHTML;
        newCartProduct.append(newCartPrice);

        var newTrashIco = document.createElement("i");              // Icono borrar
        newTrashIco.setAttribute("class", "remove");
        const trashIco = document.createElement("img");
        trashIco.setAttribute("src", "img/trash.svg");
        trashIco.setAttribute("class", "cart__delete-ico");
        newTrashIco.append(trashIco);
        newCartProduct.append(newTrashIco);

        cartProducts.appendChild(newCartProduct);
        cartBadge.textContent++;
    })
})

cartProducts.addEventListener("click", deletionHandler);

function deletionHandler(e){
    if(e.type === "click" && e.target.classList.contains("cart__delete-ico")){
        const product = e.target.parentElement.parentElement; // hey, funciona
        product.remove();
        cartBadge.textContent -= 1;
    }
}

allButtons.forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.backgroundColor = "#9f9f9f";
    })
    el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = "#181818";
    })
});