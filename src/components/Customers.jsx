import React from 'react'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
import man from '../images/customerMan.png'
import child from '../images/customerChild.png'

function Customers() {
  return (
    <>
      <div className='w-full bg-[#cc9766] mt-4 rounded-xl'>
     <div className='p-2'>
     <span className="text-2xl m-2">04.</span>
     <h1 className="inline text-3xl lg:text-6xl mt-4">Happy Clients</h1>
     </div>
      
      <div>
        <video src={video1} controls className='p-6 rounded-2xl'></video>
        <video src={video2} poster={man} controls className='p-6 rounded-2xl'></video>
        <video src={video3} poster={child} controls className='p-6 rounded-3xl'></video>
      </div>
      </div>
    </>
  )
}

export default Customers
