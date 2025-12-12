import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    return (
        <>
            <section className='mb-5'>
                <h2 className='mb-4'>My Products</h2>
                <div className='row'>
                    {props.prodcut.map((p) => (
                        <ProductCard
                            key={p.id}
                            name={p.name}
                            category={p.category}
                            desc={p.desc}
                            image={p.image}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList