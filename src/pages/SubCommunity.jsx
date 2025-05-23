import React, { useState } from "react";
import SubCommunityModal from "../components/SubCommunityModal";

const SubCommunity = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Sub Community</h1>

            <div className="bg-white rounded-lg border">
                <div className="flex justify-between items-center p-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded px-3 py-2 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="w-72">
                        <select className="input">
                            <option>--- Select ---</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New
                    </button>
                </div>
            </div>

            <SubCommunityModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default SubCommunity;
