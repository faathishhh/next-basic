import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-20 py-6 bg-white'>
        <h1 className='text-2xl font-bold italic text-blue-700'>Brand</h1>
        <nav>
            <ul className='flex items-center justify-between gap-16 font-semibold text-blue-700'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
                <li><Link href="/counter">Counter</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </nav>
        <button className='bg-blue-600 text-white px-8 py-3 rounded-xl'>
            sign in
        </button>

    </header>
  )
}

export default Header