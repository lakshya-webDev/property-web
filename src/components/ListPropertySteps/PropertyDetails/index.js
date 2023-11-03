import React, { useState } from "react";
import { InputField } from "@/components/common/Input";
import ListPropertyLayout from "@/components/layout/ListPropertyLayout";

const PropertyDetails = ({ updateFormData }) => {
  const [propertyDetails, setPropertyDetails] = useState({
    propertyTitle: "",
    size: "",
    bedRoom: "",
    bathrooms: "",
    furnishing: "",
    developedBy: "",
    builtYear: "",
    propertyRefNo: "",
    propertyPrice: "",
    features: [],
    propertyDescription: "",
    propertyStatus: "",
    terms: "",
    images: [],
  });
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;

    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });

    updateFormData("propertyDetails", propertyDetails);
  };
  return (
    <ListPropertyLayout
      title="Add Your Property Details"
      subtitle="Please provide the property details"
    >
      <div className="container property-address max-w-lg py-2">
        <InputField
          type="text"
          name="propertyTitle"
          id="propertyTitle"
          onChange={handleDetailsChange}
          value={propertyDetails.propertyTitle}
          label="Property Title"
          placeholder="Enter property title"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"

        />
        <InputField
          type="text"
          name="size"
          id="size"
          onChange={handleDetailsChange}
          value={propertyDetails.size}
          label="Size (sq. ft)"
          placeholder="Enter property size"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"

        />
        <InputField
          type="text"
          name="bedRoom"
          id="bedRoom"
          onChange={handleDetailsChange}
          value={propertyDetails.bedRoom}
          label="Bedrooms"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter number of bedrooms"
        />
        <InputField
          type="text"
          name="bathrooms"
          id="bathrooms"
          onChange={handleDetailsChange}
          value={propertyDetails.bathrooms}
          label="Bathrooms"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter number of bathrooms"
        />
        <InputField
          type="text"
          name="furnishing"
          id="furnishing"
          onChange={handleDetailsChange}
          value={propertyDetails.furnishing}
          label="Furnishing"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property furnishing details"
        />
        <InputField
          type="text"
          name="developedBy"
          id="developedBy"
          onChange={handleDetailsChange}
          value={propertyDetails.developedBy}
          label="Developed By"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property developer details"
        />
        <InputField
          type="text"
          name="builtYear"
          id="builtYear"
          onChange={handleDetailsChange}
          value={propertyDetails.builtYear}
          label="Built Year"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property built year"
        />
        <InputField
          type="text"
          name="propertyRefNo"
          id="propertyRefNo"
          onChange={handleDetailsChange}
          value={propertyDetails.propertyRefNo}
          label="Property Reference Number"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property reference number"
        />
        <InputField
          type="text"
          name="propertyPrice"
          id="propertyPrice"
          onChange={handleDetailsChange}
          value={propertyDetails.propertyPrice}
          label="Property Price"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property price"
        />
        <InputField
          type="text"
          name="propertyDescription"
          id="propertyDescription"
          onChange={handleDetailsChange}
          value={propertyDetails.propertyDescription}
          label="Property Description"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property description"
        />
        <InputField
          type="text"
          name="propertyStatus"
          id="propertyStatus"
          onChange={handleDetailsChange}
          value={propertyDetails.propertyStatus}
          label="Property Status"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property status"
        />
        <InputField
          type="text"
          name="terms"
          id="terms"
          onChange={handleDetailsChange}
          value={propertyDetails.terms}
          label="Terms and Conditions"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property terms and conditions"
        />
      </div>
    </ListPropertyLayout>
  );
};

export default PropertyDetails;
