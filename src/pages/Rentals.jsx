import React, { useEffect, useState } from "react";
import RentalsTable from "../components/RentalsTable";
import RentalsFormModal from "../components/RentalsFormModal";
import { useDispatch, useSelector } from "react-redux";
import { getRentalContractsAsync } from "../store/rentalContractSlice";

const Rentals = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const rentalContracts = useSelector((state) => state.rentalContract.rentalContracts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRentalContractsAsync());
    }, [])

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

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
                    rentalContract={rentalContracts} />
            </div>

            <RentalsFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Rentals;
