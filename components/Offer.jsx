import React from 'react'
import Image from 'next/image'

import MyButton from './MyButton';
import Typewriter from 'typewriter-effect';
function Offer({header,title,buttonTitle,cover}) {
    
    return ( 
        <div className="container-components grid md:grid-cols-2 gap-2 md:gap-5 my-10 items-center justify-center bg-blue-300/70 p-5 rounded">
            <div className="image max-w-[500px]  md:justify-self-end">
                <Image
                src={cover}
                alt="hero"
                placeholder='blur'
                
                />
            </div>

            <div className="info md:justify-self-start md:leading-loose md:w-[70%]">
                <p className='text-sm text-gray-600 capitalize font-semibold'>{header}</p>
                <h1 className='text-3xl font-bold my-2'>{title}</h1>
                <div className='text-gray-600 text-sm md:text-lg mb-5 h-[40px]'>
                <Typewriter
                    options={{
                    strings: ["Explore from Apartments, builder floors, villas and more..."],
                    autoStart: true,
                    loop: true,
                    delay:40
                    }}
                />
                </div>
                    
                <MyButton
                content={buttonTitle}/>
            </div>
        </div>
    );
}

export default Offer;