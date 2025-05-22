import React from "react";

const RentalsTable = ({ rentalContract }) => {
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
          {rentalContract.map((x, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{x.name}</td>
              <td className="px-6 py-4">{x.phone}</td>
              <td className="px-6 py-4">{x.address}</td>
              <td className="px-6 py-4">{x.cnic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentalsTable;
