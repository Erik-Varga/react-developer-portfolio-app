import React from 'react'
import { Link } from "react-scroll";
import Social from './Social';
import '../index.css';

import { HiMiniCircleStack } from 'react-icons/hi2';
import { LiaBroomSolid } from 'react-icons/lia';
import { PiFunnel } from 'react-icons/pi';
import { BsBarChartLine } from 'react-icons/bs';
import { WindowSize } from './WindowSize';
import { CgDrive } from 'react-icons/cg';
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';
import { GiCycle } from 'react-icons/gi';

const Home = () => {
  return (
    <div name="home" className="relative md:h-screen w-full bg-primary dark:bg-dark-primary text-white dark:text-black z-10">
      {/* Container */}
      <div className="max-w-[950px] mx-auto px-10 flex flex-col md:justify-center md:h-full">
        <p className="text-gray-100">Hi, my name is</p>
        <h1 className="mb-2 text-4xl sm:text-7xl font-bold text-color1">
          ERIK VARGA
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-color2">
          Research, Developer,
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-color2">
           Analyst
        </h2>
        <p className="text-color2 py-4 max-w-[700px]">
        <div className='flex flex-col md:flex-row items-center gap-5 my-5 text-white font-bold border border-gray-500 p-5 rounded-sm'>
          <div className='flex items-center gap-3'>DATA <GiCycle className='text-3xl' /></div>
          <HiMiniCircleStack className='text-5xl hover:text-green-400'/> Gathering         
          <LiaBroomSolid className='text-5xl hover:text-green-400'/> Cleaning          
          <PiFunnel className='text-5xl hover:text-green-400'/> Preprocessing 
          <BsBarChartLine className='text-5xl hover:text-green-400'/> Visualization 
        </div>
        I am a research developer experienced in both frontend and backend technologies. I enjoy learning new skills, using new coding tools, building and sharing code solutions with the developer community.
        </p>
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