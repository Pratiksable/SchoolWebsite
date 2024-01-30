// FacilityCard.js
import React from 'react';

const FacilityCard = ({ facility }) => {
  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="relative overflow-hidden h-48 mb-6">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-3">{facility.title}</h3>
      <p className="text-gray-700">{facility.description}</p>
    </div>
  );
};

export default FacilityCard;
