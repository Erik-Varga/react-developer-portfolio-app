import React from 'react';

export default function Footer() {
  return (
    <div name='contact' className='w-full text-sm bg-[#0a192f] p-4 text-white text-center'>
        <p>
            <a href="https://github.com/Erik-Varga" target="_blank" rel="noreferrer">
                &copy; {(new Date().getFullYear())} Erik Varga | Web Developer
                &nbsp;<i className="fa-brands fa-github"></i>
            </a>
        </p>
        <p>
            <a href="https://github.com/Erik-Varga/react-developer-portfolio-app" target="_blank" rel="noreferrer">
        
            Source Code <i className="fa-solid fa-code"></i>
            </a>
        </p>
    </div>
  )
}
