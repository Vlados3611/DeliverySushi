const cartWrapper = document.querySelector(`.items-box-section`);

window.addEventListener(`click`, function(event) {
    if (event.target.hasAttribute(`data-button-for-cart`))  {
        const card = event.target.closest(`.grid-template-box`);

        const productInfo = {
            id: card.dataset.id,
            ImgSrc: card.querySelector(`.img-for-items`).getAttribute(`src`),
            title: card.querySelector(`.title-for-info-box`).innerText,
            ItemsInBox: card.querySelector(`.items-in-box`).innerText,
            weight: card.querySelector(`.weight-items`).innerText,
            price: card.querySelector(`.price__currency`).innerText,
            counter: card.querySelector(`[data-counter]`).innerText,
        };

        const ItemsInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (ItemsInCart) {
            const counterElement = ItemsInCart.querySelector(`[data-counter]`);
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            const cartHTML = `<div class="cart-wrapper" data-id="${productInfo.id}">
            <div class="cart-items-img-box">
               <img class="cart-items-img" src="${productInfo.ImgSrc}">
            </div>
            <div class="cart-items-info-box">
               <div class="cart-title-info">${productInfo.title}</div>
               <div class="cart-items-weight-info">${productInfo.ItemsInBox} / ${productInfo.weight}</div>
               <div class="counter-price-box">
               <div class="cart-counter-info counter-wrapper">
                   <div class="counter-minus" data-action="minus">-</div>
                   <div class="counter" data-counter>${productInfo.counter}</div>
                   <div class="counter-plus" data-action="plus">+</div>
               </div>
               <div class="price__currency-box-1">
               <div class="price__currency-1">${productInfo.price}</div>
               </div>
            </div>
            </div>
          </div>`;
    
          cartWrapper.insertAdjacentHTML(`beforeend`, cartHTML);
        }
        toggleCartStatus();
        CartTitleCounter();
        currentTotal();
        card.querySelector(`[data-counter]`).innerText = `1`;
       
    };
})