import React, { useState } from "react";

export const Input = ({ id, message, label, icon, ...props }) => {
  return (
    <div className="group z-0 form-field w-full relative">
      <input {...props} id={id} />
      {label && (
        <label
          htmlFor={id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-color peer-focus:dark:text-primary-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      )}
      {message && (
        <p className="mt-2 text-xs text-green-600 dark:text-green-400">
          <span className="font-medium">{message}</span>
        </p>
      )}
      {icon && (
        <span
          className="absolute right-2 top-0 cursor-pointer"
          onClick={props.onClick}
        >
          {icon}
        </span>
      )}
    </div>
  );
};
export const InputField = ({ id, message, label, ...props }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block capitalize mb-2 text-sm font-medium text-gray-700 dark:text-gray-500"
      >
        {label}
      </label>
      <input {...props} id={id} />
      {message ? (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          {message}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export const Textarea = ({ id, label, ...props }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block capitalize mb-2 text-sm font-medium text-gray-700 dark:text-gray-500"
      >
        {label}
      </label>
      <textarea id={id} {...props}></textarea>
    </div>
  );
};
export const SelectBox =({options,label,id, value, onChange,className,placeholder,children})=>{
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    if(onChange){
      onChange(option);
      setIsOpen(false);
    }
  };
  return(
    <div className="relative mb-3">
       <label
        htmlFor={id}
        className="block capitalize mb-2 text-sm font-medium text-gray-700 dark:text-gray-500"
      >
        {label}
      </label>
    <div
      className={` p-2  select-none flex justify-between items-center cursor-pointer capitalize ${className} ${isOpen ? 'rounded-t-none' : ''}`}
      onClick={handleToggle}
    >
      {value ? value : placeholder}
      <div className={`icon transform ${isOpen ? 'rotate-180 transition-transform ease-in-out duration-300' : ''}`}>
        <i class="ri-arrow-down-s-line text-lg"></i>
      </div>
    </div>
    {isOpen && (
      <ul className="absolute h-64  overflow-y-auto z-10 w-full select-none mt-1 bg-white border rounded-t-none border-gray-200 shadow-md rounded ">
        {options.length > 0 && options.map((option, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-[#d6d3f3] capitalize text-sm font-medium"
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    )}
   {children}
  </div>
  )
 }

export const Checkbox =({id,label,...props})=>{
  return(
    <div className="flex items-center p-2 rounded">
          <input 
           id={id}
           type="checkbox"
            {...props}
            />
          <label htmlFor={id} className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-500 cursor-pointer">{label}</label>
    </div>
  )
} 