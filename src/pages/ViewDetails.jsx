import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {

    let location = useLocation()

    let product = location.state

    console.log(product)

    return (
        <div>

            <div className='border justify-center rounded-3xl items-center flex lg:flex-row flex-col gap-10 p-20 w-[80%] mx-auto'>

                {/* Product Image */}
                <div>
                    <img
                        className='min-w-87.5'
                        src={product.thumbnail}
                        alt=""
                    />
                </div>


                {/* Product Details */}
                <div className='flex flex-col gap-4 text-xl'>

                    <h1>
                        <span className='font-bold'>Title: </span>
                        {product.title}
                    </h1>

                    <h1>
                        <span className='font-bold'>Price: </span>
                        {product.price}
                    </h1>

                    <h1>
                        <span className='font-bold'>Brand: </span>
                        {product.brand}
                    </h1>

                    <h1>
                        <span className='font-bold'>Category: </span>
                        {product.category}
                    </h1>

                    <h1>
                        <span className='font-bold'>Rating: </span>
                        {product.rating}
                    </h1>

                    <h1>
                        <span className='font-bold'>Return Policy: </span>
                        {product.returnPolicy}
                    </h1>

                    <h1>
                        <span className='font-bold'>Stocks: </span>
                        {product.stock}
                    </h1>

                    <h1>
                        <span className='font-bold'>Weight: </span>
                        {product.weight}
                    </h1>

                    <h1>
                        <span className='font-bold'>Warranty Information: </span>
                        {product.warrantyInformation}
                    </h1>

                    <h1>
                        {product.description}
                    </h1>

                </div>

            </div>

        </div>
    )
}

export default ViewDetails