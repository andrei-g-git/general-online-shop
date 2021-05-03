export interface Product { //these can be reusable, should be in separate files
    id: number,
    title: string,
    price: number,
    discount: number,
    description: string,
    category: string,
    image: string,
    rating: number    
}

export interface Cart {
    addToCartId: number,
    cartId: number,
    userId: number,
    orderDate: string,
    productId: number,
    quantity: number
}