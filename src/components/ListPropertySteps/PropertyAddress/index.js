import React, { useEffect, useState } from "react";
import { InputField } from "@/components/common/Input";
import ListPropertyLayout from "@/components/layout/ListPropertyLayout";
import { useSelector } from "react-redux";
const PropertyAddress = ({ updateFormData }) => {
  const address = useSelector((state) => state.propertyData.address);

  const [currentAddress, setCurrentAddress] = useState({
    area: address.area ? address.area : null,
    street: address.street ? address.street : null,
    city: address.city ? address.city : null,
    postalCode: address.postalCode ? address.postalCode : null,
  });
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress({
      ...currentAddress,
      [name]: value,
    });
  };
  useEffect(() => {
    // Use the updateFormData function inside the useEffect hook
    updateFormData("address", currentAddress);
  }, [currentAddress, updateFormData]);
  return (
    <ListPropertyLayout
      title="Add Your address"
      subtitle="Please provide the address details for your property"
    >
      <div className="container property-address max-w-lg py-2">
        <InputField
          type="text"
          name="area"
          id="area"
          onChange={handleAddressChange}
          value={currentAddress.area}
          label="Area"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Area"
        />
        <InputField
          type="text"
          name="street"
          id="street"
          label="street"
          onChange={handleAddressChange}
          value={currentAddress.street}
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Street address"
        />
        <div className="flex space-x-2">
          <div className="flex-1">
            <InputField
              type="text"
              name="city"
              label="city"
              id="city"
              onChange={handleAddressChange}
              value={currentAddress.city}
              className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
              placeholder="City"
            />
          </div>
          <div className="flex-1">
            <InputField
              label="postal code"
              type="text"
              name="postalCode"
              id="postalCode"
              onChange={handleAddressChange}
              value={currentAddress.postalCode}
              className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
              placeholder="Postal code"
            />
          </div>
        </div>
      </div>
    </ListPropertyLayout>
  );
};

export default PropertyAddress;
