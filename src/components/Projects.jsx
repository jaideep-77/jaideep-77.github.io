import React from 'react'
import AIproject from '../assets/ai2.png';

const Projects = () => {
    return (
        <div name='projects' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] flex flex-col justify-center w-full h-full mx-auto p-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Check out some of my projects</p>
                    <p className='md:hidden'> Click on the picture for demo or code</p>
                </div>

                <div className='grid gap-4'>
                    {/* Single project item below */}
                    <div style={{ backgroundImage: `url(${AIproject})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto custom-css'>
                        <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                AI chat
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://chat-with-ai.netlify.app/" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jaideep-77/AI-Chat" target='_blank' rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects