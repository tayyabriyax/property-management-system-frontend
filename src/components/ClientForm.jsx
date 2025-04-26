import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ClientForm = () => {
    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-3 flex gap-4 items-center">
                <label className="font-medium">Type</label>
                <label><input type="radio" name="type" defaultChecked /> Individual</label>
                <label><input type="radio" name="type" /> Company</label>
            </div>

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
                label={"Select"}
                required={false} />

            <InputField
                label={"Address"}
                required={true} />
            <InputField
                label={"City"}
                required={true} />
            <SelectField
                label={"Select"}
                required={false} />

            <InputField
                label={"CNIC"}
                required={true} /><InputField
                label={"CNIC Expiry"}
                required={true} /><InputField
                label={"Upload"}
                required={true} />

            <SelectField
                label={"Select"}
                required={false} />
            <InputField
                label={"Account Number"}
                required={true} />
            <InputField
                label={"Account Title"}
                required={true} />

            <InputField
                label={"IBAN"}
                required={true} />
            <InputField
                label={"Swift Code"}
                required={true} />

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
