import React, { useState } from "react";
import { Link } from "react-scroll";
import ev_img from '../assets/ev_icon_pic.jpg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleClick = () => {
      setNav(!nav);
    }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white z-9">
      <div className="flex justify-center align-items gap-2">
        {/* logo */}
        <span className="p-2 border justify-center align-center text-white text-3xl font-semibold">EV</span>
        {/* <img className="shadow opacity-90 hover:opacity-100" src={ev_img} alt="image" width='75' height='75' /> */}
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* hamburger menu */}
      <div className="md:hidden text-2xl z-10" onClick={handleClick}>
        {!nav ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}        
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition duration-200 ease-in-out'}>
        
      <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[10%] left-0">
        <ul>

            {/* LinkedIn */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 hover:bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/erik-varga-a788b88/" target="_blank">LinkedIn <i className="fa-brands fa-linkedin text-3xl"></i></a>
            </li>

            {/* Github */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 hover:bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/Erik-Varga" target="_blank">GitHub <i className="fa-brands fa-github text-3xl"></i></a>
            </li>
            
            {/* Email */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 hover:bg-[#4f643c]">
                <a className="flex justify-between items-center w-full text-gray-300" href="mailto:spudev50@gmail.com">Email <i className="fa-regular fa-envelope text-3xl"></i></a>
            </li>
            
            {/* Resume */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 hover:bg-[#565f69]">
                <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume <i className="fa-solid fa-user text-3xl"></i></a>
            </li>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
