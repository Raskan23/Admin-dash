import React from 'react'

const Header = ({title}) => {
  return (
    <header style={{
      background: "linear-gradient(135deg, rgba(142, 64, 255, 0.3), rgba(255, 255, 255, 0.1))"
  }}>
      <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-black'>{title}</h1>
      </div>
    </header> 
  )
}

export default Header