import React from 'react'
import { DiMongodb, DiPostgresql, DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsFill } from 'react-icons/ri'
import { SiMongodb, SiNextdotjs } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { EXPERIENCES } from '../data/data.js'

const Experience = () => {
  return (
    <>
        <div className='text-center pb-8 pl-4 mt-20'>
            <p className='text-4xl font-bold inline border-b-4 border-red-700'>
              Experience
            </p>
          </div>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                    <p className='mb-2 text-sm text-neutral-700 dark:text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:-3/4">
                        <h6 className='mb-2 font-semibold'>
                            {experience.role} - <span className='text-sm'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-700 dark:text-neutral-400'>{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-600 px-2 py-2 text-sm font-medium text-gray-100">{tech}</span>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    </>
  )
}

export default Experience