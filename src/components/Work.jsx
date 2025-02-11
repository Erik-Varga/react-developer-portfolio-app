import React, { useState } from 'react'
import { items, featuredItems } from "../data/data.js";
import FilterButton from "./FilterButton.jsx";
import FilterMenu from "./FilterMenu.jsx";
import FeaturedMenu from "./FeaturedMenu.jsx";
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

const Work = () => {
  // projects file
  const project = items.sort((a, b) => b.id - a.id);

  let unshuffled = project;

  let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  
  

  const [menuItem, setMenuItem] = useState(shuffled);
  // const [menuItem, setMenuItem] = useState(items);
  const [featuredMenuItem, setFeaturedMenuItem] = useState(featuredItems);

  const [buttons, setButtons] = useState(allCategories);
  const [showAll, setShowAll] = useState(false);

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

        <div className='my-5 border-b text-2xl'>Featured Projects</div>
        <FeaturedMenu featuredMenuItem={featuredMenuItem} />
        
        <div className='flex items-center gap-2 my-5'>
          {showAll ? "Hide More" : (<span>Show More</span>)} Projects 
          
          <button onClick={() => setShowAll(!showAll)}>
            { showAll ? (<BiChevronDown size={30} />) : (<BiChevronRight size={30} />) }
          </button>
        </div>

        {showAll && (
          <div>
              <FilterButton button={buttons} filter={filter} />
              <div className='my-5'>
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
