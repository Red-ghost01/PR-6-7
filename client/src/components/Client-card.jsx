import React from "react";
import image from "../assets/images/467858946_1317848599119206_8893472275537528835_n.jpg"
const Card = () => {
    return (
      <div className="max-w-xs relative mx-auto bg-white rounded-lg z-10 shadow-md ">
        
        {/* Avatar */}
        <div className="absolute -top-1/4 z-30 flex items-center justify-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-white"
            src={image}
            alt="Avatar"
          />
        </div>
  
        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-lg font-semibold">Card Title</h2>
          <p className="text-gray-600 mt-2">
            This is some example text within a card. You can add more details and
            content here as needed.
          </p>
        </div>
      </div>
    );
  };
  

export default Card;