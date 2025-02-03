import React, { useState } from 'react'
import { items } from "../data/data.js";
import FilterButton from "./FilterButton.jsx";
import FilterMenu from "./FilterMenu.jsx";
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

const Work = () => {
  // projects file
  const project = items.sort((a, b) => b.id - a.id);

  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    showAll(!showAll)
  }

  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category === button);
    setMenuItem(filteredData)
  }

  return (
    <div name="work" className="w-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-700">
            Work
          </p>
          <p className="pt-6">Check out some of my recent work</p>
        </div>

        <div>Featured Projects</div>
        
        <div className='flex items-center gap-2'>
          {showAll ? "Hide" : "Show"} Additional Projects 
          
          <button onClick={() => setShowAll(!showAll)}>
            { showAll ? (<BiChevronDown size={30} />) : (<BiChevronRight size={30} />) }
          </button>

          
        
        </div>

        
        {showAll && (
          <div>
              <FilterButton button={buttons} filter={filter} />
              <div className='mt-3'>
                {menuItem.length} {menuItem.length === 1 ? 'Project' : 'Projects'}
              </div>
              
              <FilterMenu menuItem={menuItem} />
              
            </div>
          )}
      </div>
    </div>
  );
};

export default Work;
