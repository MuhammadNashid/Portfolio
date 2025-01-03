
import React, { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineTeam,
    AiOutlineProject,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            title="Go to Home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            title="Learn About Us"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineTeam size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            title="View Our Work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            title="Check Our Projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            title="Get in Touch"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}

      <div className="md:block hidden fixed top-[25%] z-10 ml-10">
        <div className="flex flex-col">
          <a
            href="#main"
            title="Go to Home"
            className="rounded-full bg-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            title="Learn About Us"
            className="rounded-full bg-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineTeam size={20} />
          </a>
          <a
            href="#skills"
            title="View Our Work"
            className="rounded-full bg-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            title="Check Our Projects"
            className="rounded-full bg-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            title="Get in Touch"
            className="rounded-full bg-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;