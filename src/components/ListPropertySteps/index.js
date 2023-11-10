import React, { useState } from "react";
import PropertyType from "./PropertyType";
import PropertyAddress from "./PropertyAddress";
import PropertyDetails from "./PropertyDetails";
import PropertyListedBy from "./PropertyListedBy";
import Button from "@/components/common/Button"
import {setPropertyData} from "@/Redux/Features/propertySlice";
import { useDispatch, useSelector } from "react-redux";
const ListPropertySteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();
  const formData = useSelector((state)=>state.propertyData) 
  console.log(formData,"FormData")

  // Function to update formData
  const updateFormData = (key, value) => {
    dispatch(setPropertyData({...formData,[key]: value}))
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
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
      <div className={`button-group mt-5 bg-white z-10 flex space-x-3  max-w-lg mx-auto pb-5 fixed bottom-0 left-0 right-0 ${currentStep === 1 ? 'justify-center':'justify-between' }`}>
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
