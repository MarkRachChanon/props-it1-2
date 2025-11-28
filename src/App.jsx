import React from 'react'
import products from './data/products'

const App = () => {
  return (
    <>
      <div className='container my-5'>
        <section className='mb-5'>
          <h2 className='mb-4'>My Products</h2>
          <div className='row'>
            {products.map((p) => (
              <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                <div className='card h-100'>
                  <img src={p.image} alt="" className='card-img-top'/>
                  <div className='card-body d-flex flex-column'>
                    <span className='badge bg-secondary mb-2 align-self-start'>{p.category}</span>
                    <h6 className='card-title'>{p.name}</h6>
                  </div>
                  <div className='card-footer'>
                    <span style={{fontSize:'12px'}}>{p.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default App