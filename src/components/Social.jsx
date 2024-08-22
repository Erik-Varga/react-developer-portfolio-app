import React from 'react'
import { Link } from 'react-scroll'

const Social = () => {
    return (
        <ul>
            {/* LinkedIn */}
            <li className="w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[0px] duration-300 hover:bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/erik-varga-a788b88/" target="_blank">
                <span>
                LinkedIn

                </span>
                 <i className="fa-brands fa-linkedin text-3xl"></i></a>
            </li>

            {/* Github */}
            <li className="w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[0px] duration-300 hover:bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/Erik-Varga" target="_blank">
                <span>
                GitHub

                </span>
                 <i className="fa-brands fa-github text-3xl"></i></a>
            </li>

            {/* Email */}
            <li className="w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[0px] duration-300 hover:bg-[#4f643c]">
                <a className="flex justify-between items-center w-full text-gray-300" href="mailto:spudev50@gmail.com">
                    <span>
                    Email

                    </span>
                     <i className="fa-regular fa-envelope text-3xl"></i></a>
            </li>

            {/* Resume */}
            <li className="w-[220px] h-[60px] flex justify-between items-center ml-[-150px] hover:ml-[0px] duration-300 hover:bg-[#565f69]">
                <div className="flex justify-between items-center w-full text-gray-300">
                    <Link to='resume' smooth={true} duration={500} className="hover:text-color1">Resume</Link>
                    <i className="fa-solid fa-user text-3xl"></i></div>
            </li>
        </ul>
    )
}

export default Social