import React from 'react'

const Loading = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-b from-blue-50 to-white'>
        <div className='w-20 h-20 rounded-full border-2 border-blue-950 border-b-0 animate-spin'></div>
    </div>
  )
}

export default Loading