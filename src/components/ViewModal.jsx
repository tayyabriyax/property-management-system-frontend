import React from "react";
import InputField from "./InputField";

const ViewModal = ({ isOpen, onClose, label }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-10 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-6xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">{label} Management</h2>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">
            ✖
          </button>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <InputField
            label={label + " Name"}
            required={true} />

          <textarea className="input col-span-3" placeholder="Remarks" rows="3" />

          <div className="col-span-3 text-right">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewModal;
