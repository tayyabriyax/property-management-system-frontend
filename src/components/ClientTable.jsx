import React from "react";

const ClientTable = ({ clients }) => {
  return (
    <div className="overflow-x-auto rounded-b-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="px-6 py-5 text-left">Name</th>
            <th className="px-6 py-5 text-left">Phone</th>
            <th className="px-6 py-5 text-left">Address</th>
            <th className="px-6 py-5 text-left">CNIC</th>
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

export default ClientTable;
