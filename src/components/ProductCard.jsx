import React from 'react'

const ProductCard = (props) => {
    return (
        <>
            <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                <div className='card h-100'>
                    <img src={props.image} alt="" className='card-img-top' />
                    <div className='card-body d-flex flex-column'>
                        <span className='badge bg-secondary mb-2 align-self-start'>{props.category}</span>
                        <h6 className='card-title'>{props.name}</h6>
                    </div>
                    <div className='card-footer'>
                        <span style={{ fontSize: '12px' }}>{props.desc}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard