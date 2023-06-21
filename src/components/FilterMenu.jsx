import React from "react";

function FilterMenu({ menuItem }) {
  return (
    <div className="item grid sm:grid-cols-2 md:grid-cols-4 gap-3">
      {menuItem.map((item) => {
        return (
          <div
            className="item-container flex flex-col border border-gray-500 hover:border-white"
            key={item.id}
          >
            <img src={item.image} alt="" />

            <div className="p-2">
                <div>{item.name}</div>

                <span class="inline-block whitespace-nowrap rounded-full bg-primary-100 px-[0.65em] pb-[1.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                {item.category}
                </span>

                <p className="px-2"></p>
                {/* <p>{item.description}</p> */}

                <div className="">
                    <div className="pt-2 text-center">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                        <button
                        className="text-center rounded-lg px-3 py-3 m-1
                            bg-white text-gray-700 font-bold text-sm"
                        >
                        Code
                        </button>
                    </a>

                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                        <button
                        className="text-center rounded-lg px-3 py-3 m-1
                            bg-white text-gray-700 font-bold text-sm"
                        >
                        Live
                        </button>
                    </a>
                    </div>
                </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default FilterMenu;
