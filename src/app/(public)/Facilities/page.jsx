// FacilitiesPage.js
import React from 'react';
import Heading2 from "@/components/Heading2";
import FacilityCard from '@/components/facilityCard';
import facilitiesData from '@/constants/facilityData';


const FacilitiesPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      <Heading2 headingText={"School Facilities"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {facilitiesData.map((facility, index) => (
          <FacilityCard key={index} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FacilitiesPage;
