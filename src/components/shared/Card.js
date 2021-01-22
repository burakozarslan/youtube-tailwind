import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ thumbnail, title, channel, live }) => {
  return (
    <div className="max-w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "56%" }}
      >
        <img
          className="absolute w-full object-center object-cover"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="flex pt-4 pb-16">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
            alt=""
          />
        </div>
        <div className="ml-2">
          <h2 className="text-youtube-text font-medium">{title}</h2>
          <h3 className="text-sm text-youtube-gray leading-3 mt-2">
            {channel}
          </h3>
          <p className="text-sm text-youtube-gray">7.9M views - 4 years ago</p>
          {live && (
            <span className="uppercase text-youtube-red text-xs font-medium border border-youtube-red rounded-sm py-px px-1">
              Live Now
            </span>
          )}
        </div>
        <BsThreeDotsVertical className="flex-shrink-0 h-6 w-6 ml-auto text-youtube-gray" />
      </div>
    </div>
  );
};

export default Card;
