import React from 'react';
import { SiHonda , SiToyota , SiNissan , SiMercedes , SiPorsche } from "react-icons/si";





export default function Brand() {
  return (
    <>
    <section className="bg-base-100 ">
        <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <SiToyota size={70} color='gray'/>

            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <SiNissan size={70} color='gray'/>

            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <SiMercedes size={60} color='gray'/>

            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <SiPorsche size={60} color='gray'/>

            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <SiHonda size={70} color='gray'/>

            </div>
        </div>
        </div>
    </section>
    </>

  )
}
