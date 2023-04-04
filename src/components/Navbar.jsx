import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineTag,
  AiOutlineShareAlt,
  AiOutlineContacts,
  AiOutlineLogin,
} from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNav = () => {
    setNavToggle((prev) => !prev);
  };

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left side*/}
      <div className='flex items-center'>
        <div
          className='cursor-pointer'
          onClick={handleNav}
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Lux<span className='font-bold'> Bar</span>
        </h1>
      </div>
      {/*search*/}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch sixe={25} />
        <input
          type='text'
          placeholder='Search drinks'
          className='bg-transparent  p-2 w-full focus:outline-none '
        />
      </div>
      {/* cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 hover:bg-white hover:text-black'>
        <BsFillCartFill
          size={20}
          className='mr-2'
        />
      </button>

      {/* mobile */}
      {/*overlay */}
      {navToggle ? (
        <div className='bg-black/80 fixed w-full h-screen z-10  top-0 left-0 '></div>
      ) : (
        ''
      )}

      {/* side drawer */}
      <div
        className={
          navToggle
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={handleNav}
          size={30}
          className='absolute right-4
           top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          {' '}
          Lux<span className='font-bold'> Bar</span>
        </h2>
        <nav>
          <ul className='flex flex-col text-gray-800'>
            <li className='text-xl py-4 flex mx-2 hover:bg-gray-100'>
              {' '}
              <AiOutlineTag size={20} /> Promotions
            </li>
            <li className='text-xl py-4 flex mx-2 hover:bg-gray-100'>
              <AiOutlineShareAlt size={20} /> Share
            </li>
            <li className='text-xl py-4 flex mx-2 hover:bg-gray-100'>
              <AiOutlineContacts size={20} /> Contact Us
            </li>
            <li className='text-xl py-4 flex mx-2 hover:bg-gray-100'>
              <AiOutlineLogin size={20} /> Login
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
