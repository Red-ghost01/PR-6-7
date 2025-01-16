const BadgeCard = ({ image, title, description }) => {
    return (
      <div className="max-w-full relative mx-auto bg-white rounded-lg shadow-md md:h-80 ">
        
        {/* Badge (Avatar) */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-30">
          <img
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
            src={image}
            alt="Avatar Badge"
          />
        </div>
        
        {/* Card Content */}
        <div className="p-6 pt-16 text-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  
  export default BadgeCard;