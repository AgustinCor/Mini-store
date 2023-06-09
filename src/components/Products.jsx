import { useCart } from "../hooks/useCart"

export function Products ({products}){
    const {addToCart,removeFromCart, cart } = useCart()

   const checkProductInCart =product =>{
    return cart.some(item => item.id == product.id)
   }

    return (
        <main className="products">
           <ul>
            { products.slice(0,10).map(product =>{
                const isProductInCart =checkProductInCart(product)
                return (
                <li key={product.id}>
                    <img 
                    src={product.thumbnail}
                     alt={product.title} 
                     />
                   <div>
                    <strong>{product.title}</strong> -${product.prive}
                   </div>  
                   <div>
                    <button onClick={() =>{
                      isProductInCart 
                      ? removeFromCart(product)
                      : addToCart(product)
                    }}> 
                       {
                        isProductInCart
                        ? <div> Remove Product</div> 
                        : <div> AddProduct  </div>
                       }
                    </button>
                   </div>
                </li>
                )
            })}
           </ul>
        </main>
    )
}