import React, { useState } from 'react'
import { items } from "../data/data.js";
import FilterButton from "./FilterButton.jsx";
import FilterMenu from "./FilterMenu.jsx";

const allCategories = ['All', ...new Set(items.map(item => item.category))];

const Work = () => {
  // projects file
  const project = items;
  //setProject(items);

  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category === button);
    setMenuItem(filteredData)
  }

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      < className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <FilterButton button={buttons} filter={filter} />

        
          <FilterMenu menuItem={menuItem} />

        

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (            
            <div>
              <small>{item.category}</small>
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Work;
