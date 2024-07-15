import React from 'react';
import toyo from '../../assets/japan-car 1.png';
import hund from '../../assets/japan-car 111.png';
import por from '../../assets/pore.png';
import mar from '../../assets/marse.png';
import farr from '../../assets/farrari.png';




export default function Brand() {
  return (
    <>
    <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={toyo} className='w-24'/>
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={farr} className='w-24' />
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={mar} className='w-28' />
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img src={por} className='w-20' />
            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <img src={hund} className='w-24' />
            </div>
        </div>
        </div>
    </section>
    </>

  )
}
