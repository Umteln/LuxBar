import React from 'react';

const Filters = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      {/*filter type */}
      <div>
        <p className='text-gray-700 font-bold'>Filter By Type</p>
        <div className='flex justify-between flex-wrap'>
          <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
            All
          </button>
          <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
            All
          </button>
          <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
            All
          </button>
          <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
            All
          </button>
          <button className='m-1 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white '>
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
