import React from 'react'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen pt-[80px] bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>Jaideep Kular</h1>
                <h2 className='text-5xl sm:text-7xl font-bold text-[#8892b0]'>Aspiring Software Engineer.</h2>
                <p className='text-[#8892b0] pt-4 max-w-[700px]'> Eager to learn and grow my skills.</p>
                <p className='text-[#8892b0]'>Currently a comp sci student @ YorkU.</p>
            </div>
        </div>
    )
}

export default Home;