import React from "react";

const PropertyTable = ({ properties }) => {
  return (
    <div className="overflow-x-auto rounded-b-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="px-6 py-5 text-left">Community</th>
            <th className="px-6 py-5 text-left">Sub Community</th>
            <th className="px-6 py-5 text-left">Type</th>
            <th className="px-6 py-5 text-left">View</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {properties.map((client, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{client.name}</td>
              <td className="px-6 py-4">{client.phone}</td>
              <td className="px-6 py-4">{client.address}</td>
              <td className="px-6 py-4">{client.cnic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
