import React from 'react'
import react from '../assets/react.png';
import Angular from '../assets/angular.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/node.png';
import dotNet from '../assets/dotNet.png';
import Mysql from '../assets/mySql.png';
import Github from '../assets/github.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4 '>These are the technologies I have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="react img" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Angular} alt="angular img" />
                        <p className='my-4'>Angular</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='tailwind img'></img>
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="node img" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={dotNet} alt=".Net img" />
                        <p className='my-4'>.Net</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mysql} alt="mysql img" />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="github img" />
                        <p className='my-4'>Github</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;