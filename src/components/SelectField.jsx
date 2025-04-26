import React from "react";

const SelectField = ({ label, value, onChange, required }) => {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select className="input">
                <option>--- Select ---</option>
            </select>
        </div>
    );
};

export default SelectField;