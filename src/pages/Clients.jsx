import React, { useState } from "react";
import ClientFormModal from "../components/ClientFormModal";
import ClientTable from "../components/ClientTable";

const clients = [
    { name: "Hammad", phone: "+7345782", flag: "🇵🇰" },
    { name: "Saba", phone: "+7345782", flag: "🇵🇰" },
    { name: "Test 1", phone: "+7345782", flag: "🇮🇳" },
    { name: "Test Client", phone: "000000", flag: "🇦🇫" },
];

const Clients = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const filteredClients = clients.filter((client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Clients</h1>

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

                <ClientTable
                    clients={clients} />
            </div>

            <ClientFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Clients;
