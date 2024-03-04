import React from 'react'

const MainVideoContent = () => {
  return (
    // <div className='absolute text-white h-screen bg-gradient-to-r from-slate-950 w-[100%] pt-80 px-12'>
    // <div className='absolute text-white h-screen bg-gray-950 opacity-60 w-[100%] pt-80 px-12'>
    <div className='absolute h-screen bg-gradient-to-r from-black w-[100%] pt-72 px-12'>

      <h1 className='text-white text-4xl font-medium py-3'>Kota Factory</h1>
      <p className='text-white text-xl w-1/4 py-5'>Like many students from across India, Vaibhav comes to Kota to prepare for JEE and NEET. Along with his friends, he navigates campus life and works hard to get into IIT.</p>
      <button className='text-white bg-red-700 text-2xl rounded-lg px-5 py-3 font-medium mr-2'> Play</button>
      <button className='text-black text-2xl rounded-lg px-5 py-3 font-medium bg-white'> More Info </button>
    </div>
  )
}

export default MainVideoContent