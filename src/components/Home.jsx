import React from 'react'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>Jaideep Kular</h1>
                <h2 className='text-5xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#8892b0] pt-4 max-w-[700px]'> Eager to learn and grow my skills.</p>
                <p className='text-[#8892b0]'>If you are a recruiter, trust your instinct and hire me.</p>
            </div>
        </div>
    )
}

export default Home;