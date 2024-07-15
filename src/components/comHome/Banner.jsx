import React from 'react'

export default function Banner() {
  return (
    <>
      <div className="relative h-auto text-white py-24 px-10">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="relative md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Explore the world of cars through our community </p>
          <p className="text-2xl mb-10 leading-none">
          </p>
          <a
            href="#"
            className="bg-primary py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  )
}
