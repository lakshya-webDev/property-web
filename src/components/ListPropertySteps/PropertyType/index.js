import React, { useState } from "react";
import ListPropertyLayout from "@/components/layout/ListPropertyLayout";
import { PropertyTypes } from "@/utils/constants";

const PropertyType = ({ updateFormData }) => {
  const [selectedType,setSelectedType]=useState(null)
  const handlePropertyTypeSelection = (selectedType) => {
    setSelectedType(selectedType)
    updateFormData('propertyType', selectedType);
  };
  return (
    <ListPropertyLayout
      title="Hello, what are you listing today?"
      subtitle="Select the area that best suits your ad"
    >
      <div className="container property-type max-w-xl">
        <div className="flex flex-wrap justify-center space-x-3">
          {PropertyTypes.length > 0 && PropertyTypes.map((val,i)=>(
          <div key={i} className={`${selectedType === val.type ? 'border-primary-color border-2' :""} p-4 margin-3 flex flex-col justify-center items-center shadow-lg cursor-pointer `} type={val.type} onClick={() => handlePropertyTypeSelection(val.type)}>
            <img src={val.iconUrl} className="h-[60px]" />
            <h2 className="font-semibold">{val.title}</h2>
          </div>
          ))}
        </div>
      </div>
    </ListPropertyLayout>
  );
};

export default PropertyType;
