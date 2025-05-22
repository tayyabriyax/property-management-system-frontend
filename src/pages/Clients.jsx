import React, { useEffect, useState } from "react";
import ClientFormModal from "../components/ClientFormModal";
import ClientTable from "../components/ClientTable";
import { useDispatch, useSelector } from "react-redux";
import { getClientsAsync } from "../store/clientSlice";

const Clients = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const clients = useSelector((state) => state.client.clients);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClientsAsync());
    }, [])

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
