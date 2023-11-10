import React from "react";

const ImageUploader = ({
  id,
  label,
  multiple,
  onChange,
  values,
  onRemoveImage,
}) => {
  return (
    <div className="image-uploader mb-3">
      <div
        className="block capitalize mb-2 text-sm font-medium text-gray-700 dark:text-gray-500"
        onDrop={onChange}
      >
        {label}
      </div>
      <div className="flex items-center justify-center w-full mb-3  h-24">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full p-2 border-2 border-gray-700  rounded-lg cursor-pointer "
        >
          <div className="flex flex-col items-center justify-center pt-3 pb-4">
            <svg
              className="w-4 h-4 mb-2 text-gray-600 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-600">
              <span className="font-semibold">Upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-600">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id={id}
            type="file"
            className="hidden"
            onChange={onChange}
            multiple={multiple ? true : false}
          />
        </label>
      </div>
      {values.length > 0 && (
        <div className="uploader-preview uploader-preview flex flex-col space-y-3 my-3 py-2">
          {values.map((val, i) => {
            return (
              <div
                className="items p-2 relative flex justify-between items-center  border-2 border-gray-300 rounded-md "
                key={i}
              >
                <div className="image flex items-center space-x-2">
                  <img
                    className="h-10 w-10 rounded object-cover"
                    src={val.src}
                  />
                  <h2 className="text-sm font-medium">{val.fileName}</h2>
                </div>
                <div
                  className="close-btn cursor-pointer"
                  onClick={() => onRemoveImage(i)}
                >
                  <i className="ri-close-line"></i>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
