import {products as initialProducts} from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header'

function App() {

   const [products] =useState(initialProducts)
   const[filters,setFilters] =useState({
    category:'all',
     minPrice:0,
   })

  const filtersProducts =(products) =>{
    return products.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' || 
          products.category === filters.category
        )
      )
    })
  }

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filtersProducts(products)}/>
    </>
  )
}

export default App
