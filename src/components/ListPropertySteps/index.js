import React, { useState } from "react";
import PropertyType from "./PropertyType";
import PropertyAddress from "./PropertyAddress";
import PropertyDetails from "./PropertyDetails";
import PropertyListedBy from "./PropertyListedBy";
import Button from "@/components/common/Button"
import {setPropertyData} from "@/Redux/Features/propertySlice";
import { useDispatch } from "react-redux";
const ListPropertySteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    propertyType: '', 
    address: {},
    propertyDetails: {},
    listedBy: {},
  });

  // Function to update formData
  const updateFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    dispatch(setPropertyData(formData))
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      {currentStep === 1 && <PropertyType updateFormData={updateFormData} />}
      {currentStep === 2 && (
        <PropertyAddress updateFormData={updateFormData} />
      )}
      {currentStep === 3 && (
        <PropertyDetails updateFormData={updateFormData} />
      )}
      {currentStep === 4 && (
        <PropertyListedBy updateFormData={updateFormData} />
      )}
      <div className="button-group flex space-x-3 justify-between max-w-lg mx-auto py-5">
        {currentStep > 1 && <Button variant="bg-primary-color text-white rounded-md w-48" onClick={prevStep}><i className="ri-arrow-left-circle-line me-1"></i> Previous</Button>}
        {currentStep < 4 ? (
          <Button variant="bg-primary-color text-white rounded-md w-48" onClick={nextStep}>Next <i className="ri-arrow-right-circle-line ms-1"></i></Button>
        ) : (
          <Button variant="bg-primary-color text-white rounded-md w-48" onClick={nextStep}>Submit <i className="ri-building-line ms-1"></i></Button>
        )}
      </div>
    </>
  );
};

export default ListPropertySteps;
