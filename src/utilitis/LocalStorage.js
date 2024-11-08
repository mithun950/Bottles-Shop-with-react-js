const getStoreCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    
}

const addToLocalStorage = id => {
    const cart = getStoreCart();
    cart.push(id);

    saveCartToLocalStorage(cart);
}

export {addToLocalStorage,getStoreCart}