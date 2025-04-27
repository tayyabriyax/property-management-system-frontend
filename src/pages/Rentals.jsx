import React, { useState } from "react";
import PropertyFormModal from "../components/PropertyFormModal";
import RentalsTable from "../components/RentalsTable";
import RentalsFormModal from "../components/RentalsFormModal";

const properties = [
    { name: "abc", phone: "+7345782", flag: "🇵🇰" },
    { name: "sdf", phone: "+7345782", flag: "🇵🇰" },
    { name: "Test 1", phone: "+7345782", flag: "🇮🇳" },
    { name: "Test ", phone: "000000", flag: "🇦🇫" },
];

const Rentals = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="p-2 bg-[#F8FAFC] min-h-screen">

            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Rentals</h1>

            <div className="bg-white rounded-lg shadow-sm border">
                <div className="flex justify-between items-center p-4 border-b">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded px-3 py-2 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New
                    </button>
                </div>

                <RentalsTable
                    clients={properties} />
            </div>

            <RentalsFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Rentals;
