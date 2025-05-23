import React from 'react'

const SetupTable = ({ items }) => {
    return (
        <div className="overflow-x-auto rounded-b-lg">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                    <tr>
                        <th className="px-6 py-5 text-left">Name</th>
                        <th className="px-6 py-5 text-left">Remarks</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {items.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.remarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SetupTable