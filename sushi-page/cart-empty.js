function toggleCartStatus () {

const cartEmpty = document.querySelector(`.cart-empty-box`);
const purchaseBox = document.querySelector(`.purchase-box`);
const itemsBox = document.querySelector(`.items-box-section`);

if (itemsBox.children.length > 0) {
    cartEmpty.classList.add(`none`);
    purchaseBox.classList.remove(`none`);
} else {
    cartEmpty.classList.remove(`none`);
    purchaseBox.classList.add(`none`);
}
}
