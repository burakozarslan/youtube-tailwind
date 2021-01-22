import React from "react";

import { MdHome, MdVideoLibrary } from "react-icons/md";
import { GoFlame } from "react-icons/go";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlinePlaySquare, AiFillClockCircle } from "react-icons/ai";
import { GiBackwardTime } from "react-icons/gi";
import { ImPlay } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import {
  RiPlayList2Fill,
  RiArrowDownSLine,
  RiBroadcastLine,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-64 flex-none overflow-y-auto bg-white text-sm text-youtube-text">
      {/* Top */}
      <ul className="py-3 border-b border-youtube-divider">
        <li className="flex items-center px-6 py-2 bg-youtube-divider  capitalize font-medium hover:bg-youtube-divider cursor-pointer">
          <MdHome className=" text-youtube-red h-6 w-6" />
          <span className="ml-5">Home</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <GoFlame className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Trending</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <BsFillCollectionPlayFill className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Subscriptions</span>
        </li>
      </ul>

      {/* Middle */}
      <ul className="py-3 border-b border-youtube-divider">
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <MdVideoLibrary className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Library</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <GiBackwardTime className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">History</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <AiOutlinePlaySquare className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Your videos</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <AiFillClockCircle className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Watch later</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <RiPlayList2Fill className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Travel</span>
        </li>
        <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
          <RiArrowDownSLine className="h-5 w-5 text-youtube-gray" />
          <span className="ml-6">Show more</span>
        </li>
      </ul>

      {/* Subscriptions */}
      <div className="py-3 border-b border-youtube-divider">
        <h3 className="px-6 py-2 uppercase text-sm font-medium text-youtube-gray">
          Subscriptions
        </h3>
        <ul className="text-youtube-text text-sm">
          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1527697368636-7ae2fce27121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6 truncate">Trap Nation</span>
            <div className="flex-1">
              <RiBroadcastLine className="h-5 w-5 ml-auto text-youtube-red" />
            </div>
          </li>

          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6">Strapi</span>
          </li>

          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6">Andertons Music Co</span>
            <div className="flex-1">
              <div className="w-2 h-2 rounded-full bg-blue-700 ml-auto"></div>
            </div>
          </li>

          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1527697368636-7ae2fce27121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6 truncate">Small Business Toolbox</span>
          </li>

          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6 truncate">The Whiskey Charmers Music</span>
          </li>

          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6">CLAPTONE</span>
          </li>

          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <div className=" flex-shrink-0 w-6 h-6 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1527697368636-7ae2fce27121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                alt=""
              />
            </div>
            <span className="ml-6">Two Another</span>
          </li>
          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <RiArrowDownSLine className="h-5 w-5 text-youtube-gray" />
            <span className="ml-6">Show 21 more</span>
          </li>
        </ul>
      </div>

      {/* More from YouTube */}
      <div className="py-3 border-b border-youtube-divider">
        <h3 className="px-6 py-2 uppercase text-sm font-medium text-youtube-gray">
          More from YouTube
        </h3>
        <ul className="">
          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <ImPlay className="h-5 w-5 text-youtube-gray" />
            <span className="ml-6">YouTube Premium</span>
          </li>
          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <SiYoutubegaming className="h-5 w-5 text-youtube-gray" />
            <span className="ml-6">Gaming</span>
          </li>
          <li className="flex items-center px-6 py-2 capitalize hover:bg-youtube-divider cursor-pointer">
            <RiBroadcastLine className="h-5 w-5 text-youtube-gray" />
            <span className="ml-6">Live</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
