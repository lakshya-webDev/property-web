import React, { useEffect, useState } from "react";
import {
  Checkbox,
  InputField,
  SelectBox,
  Textarea,
} from "@/components/common/Input";
import ListPropertyLayout from "@/components/layout/ListPropertyLayout";
import { useSelector } from "react-redux";
import {
  PropertyStatus,
  PropertyFurnish,
  Bathroom,
  Bedrooms,
  Amenities,
} from "@/utils/constants";
import ImageUploader from "@/components/common/ImageUploader";

const PropertyDetails = ({ updateFormData }) => {
  const initialPropertyDetails = useSelector(
    (state) => state.propertyData.propertyDetails
  );
  const [propertyDetails, setPropertyDetails] = useState({
    propertyTitle: initialPropertyDetails.propertyTitle
      ? initialPropertyDetails.propertyTitle
      : "",
    size: initialPropertyDetails.size ? initialPropertyDetails.size : "",
    bedRoom: initialPropertyDetails.bedRoom
      ? initialPropertyDetails.bedRoom
      : "",
    bathrooms: initialPropertyDetails.bathrooms
      ? initialPropertyDetails.bathrooms
      : "",
    furnishing: initialPropertyDetails.furnishing
      ? initialPropertyDetails.furnishing
      : "",
    developedBy: initialPropertyDetails.developedBy
      ? initialPropertyDetails.developedBy
      : "",
    builtYear: initialPropertyDetails.builtYear
      ? initialPropertyDetails.builtYear
      : "",
    propertyRefNo: initialPropertyDetails.propertyRefNo
      ? initialPropertyDetails.propertyRefNo
      : "",
    propertyPrice: initialPropertyDetails.propertyPrice
      ? initialPropertyDetails.propertyPrice
      : "",
    amenities: initialPropertyDetails.amenities
      ? initialPropertyDetails.amenities || []
      : [],
    propertyDescription: initialPropertyDetails.propertyDescription
      ? initialPropertyDetails.propertyDescription
      : "",
    propertyStatus: initialPropertyDetails.propertyStatus
      ? initialPropertyDetails.propertyStatus
      : "",
    images: initialPropertyDetails.images ? initialPropertyDetails.images : [],
    terms: initialPropertyDetails.terms ? initialPropertyDetails.terms : "",
  });
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };
  const handleRemoveImage = (indexToRemove) => {
    const updatedImages = propertyDetails.images.filter(
      (_, index) => index !== indexToRemove
    );
    setPropertyDetails({
      ...propertyDetails,
      images: updatedImages,
    });
  };
  // Handle the selected images
  const handleImageChange = (e) => {
    const images = e.target.files;
    const imagePromises = [];

    const totalImages = images.length;
    let uploadedImages = 0;

    for (let i = 0; i < totalImages; i++) {
      const image = images[i];
      const reader = new FileReader();

      const imagePromise = new Promise((resolve, reject) => {
        reader.onload = (event) => {
          const base64Data = event.target.result;
          const imageData = {
            src: base64Data,
            fileName: image.name,
          };
          resolve(imageData);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(image);
      });

      imagePromise
        .then(() => {
          uploadedImages++;
        })
        .catch((error) => {
          console.error("Error converting images to base64:", error);
        });

      imagePromises.push(imagePromise);
    }

    Promise.all(imagePromises).then((imageDatas) => {
      setPropertyDetails({
        ...propertyDetails,
        images: [...propertyDetails.images, ...imageDatas],
      });
    });
  };
  
  // Handle the selected value,
  const handleSelectBoxChange = (name, selectedValue) => {
    setPropertyDetails({
      ...propertyDetails,
      [name]: selectedValue,
    });
  };

  const handleAmenityChange = (event) => {
    const amenityValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setPropertyDetails({
        ...propertyDetails,
        amenities: [...propertyDetails.amenities, amenityValue],
      });
    } else {
      setPropertyDetails({
        ...propertyDetails,
        amenities: propertyDetails.amenities.filter(
          (amenity) => amenity !== amenityValue
        ),
      });
    }
  };
  useEffect(() => {
    updateFormData("propertyDetails", propertyDetails);
  }, [propertyDetails, updateFormData]);

  // end code

  return (
    <ListPropertyLayout
      title="Add Your Property Details"
      subtitle="Please provide the property details"
    >
      <div className="container property-details max-w-lg py-12 pb-[21rem] px-3 sm:px-4">
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
        <ImageUploader
          name="propertyImages"
          label="Property Images"
          id="property-images"
          multiple
          onChange={handleImageChange}
          values={propertyDetails.images}
          onRemoveImage={handleRemoveImage}
          onDrop={handleImageChange}
        />
        <div className="flex space-x-2">
          <div className="flex-1">
            <SelectBox
              label="Bedrooms"
              name="bedRoom"
              id="bedRoom"
              className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
              onChange={(selectedValue) =>
                handleSelectBoxChange("bedRoom", selectedValue)
              }
              options={Bedrooms}
              placeholder="Select number of bedRooms"
              value={propertyDetails.bedRoom}
            />
          </div>
          <div className="flex-1">
            <SelectBox
              label="Bathrooms"
              name="bathrooms"
              id="bathrooms"
              className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
              onChange={(selectedValue) =>
                handleSelectBoxChange("bathrooms", selectedValue)
              }
              options={Bathroom}
              placeholder="Select number of bathrooms"
              value={propertyDetails.bathrooms}
            />
          </div>
        </div>
        <SelectBox
          label="Furnishing"
          name="furnishing"
          id="furnishing"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          onChange={(selectedValue) =>
            handleSelectBoxChange("furnishing", selectedValue)
          }
          options={PropertyFurnish}
          placeholder="Is it furnished?"
          value={propertyDetails.furnishing}
        />

        <div className="flex space-x-2">
          <div className="flex-1">
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
          </div>
          <div className="flex-1">
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
          </div>
        </div>
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
        <Textarea
          rows="4"
          type="text"
          name="propertyDescription"
          id="propertyDescription"
          onChange={handleDetailsChange}
          value={propertyDetails.propertyDescription}
          label="Property Description"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          placeholder="Enter property description"
        />
        <SelectBox
          label="Property Status"
          name="propertyStatus"
          id="propertyStatus"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          onChange={(selectedValue) =>
            handleSelectBoxChange("propertyStatus", selectedValue)
          }
          options={PropertyStatus}
          value={propertyDetails.propertyStatus}
          placeholder="Property Status"
        />
        <SelectBox
          label="Add Amenities"
          placeholder="Add Amenities"
          className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
          value={
            propertyDetails.amenities.slice(0, 3).join(", ") +
            (propertyDetails.amenities.length > 3
              ? ` +${propertyDetails.amenities.length - 3} more...`
              : "")
          }
          options={
            Amenities.length > 0 &&
            Amenities.map((amenity, index) => (
              <Checkbox
                key={index}
                className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:[#7065f0] dark:focus:[#7065f0] dark:ring-offset-gray-700 focus:shadow-none"
                id={`amenity_${index}`}
                value={amenity}
                onChange={handleAmenityChange}
                checked={propertyDetails.amenities.includes(amenity)}
                label={amenity}
              />
            ))
          }
        />
      </div>
    </ListPropertyLayout>
  );
};

export default PropertyDetails;
