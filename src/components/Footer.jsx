import React from 'react';
import img from '../assets/car-logo1.png';


export default function Footer() {
    // const footerNavs = [
    //     {
    //         href: 'javascript:void()',
    //         name: 'About'
    //     },
    //     {
    //         href: 'javascript:void()',
    //         name: 'Blog'
    //     },
    //     {
    //         href: 'javascript:void()',
    //         name: ''
    //     },
    //     {
    //         href: 'javascript:void()',
    //         name: 'Team'
    //     },
    //     {
    //         href: 'javascript:void()',
    //         name: 'Careers'
    //     },

    //     {
    //         href: 'javascript:void()',
    //         name: 'Suuport'
    //     }
    // ]

    return (
      <>
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src={img} className="w-32 sm:mx-auto" /><p>RevUp</p>
                <p className="leading-relaxed mt-2 text-[15px]">
                Our desire to establish the principle of trust and customer satisfaction by applying the highest 
                standards of quality and excellence in providing services 
                by selecting the highest competencies to provide the best services to our customers.
                </p>
            </div>
            {/* <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li className=" hover:text-gray-800">
                            <a key={idx} href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul> */}
           
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>


        <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
            © 2023 Copyright:
            <a href="https://tw-elements.com/">RevUp</a>
        </div>
        </footer>

        </>
    )
}


