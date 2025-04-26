import React, { useState } from "react";
import ClientFormModal from "../components/ClientFormModal";

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
        <div className="p-2 bg-[#F8FAFC] min-h-screen">

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

                <div className="flex h-[500px]">
                    <div className="w-full overflow-y-auto bg-[#F1F5F9]">
                        {filteredClients.map((client, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-center gap-3 hover:bg-blue-100 cursor-pointer border-b"
                            >
                                <span className="text-xl">{client.flag}</span>
                                <div>
                                    <div className="font-bold text-[#0F172A]">{client.name}</div>
                                    <div className="text-sm text-[#64748B]">{client.phone}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ClientFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Clients;
