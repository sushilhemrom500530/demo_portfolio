import React from 'react'
import background from "../../assets/background.jpg" 
import Image from 'next/image'
import Title from '../reuseable/title'

export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `url(${background.src})`,
                backgroundPosition: '30%  center',
            }}
            className=" w-full lg:h-[730px] h-auto bg-no-repeat bg-cover bg-center relative"
        >
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)]'></div>
            <div className="container mx-auto">
                <div className=" flex items-center flex-col lg:flex-row justify-center lg:gap-20 lg:pt-28 py-20 lg:pb-[156px] p-4 ">
                    <div className="flex items-start justify-start flex-col relative pt-12 xl:w-[666px] lg:w-auto">
                        <Title
                            title="Where Imagination Meets Mastery!"
                            className='text-white'
                            visible={false}
                            description="Step into a world of boundless creativity with Artifiex. Empowering artists, visionaries, and creators to craft extraordinary experiences, we provide the ultimate canvas for your ideas to shine. Let your masterpiece begin here."
                        />
                        <button
                            variant='primary'
                            className='text-sm lg:text-base w-max mt-5 lg:mt-[60px]'
                        >
                            GET STARTED
                        </button>
                    </div>
                    <div className="flex-1 w-full p-2">
                        <div className="xl:w-[666px] lg:w-[303px] md:w-[500px] w-full relative top-10">

                            <Image
                                src={background}
                                alt="hero image"
                                className="object-fill rounded-2xl z-20 ml-0 md:ml-20 lg:ml-0"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}