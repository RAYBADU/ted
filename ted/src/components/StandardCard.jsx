import React from "react";

const StandardCard = ({ image, title, description }) => {
  return (
    <div className="mt-6 shadow-sm hover:shadow-md rounded-lg  w-80  mx-auto bg-white overflow-x-hidden cursor-pointer font-[inter]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg  hover:scale-105 transition-transform duration-300 "
      />
      <div className="p-4">
        <h1 className="font-semibold text-md">{title}</h1>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default StandardCard;
