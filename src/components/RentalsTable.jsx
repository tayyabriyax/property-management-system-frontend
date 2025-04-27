import React from "react";

const RentalsTable = ({ clients }) => {
  return (
    <div className="overflow-x-auto rounded-b-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="px-6 py-5 text-left">Property</th>
            <th className="px-6 py-5 text-left">Owner</th>
            <th className="px-6 py-5 text-left">Broker</th>
            <th className="px-6 py-5 text-left">Tenants</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {clients.map((client, index) => (
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

export default RentalsTable;
