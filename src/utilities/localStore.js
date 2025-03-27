const getProductItems = () => {
    const storeListStr = localStorage.getItem('product-cart-list');
    if (storeListStr) {
        try {
            return JSON.parse(storeListStr);
        } catch (error) {
            console.error("Error parsing Product list:", error);
            return [];
        }
    }
    return [];
};

const addToStoreProductList = (id) => {
    if (!id) {
        console.error("Invalid Product ID:", id);
        return;
    }

    const storeList = getProductItems();
    if (storeList.includes(id)) {
        console.log(id, 'already exists in the cart');
    } else {
        storeList.push(id);
        localStorage.setItem('product-cart-list', JSON.stringify(storeList));
    }
};

const getWishListItems = () => {
    const storeListStr = localStorage.getItem('wish-list');
    if (storeListStr) {
        try {
            return JSON.parse(storeListStr);
        } catch (error) {
            console.error("Error parsing wish list:", error);
            return [];
        }
    }
    return [];
};

const addToStoreWishListItems = (id) => {
    if (!id) {
        console.error("Invalid Product ID:", id);
        return;
    }

    const storeList = getWishListItems();
    if (storeList.includes(id)) {
        console.log(id, 'already exists in the cart');
    } else {
        storeList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storeList));
    }
};


// For CART operations
const removeFromStoreProductList = (id) => {
    const storeList = getProductItems();
    const updatedList = storeList.filter(item => item !== id); // Remove only the specified ID
    localStorage.setItem('product-cart-list', JSON.stringify(updatedList)); // Update localStorage
};

// For WISHLIST operations
const removeFromStoreWishList = (id) => {
    const storeList = getWishListItems();
    const updatedList = storeList.filter(itemId => itemId !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedList));
};


export { addToStoreProductList, addToStoreWishListItems, getProductItems, getWishListItems, removeFromStoreProductList, removeFromStoreWishList };

