function getStoredCard(data) {
    const cartItem = localStorage.getItem("cart");
    if (cartItem) {
        return JSON.parse(cartItem);
    }
    return [];
}
const saveCartToLs = cart => {
    const cartStrigified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStrigified)
}
const addToLS = id => {
    const cart = getStoredCard()
    cart.push(id);
    saveCartToLs(cart)
}
function removeBottleLS(id) {
    const card = getStoredCard()
    const bottleFilter = card.filter((x) => x !== id);
    // console.log(bottleFilter);
    saveCartToLs(bottleFilter)
}


export { getStoredCard, addToLS, removeBottleLS };