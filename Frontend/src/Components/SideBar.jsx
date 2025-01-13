import React from 'react';
import { RiComputerLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoAnalytics } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { GiTrophiesShelf } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="w-1/6 bg-gray-800 text-white p-6 h-screen mt-0 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <BiLeaf className="mr-2 text-3xl font-bold" /> Nourish AI
        </h2>
        <ul className="space-y-9">
          <li className="flex items-center hover:text-gray-300 cursor-pointer">
            <RiComputerLine className="mr-2 text-2xl" /> Dashboard
          </li>
          <li className="flex items-center hover:text-gray-300 cursor-pointer">
            <SlCalender className="mr-2 text-2xl" /> Food Detection
          </li>
          <li className="flex items-center hover:text-gray-300 cursor-pointer">
            <IoAnalytics className="mr-2 text-2xl" /> Real-time Analysis
          </li>
          <li className="flex items-center hover:text-gray-300 cursor-pointer">
            <IoFastFood className="mr-2 text-2xl" /> Recipe
          </li>
          <li className="flex items-center hover:text-gray-300 cursor-pointer">
            <GiTrophiesShelf className="mr-2 text-2xl" /> Shelf Optimize
          </li>
        </ul>
      </div>

      {/* Image and Join Community Button */}
      <div className="mt-6"> {/* Reduced margin-top value to move image up */}
 
  
  
  {/* Donate Food Image */}
  <img
    src="/food-donation.png"
    alt="Donate Food"
    className="w-1/2 h-auto mb-4 rounded-full text-center mx-auto"
  />

  {/* Donate Food Button */}
  <button className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-300">
    Donate Food
  </button>
</div>

    </div>
  );
};

export default SideBar;
