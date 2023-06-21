import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-700'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Erik Varga, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              I am passionate about building excellent software that improves the lives of those around me. I specialize in software solutions for clients ranging from individuals and small-businesses all the way to large enterprise corporations.&nbsp;
              <i className='text-gray-400'>What would you do if you had a software professional and data analyst available at your fingertips?</i>
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
