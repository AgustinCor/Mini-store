import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart =() =>{
    const context=useContext(CartContext)

    if( context == undefined){
        throw new Error('useCard mube be within CartProvider')
    }

    return context
}

