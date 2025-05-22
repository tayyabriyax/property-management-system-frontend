import React, { useEffect, useState } from "react";
import RentalsTable from "../components/RentalsTable";
import BrokerFormModal from "../components/BrokerFormModal";
import { useDispatch, useSelector } from "react-redux";
import { getBrokersAsync } from "../store/brokerSlice";

const Broker = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const brokers = useSelector((state) => state.broker.brokers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrokersAsync());
    }, [])

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Broker</h1>

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
                    rentalContract={brokers} />
            </div>

            <BrokerFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Broker;
