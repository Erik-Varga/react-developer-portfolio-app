import React from 'react'

function FilterButton({button, filter}) {
  return (
    <div className='mb-3 flex gap-5'>
      {
        button.map((cat, i) => {
            return <button type='button' className="text-white group border-2 px-4 py-2 my-2 flex items-center focus:border-blue-700 hover:text-white hover:bg-blue-800 hover:border-blue-700" onClick={() => filter(cat)}>{cat}</button>

        }) 
      }
    </div>
  )
}

export default FilterButton
