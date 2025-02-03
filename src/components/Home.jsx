import React from 'react'
import { Link } from "react-scroll";
import Social from './Social';
import '../index.css';

import { HiMiniCircleStack } from 'react-icons/hi2';
import { LiaBroomSolid } from 'react-icons/lia';
import { PiFunnel } from 'react-icons/pi';
import { BsBarChartLine, BsDatabaseAdd } from 'react-icons/bs';
import { CgChart, CgRemote } from 'react-icons/cg';
import { FcSurvey } from 'react-icons/fc';
import { MdWebStories } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa6';

const Home = () => {
  const size = 25;
  
  return (
    <div name="home" className="relative md:h-screen w-full bg-primary dark:bg-dark-primary text-white dark:text-black z-10">
      {/* Container */}
      <div className="max-w-[950px] mx-auto px-10 flex flex-col md:justify-center md:h-full">
        <p className="text-gray-100">Hi, my name is</p>
        <h1 className="mb-2 text-4xl sm:text-7xl font-bold text-color1">
          ERIK VARGA
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-color2">
          Research Developer,
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-color2">
           Data Analyst,
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-color2">
          Business Intelligence
        </h2>
        <div className="text-color2 py-4">
        <div className='flex flex-col md:flex-row justify-around items-center gap-5 my-5 text-white font-bold border border-gray-500 p-5 rounded-sm'>
          <div className='flex items-center gap-2 hover:text-green-400'>
            <HiMiniCircleStack size={size} /> Data Gathering         
          </div>
          <div className='flex items-center gap-2 hover:text-green-400'>
            <LiaBroomSolid size={size} /> Data Cleaning          
          </div>
          <div className='flex items-center gap-2 hover:text-green-400'>
            <PiFunnel size={size} /> Data Preprocessing 
          </div>
          <div className='flex items-center gap-2 hover:text-green-400'>
            <BsBarChartLine size={size} />Data Visualization 
          </div>

        </div>
        I am a research developer experienced in <span className="font-bold">Qualitative / Quantitative Skills and Technical Programming Languages</span>. I enjoy learning new business skills, utilizing the latest coding tools, building and sharing insights to improve the quality of the business orgranization. 
          
          <span className='ml-2 font-bold text-white hover:text-green-400 hover:cursor-pointer'>
            <Link to="about" smooth={true} duration={500}>
              Learn More
            </Link>
          </span>
        </div>
        <div className='flex flex-wrap gap-8 my-5'>
          <div className='flex flex-col justify-center'><FcSurvey size={size*1.5} />Surveys</div>
          <div className='flex flex-col justify-center'><BsDatabaseAdd size={size*1.5} />Datasets</div>
          <div className='flex flex-col justify-center'><CgChart size={size*1.5} />Analytics</div>
          <div className='flex flex-col justify-center'><MdWebStories size={size*1.5} />Web Apps</div>
          <div className='flex flex-col justify-center'><CgRemote size={size*1.5} />Remote</div>
          <div className='flex flex-col justify-center'><FaHandshake size={size*1.5} />In-Person</div>
        </div>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-white hover:bg-blue-800 hover:border-blue-700">
            <Link to="work" smooth={true} duration={500}>
              View Work &nbsp;
              <span className="group-hover:rotate-90 duration-300">
                <i className="fa-regular fa-circle-right"></i>
              </span>
            </Link>
          </button>
        </div>
        <div className='flex lg:hidden'>
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Home