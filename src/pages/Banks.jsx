import { useEffect, useState } from "react";
import SetupModal from "../components/SetupModal";
import { useDispatch, useSelector } from "react-redux";
import { createClientAsync, getBanksAsync } from "../store/bankSlice";
import SetupTable from "../components/SetupTable";

const Bank = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [bankData, setBankData] = useState({ name: "", remarks: "" });

    const banks = useSelector((state) => state.bank.banks);
    const loadData = useSelector((state) => state.bank.loadData);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createClientAsync(bankData));
        setModalOpen(false);
    }

    useEffect(() => {
        dispatch(getBanksAsync());
    }, [loadData])

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

            <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Banks</h1>

            <div className="bg-white rounded-lg border">
                <div className="flex justify-between items-center p-4">
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

                <SetupTable
                    items={banks} />
            </div>

            <SetupModal
                label={"Bank"}
                isOpen={isModalOpen}
                setData={setBankData}
                onSubmit={handleSubmit}
                onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Bank;
