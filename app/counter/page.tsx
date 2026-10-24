"use client"

import { log } from 'node:console'
import React, { useState } from 'react'


const Counter = () => {


    const [count, setCount] = useState(0)
    console.log(count);



    return (

        <div className='flex justify-center items-center min-h-screen gap-4 bg-gradient-to-b from-blue-50 to-white '>
            <button onClick={() => setCount(count - 1)}  className='bg-slate-500 p-4 rounded-2xl text-white text-xl border border-blue-950 hover:shadow-lg hover:scale-102 hover:shadow-blue-200 transition duration-300'>Decremenet</button>
            <h1 className='text-blue-950 text-9xl font-bold '>{count}</h1>
            <button onClick={() => setCount(count + 1)} className='bg-blue-600 p-4 rounded-2xl text-white text-xl border border-blue-950 hover:shadow-lg hover:scale-102 hover:shadow-blue-200 transition duration-300'>Increment</button>
        </div>
    )
}

export default Counter