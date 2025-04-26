import React from "react";

const InputField = ({ label, type = "text", name, value, onChange, required, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "file" ? (
        <input
          type="file"
          name={name}
          onChange={onChange}
          required={required}
          className="border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
          file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 
          file:text-blue-700 hover:file:bg-blue-100"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || label}
          required={required}
          className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
};

export default InputField;
