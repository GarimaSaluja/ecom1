import React, { useEffect, useState } from 'react'
import TrendingProducts from '../Components/TrendingProducts'
import { Link } from 'react-router-dom'

const Home = () => {

    const [productsArr, setProductsArr] = useState([])

    async function getData() {
        let res = await fetch('https://dummyjson.com/products?skip=0&limit=0')
        let data = await res.json()

        setProductsArr(data.products)
    }

    let laptops = productsArr.filter(
        (val) => val.category === "laptops"
    )

    let smartPhones = productsArr.filter(
        (val) => val.category === "smartphones"
    )

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='text-white pt-10'>

            {/* Laptops */}
            <div className='bg-black text-white p-5'>
                <h1 className='font-bold text-2xl'>Laptops</h1>

                <TrendingProducts data={laptops} />
            </div>


            {/* Smartphones */}
            <div className='my-10 bg-black text-white p-5'>
                <h1 className='font-bold text-2xl'>Smartphones</h1>

                <TrendingProducts data={smartPhones} />
            </div>


            {/* All Products */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>

                {
                    productsArr.map((val) => {

                        return (
                            <div
                                key={val.id}
                                className='border flex flex-col items-center gap-3 p-10'
                            >

                                <img
                                    src={val.thumbnail}
                                    alt=""
                                />

                                <p className='text-black font-semibold text-xl'>
                                    {val.title}
                                </p>

                                <p>
                                    {val.price}
                                </p>


                                <button className='bg-black cursor-pointer hover:bg-[#202020] text-white px-5 py-4 w-full rounded-2xl'>
                                    Add to Cart
                                </button>


                                <Link
                                    to='/viewdetails'
                                    state={val}
                                    className='bg-blue-950 text-center cursor-pointer hover:bg-blue-800 text-white px-5 py-4 w-full rounded-2xl'
                                >
                                    View Product
                                </Link>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Home