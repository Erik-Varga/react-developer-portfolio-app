import React from 'react';
import Img from '../assets/ev_icon_pic.jpg';
import { BiChart, BiCode } from 'react-icons/bi';
import { FaChartBar, FaChartColumn } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

const About = () => {
  const size = 20;

  return (
    <div name='about' className='w-full md:h-screen'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-700'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4 bg-gray-100 shadow-lg'>
          <div className='sm:text-center text-2xl font-bold'>
            <img src={Img} alt="" width="300px" height="300px" className='flex w-auto justify-end' />
          </div>
          <div>
            <div className='flex flex-col'>
              
              <p className='m-2'> With over 25+ years experience working in the market research industry, I have developed an expertise in the data life cycle using data collection, cleaning and processing methods to create a reliable presentation of the customer experience.</p> 
              <p className='m-2'>Through this work, I'm able to leverage data-driven insights to identify opportunities for improvement while also implementing processes that ensure maximum efficiency for customer feedback.</p>
              
              <p className='m-2 mb-1 text-3xl font-bold'>Erik Varga</p>
              <p className='flex justify-start items-center gap-5 m-1'>
                <BiCode size={size} />Developer
                <FaChartColumn size={size} />Data Analyst
              </p>
              <p className='flex justify-start items-center gap-5 m-1'>
                <MdEmail size={size} /><a href="mailto:spudev50@gmail.com">spudev50@gmail.com</a>
              </p>
              <p className='flex justify-start items-center gap-5 m-1'>
                <BsGithub size={size} /><a href="https://github.com/Erik-Varga">https://github.com/Erik-Varga</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
