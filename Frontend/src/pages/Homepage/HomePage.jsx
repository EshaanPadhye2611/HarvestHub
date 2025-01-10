import React from 'react'
import Header from '../../Components/Header'
import Login from '../../Components/Login'

const HomePage = () => {
  return (
    <div className='bg-green-100'>
      <Header />
      <div className="mt-2"> {/* Reduce margin-top if there is extra space */}
        <Login />
      </div>
    </div>
  )
}

export default HomePage
