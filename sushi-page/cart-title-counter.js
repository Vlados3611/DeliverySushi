function CartTitleCounter() {
    const cartNumber = document.querySelector(`.cart-title-counter`);
    const itemsBox = document.querySelector(`.items-box-section`);
    
    cartNumber.innerText = parseInt(itemsBox.children.length);
}