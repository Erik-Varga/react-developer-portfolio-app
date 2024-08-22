import React, { useState } from "react";
import { Link } from "react-scroll";
import Social from "./Social";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleClick = () => {
      setNav(!nav);
    }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary dark:bg-dark-primary text-white dark:text-black z-50">
      <div className="flex justify-center align-items gap-2">
        {/* logo */}
        <span className="p-2 border justify-center align-center text-3xl font-semibold">
          <Link to='/'>EV</Link>
        </span>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li><Link to='home' smooth={true} duration={500} className="hover:text-color1">Home</Link></li>
        <li><Link to='about' smooth={true} duration={500} className="hover:text-color1">About</Link></li>
        <li><Link to='skills' smooth={true} duration={500} className="hover:text-color1">Skills</Link></li>
        <li><Link to='work' smooth={true} duration={500} className="hover:text-color1">Work</Link></li>
        <li><Link to='resume' smooth={true} duration={500} className="hover:text-color1">Resume</Link></li>
        <li><Link to='contact' smooth={true} duration={500} className="hover:text-color1">Contact</Link></li>
      </ul>

      {/* hamburger menu */}
      <div className="md:hidden text-2xl z-10 cursor-pointer hover:text-[#ccd6f6]" onClick={handleClick}>
        {!nav ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}        
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition duration-200 ease-in-out'}>
        
      <li className='py-6 text-4xl hover:text-[#ccd6f6] w-full text-center transition-all duration-300 ease-in-out'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#ccd6f6] w-full text-center transition-all duration-300 ease-in-out'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#ccd6f6] w-full text-center transition-all duration-300 ease-in-out'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#ccd6f6] w-full text-center transition-all duration-300 ease-in-out'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#ccd6f6] w-full text-center transition-all duration-300 ease-in-out'>
          {' '}
          <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#ccd6f6] w-full text-center transition-all duration-300 ease-in-out'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[10%] left-0">
        <Social />
      </div>
    </div>
  );
};

export default Navbar;
