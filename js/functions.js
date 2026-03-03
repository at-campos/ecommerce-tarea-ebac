console.log("Hola mundo!");

const header = document.querySelector("header");
const cartIco = header.lastElementChild;
const cart = document.querySelector(".cart");
const cartProducts = cart.querySelector(".cart__products");
const removeIco = document.querySelectorAll(".remove");

const addButton = document.querySelectorAll(".products__button")
console.log(addButton);

cartIco.addEventListener("click", () => {
    cart.classList.toggle("show");
})

addButton.forEach(el => {
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
        console.log(newCartName);
        newCartName.textContent = productName.innerHTML;
        newCartProduct.append(newCartName);

        var newCartPrice = document.createElement("p");             // PRECIO
        newCartPrice.setAttribute("class", "cart__item-price");
        newCartPrice.textContent = productPrice.innerHTML;
        newCartProduct.append(newCartPrice);

        var newTrashIco = document.createElement("i");
        newTrashIco.setAttribute("class", "remove");
        const trashIco = document.createElement("img");
        trashIco.setAttribute("src", "img/trash.svg");
        trashIco.setAttribute("class", "cart__delete-ico");
        newTrashIco.append(trashIco);
        newCartProduct.append(newTrashIco);

        cartProducts.appendChild(newCartProduct);
        
    })
})

removeIco.forEach(el => {
    el.addEventListener("click", () => {
        const product = el.parentElement;
        product.remove();
    })
})