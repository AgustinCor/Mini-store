import { useId } from "react";
import { useCart } from "../hooks/useCart";

function CartItem({thumbnail,price,title, quantity,addToCart}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> -${price}
      </div>
      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label htmlFor="cart"></label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside>

        <ul>
          {cart.map(product =>(
            <CartItem 
            key={product.id} 
            addToCart={() => addToCart(product)}
            {...product}
            />
          ))}
        </ul>
        
        <button onClick={clearCart}>Cart button</button>
      </aside>
    </>
  );
}
