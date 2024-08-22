import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { BiLogoFirebase } from 'react-icons/bi';
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTailwind } from 'react-icons/tb';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

export default function Footer() {
  const size = 25;

  return (
    <div className='w-full text-sm bg-primary dark:bg-dark-primary text-white dark:text-black text-center p-4'>
        <span>
            <a href="https://github.com/Erik-Varga" target="_blank" rel="noreferrer">
                <span className='flex items-center justify-center'>
                    &copy; {(new Date().getFullYear())} Erik Varga | Developer
                    &nbsp;<BsGithub />
                </span>
            </a>
            <a href="https://github.com/Erik-Varga/react-developer-portfolio-app" target="_blank" rel="noreferrer" className='text-xs'>
            Source Code |&nbsp;
            </a>
        </span>
        <span className='text-xs text-slate-400'>using:  <strong>React &#x2022; JavaScript &#x2022; Tailwind CSS &#x2022; EmailJS</strong></span>
        <span className='flex justify-center items-center gap-2 text-slate-400 mt-2'>
            <FaReact size={size} />
            <IoLogoJavascript  size={size} />
            <TbBrandTailwind size={size} />
            <MdOutlineMarkEmailRead size={size} />
        </span>
    </div>
)
}
