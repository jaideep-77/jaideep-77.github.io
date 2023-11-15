import React from 'react'

const Experience = () => {
    return (
        <div id='experience' name='experience' className='w-full h-screen pt-[80px] bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right mb-8 ml-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            Experience
                        </p>
                    </div>
                </div>
                <div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> Software Engineer Intern at <label className='hover:text-pink-600 border-b-2 hover:border-pink-600'>Amazon</label></p>
                            <p className='text-2xl py-2'>May 2023 - Aug 2023</p>
                        </div>
                        <div className='text-xl space-y-2'>
                            <p>
                                Intern on Amazon Ads.
                            </p>
                            <p>
                                Worked with Java and AWS services to create a data pipeline from S3 to DynamoDb using various Lambda functions. Leveraged AWS CDK with TypeScript to maintain infrastructure as code.
                            </p>
                        </div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 my-10 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> Software Engineer Intern at <a href="https://www.tophat.com/" className='hover:text-pink-600 border-b-2 hover:border-pink-600'>Top Hat</a></p>
                            <p className='text-2xl py-2'>Sept 2022 - Dec 2022</p>
                        </div>
                        <div className='text-xl space-y-2'>
                            <p>
                                Intern on Gatekeepers team.
                            </p>
                            <p>
                                Worked with ReactJs (TypeScript) + Redux for frontend, Python (Django) for backend to implement new features such as new home screen, sign up email verification as well as rewriting code to remove dependencies on unsafe 3rd party packages.
                            </p>
                        </div>
                    </div>

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
                                Worked with Angular (TypeScript) to create dashboards and widgets and implemented drilldown features.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience