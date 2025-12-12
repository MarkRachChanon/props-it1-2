import React from 'react'
import products from './data/products'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <>
      <div className='container my-5'>
        <ProductList prodcut={products}/>
      </div>
    </>
  )
}

export default App