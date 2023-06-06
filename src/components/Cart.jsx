import { useId } from "react"

export function Cart (){

    const cartCheckboxId =useId()

    return (
        <>
          <label htmlFor="cart">
            
          </label>
          <input 
          id={cartCheckboxId}
          type='checkbox'
          hidden />
          <aside >
            <ul>
             <li>
                <img src="https://i.dummyjson.com/data/products/6/1.png" alt="Mcbook" />
                <div>
                    <strong>iPhone</strong> -$1449
                </div>
                <footer>
                    <small>
                        Qty:1
                    </small>
                    <button>+</button> 
                </footer>
             </li>
            </ul>
            <button>
                Cart button
            </button>
          </aside>
        </>
    )
}