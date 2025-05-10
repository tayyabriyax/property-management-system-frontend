import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ClientForm = () => {

    const [selectedType, setSelectedType] = useState("individual");

    const handleRadioChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-3 space-y-3 items-center py-4">
                <label className="font-medium">Type</label>
                <div className="flex gap-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="clientType"
                            value="individual"
                            checked={selectedType === "individual"}
                            onChange={handleRadioChange}
                        />
                        <span>Individual</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="clientType"
                            value="company"
                            checked={selectedType === "company"}
                            onChange={handleRadioChange}
                        />
                        <span>Company</span>
                    </label>
                </div>
            </div>

            {
                selectedType === "company" ?
                    <>
                        <InputField
                            label={"Company Name"}
                            required={false} />
                        <InputField
                            label={"License Authority"}
                            required={false} />
                        <InputField
                            label={"Trade License Number"}
                            required={false} />
                        <InputField
                            type="date"
                            label={"License Expiry"}
                            required={false} />
                        <InputField
                            type="file"
                            label={"License File"}
                            required={false} />

                        <div className="col-span-3 space-y-3 items-center pt-6 pb-4">
                            <label className="font-medium">Signatory</label>
                            <hr />
                        </div>
                    </> :
                    <>

                    </>
            }

            <InputField
                label={"Name"}
                required={true} />
            <InputField
                label={"Mobile Number"}
                required={true} />
            <InputField
                label={"Email"}
                required={true} />
            <SelectField
                label={"Nationality"}
                required={true} />

            <InputField
                label={"Address"}
                required={true} />
            <InputField
                label={"City"}
                required={true} />
            <SelectField
                label={"Country"}
                required={true} />

            <InputField
                label={"CNIC"}
                required={true} />
            <InputField
                type={"date"}
                label={"CNIC Expiry"}
                required={true} />
            <InputField
                type={"file"}
                label={"Upload CNIC"}
                required={true} />

            <SelectField
                label={"Bank Name"}
                required={false} />
            <InputField
                label={"Account Number"}
                required={false} />
            <InputField
                label={"Account Title"}
                required={false} />

            <InputField
                label={"IBAN"}
                required={false} />
            <InputField
                label={"Swift Code"}
                required={false} />

            <textarea className="input col-span-3" placeholder="Bank Account Remarks" rows="3" />
            <textarea className="input col-span-3" placeholder="Remarks" rows="3" />

            <div className="col-span-3 text-right">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ClientForm;
