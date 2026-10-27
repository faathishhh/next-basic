import { KeyObject } from 'crypto';
import Link from 'next/link';
import React from 'react'
import { Interface } from 'readline'


interface ProductShape {

    id: number;
    title: string;
    thumbnail: string;
    category: string;
    price: number

}

const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json()
    return data.products
}



const Products = async () => {
    const products: ProductShape[] = await fetchProducts()
    console.log(products);




    return (
        <div className='  bg-gradient-to-b from-blue-50 to-white text-center py-10 flex flex-col gap-3min-h-screen justify-center '>

            <h1 className=' text-blue-950  text-6xl font-bold'> Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 p-5'>
                {
                    products.map((prod) => {
                        return (
                            <Link href={`/products/${prod.id}`} className=' bg-white border border-blue-100 p-5 rounded-xl hover:shadow-lg hover:scale-102 hover:shadow-blue-100 transition duration-300' key={prod.id}>
                                <img src={prod.thumbnail} alt="{prod.title}" />
                                <h1 className='text-blue-950 text-xl'>{prod.title}</h1>
                                <p className='text-slate-500'>{prod.category}</p>
                                <p className='text-blue-700 text-3xl'>{prod.price}</p>
                            </Link>


                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products