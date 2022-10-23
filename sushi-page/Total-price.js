function currentTotal() {
    const cartItems = document.querySelectorAll(`.cart-wrapper`);
    const totalTitle = document.querySelector(`.total-number`);

    let totalPrice = 0;

    cartItems.forEach(function(item) {
        const counterItem = item.querySelector(`[data-counter]`);
        const priceItem = item.querySelector(`.price__currency-1`);

        const currentPrice = parseInt(counterItem.innerText) * parseInt(priceItem.innerText);
        totalPrice += currentPrice;
    });

    totalTitle.innerText = totalPrice;
}