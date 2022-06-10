import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            Experience
                        </p>
                    </div>
                </div>
                <div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> Software Engineer Intern at <a href="https://www.assent.com/" className='hover:text-pink-600 border-b-2 hover:border-pink-600'>Assent</a></p>
                            <p className='text-2xl py-2'>Sept 2021 - Aug 2022</p>
                        </div>
                        <div className='text-xl space-y-2'>
                            <p>
                                Intern on Data Delivery Team.
                            </p>
                            <p>
                                Developed dashboards and widgets and implemented drilldowns with Angular and TypeScript.
                            </p>
                            <p>
                                Designed a Data Extractor tool to filter on entity and module filters using C# and .Net.
                            </p>
                            <p>
                                Created a new report using existing report engine with implementing new product level filtering.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience