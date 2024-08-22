import React from 'react';
import Img from '../assets/ev_icon_pic.jpg';
import { BiChart, BiCode } from 'react-icons/bi';
import { FaChartBar, FaChartColumn } from 'react-icons/fa6';

const About = () => {
  const size = 25;

  return (
    <div name='about' className='w-full md:h-screen bg-primary dark:bg-dark-primary text-white dark:text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-700'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-center text-4xl font-bold'>
            <img src={Img} alt="" width="300px" height="300px" className='flex w-auto justify-end' />
            <p className='mt-2 mb-1 text-3xl font-bold'>Erik Varga</p>
            <p className='flex justify-center items-center gap-5 text-2xl'>
              <BiCode size={size} />Developer
              <FaChartColumn size={size} />Data Analyst</p>
          </div>
          <div>
            <div className='flex flex-col'>
              <p className='mt-2'> With over 25+ years experience working in the market research industry, I have developed an expertise in data life cycle, from methods Javascript, Next JS and Node.js to create innovative solutions that help drive productive growth for businesses. </p>
              <p className='mt-2'>My passion lies in creating efficient strategies and utilizing modern technologies to help companies reach their goals more quickly. In my current role, I am responsible for managing all aspects of the customer journey from acquisition through retention and driving user growth initiatives across multiple channels such as web, mobile and social media platforms. Through this work, I'm able to leverage data-driven insights to identify opportunities for improvement while also implementing processes that ensure maximum efficiency for customer's experiences.</p>
              <div className="mt-2">
                <i className='text-gray-400'> With a deep understanding of market research principles coupled with strong technical knowledge of popular programming languages, I am well eqiupped to develop effective strategies that will lead orgranizations towards success.</i>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
