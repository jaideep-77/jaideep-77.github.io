import React from 'react'


const Skills = () => {
    return (

        <div id='skills' name='skills' className='w-full h-[80%] pt-[80px] bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] flex flex-col justify-center w-full mx-auto'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Skills</p>
                </div>
                <div>
                    <p className='pt-4'>These are the programming languages / frameworks I have worked with:</p>
                    <p>Not listed in any particular order</p>
                    <ul className='flex flex-col items-center font-bold'>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>AWS CDK</li>
                        <li>AWS Lambda</li>
                        <li>AWS S3</li>
                        <li>AWS DynamoDB</li>
                        <li>AWS Cloudwatch</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Jest</li>
                        <li>Angular</li>
                        <li>Django</li>
                        <li>Spring</li>
                        <li>C</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;