import React, { useEffect, useState } from "react";
import PropertyTable from "../components/PropertyTable";
import PropertyFormModal from "../components/PropertyFormModal";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesAsync } from "../store/propertySlice";

const Property = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const properties = useSelector((state) => state.property.properties);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPropertiesAsync());
    }, [])

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Properties</h1>

            <div className="bg-white rounded-lg shadow-sm border">
                <div className="flex justify-between items-center p-4 border-b">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded px-3 py-2 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Broker"
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

                <PropertyTable
                    properties={properties} />
            </div>

            <PropertyFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Property;
