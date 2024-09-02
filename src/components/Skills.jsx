import React from "react";

import HTML_Img from "../assets/html.png";
import CSS_Img from "../assets/css.png";
import JavaScript_Img from "../assets/javascript.png";
import React_Img from "../assets/react.png";
// import NextJS_Img from "../assets/nextjs.png";
import Excel_Img from "../assets/excel.png";
import SPSS_Img from "../assets/spss.png";
import Snap_Img from "../assets/snapsurveys.png";
// import Node_Img from '../assets/node.png';
import FireBase_Img from "../assets/firebase.png";
import Windows_Img from "../assets/windows-sbs.png";
import ChatGPT_Img from "../assets/chatgpt.png";
// import GitHub_Img from '../assets/github.png';
import Tailwind_Img from "../assets/tailwind.png";
// import Mongo_Img from '../assets/mongo.png';
import SQL_Img from '../assets/sql.png';
import Python_Img from "../assets/python.png";
import PowerBI_Img from '../assets/powerbi.png';
import OfficePro_Img from '../assets/microsoft-office.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen bg-primary dark:bg-dark-primary text-white dark:text-black">
      {/* Container */}
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-700 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8">
          {/* power bi */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1" src={PowerBI_Img} alt="HTML icon" />
            <p className="my-4">POWER BI</p>
          </div>

          {/* sql */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1" src={SQL_Img} alt="HTML icon" />
            <p className="my-4">SQL</p>
          </div>

           {/* spss */}
           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SPSS_Img} alt="SPSS icon" />
            <p className="my-4">IBM SPSS</p>
          </div>

          {/* excel */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1 bg-white rounded-full border border-slate-800" src={Excel_Img} alt="HTML icon" />
            <p className="my-4">EXCEL</p>
          </div>

          {/* snap */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1 bg-white border border-slate-800" src={Snap_Img} alt="HTML icon" />
            <p className="my-4">SNAP SURVEYS</p>
          </div>

          {/* javascript */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1" src={JavaScript_Img} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          {/* react */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1" src={React_Img} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>

         
          {/* python */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto p-1" src={Python_Img} alt="HTML icon" />
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

          {/* css */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS_Img} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          {/* html */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML_Img} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

           {/* office pro */}
           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={OfficePro_Img} alt="HTML icon" />
            <p className="my-4">OFFICE PRO</p>
          </div>
          
          {/* windows server */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Windows_Img} alt="HTML icon" />
            <p className="my-4">WINDOWS SERVER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
