import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen pt-[80px] bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                </div>
                <div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> Comp Sci @ YorkU. </p>
                        </div>
                        <div className='text-xl space-y-2'>
                            <p>
                                Hi, I am currently persuing Computer Science at York University.
                                I have been really passionate about programming ever since I took grade 10 comp sci class where I learned Turing (Yea I know).
                                I have a keen interest in Web Development and I love to develop web apps during my spare time.
                            </p>
                        </div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-5'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> Hobbies </p>
                        </div>
                        <div className='text-xl space-y-2'>
                            <p>
                                Aside from programming, my other interests are sports - soccer {`{ Hala Madrid }`} and reading.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default About;