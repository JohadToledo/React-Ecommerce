// para agregar al carrito 
export const addCart = (product) => {
    return{
        type: 'ADDITEM',
        payload: product
    }
}

//Para eliminar del carrito 
export const delCart = (product) => {
    return{
        type: 'DELITEM',
        payload: product
    }
}

export const clearCart = (product) => {
    return{
        type: 'CLEARCART',
        payload: product
    }
}

