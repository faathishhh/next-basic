import React from 'react'

interface PageParams {
  params: Promise<{ prodId: String }>
}
interface ProductShape {

  id: Number;
  title: String;
  thumbnail: string;
  category: String;
  price: Number

}

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}

const product = async ({ params }: PageParams) => {

  const { prodId } = await params
  const Product: ProductShape = await fetchProduct(prodId)

  console.log(prodId);


  return (
    <div className=' bg-gradient-to-b from-blue-50 to-white  py-10  gap-3 min-h-screen justify-center '>

      <h1 className=' text-blue-950  p text-6xl text-center font-bold mb-10'> Product details</h1>
      <div className=' bg-white border border-blue-100 p-5 rounded-xl w-80 mx-auto hover:shadow-lg hover:scale-102 hover:shadow-blue-100 transition duration-300' >
        <img src={Product.thumbnail} alt="{Product.title}" />
        <h1 className='text-blue-950'>{Product.title}</h1>
        <p className='text-slate-500'>{Product.category}</p>
        <p className='text-blue-700'>{Product.price}</p>


      </div>

    </div>
  )
}

export default product