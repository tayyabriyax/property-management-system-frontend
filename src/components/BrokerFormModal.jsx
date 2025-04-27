import React from "react";
import RentalsForm from "./RentalsForm";
import BrokerForm from "./BrokerForm";

const BrokerFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-10 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-6xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Broker Management</h2>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">
            ✖
          </button>
        </div>
        <BrokerForm />
      </div>
    </div>
  );
};

export default BrokerFormModal;
