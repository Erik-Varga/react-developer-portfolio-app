import React from "react";

import HTML_Img from "../assets/html.png";
import CSS_Img from "../assets/css.png";
import JavaScript_Img from "../assets/javascript.png";
import React_Img from "../assets/react.png";
// import Node_Img from '../assets/node.png';
import FireBase_Img from "../assets/firebase.png";
import ChatGPT_Img from "../assets/chatgpt.png";
// import GitHub_Img from '../assets/github.png';
import Tailwind_Img from "../assets/tailwind.png";
// import Mongo_Img from '../assets/mongo.png';
import Python_Img from "../assets/python.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-700 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* javascript */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript_Img} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          {/* react */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={React_Img} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>

          {/* python */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python_Img} alt="HTML icon" />
            <p className="my-4">PYTHON</p>
          </div>

          {/* node js */}
          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node_Img} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div> */}

          {/* mongo db */}
          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo_Img} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div> */}

          {/* firebase */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase_Img} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>

          {/* tailwind */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind_Img} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>

          {/* chatgpt */}
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ChatGPT_Img} alt="ChatGPT icon" />
            <p className="my-4">CHATGPT</p>
          </div> */}

          
          {/* css */}
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS_Img} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div> */}

          {/* html */}
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML_Img} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
