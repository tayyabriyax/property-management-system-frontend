import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const BrokerForm = () => {

    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <InputField
                label={"Name"}
                required={true} />
            <InputField
                label={"Mobile Number"}
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
                label={"Country of Residence"}
                required={true} />
            <InputField
                label={"CNIC Number"}
                required={true} />
            <InputField
                type="date"
                label={"CNIC Expiry"}
                required={true} />
            <InputField
                type="file"
                label={"Upload CNIC"}
                required={false} />
            <InputField
                label={"Email"}
                required={true} />
            <InputField
                label={"Password"}
                required={true} />

            <textarea className="input col-span-3" placeholder="Remarks" rows="3" />

            <div className="col-span-3 text-right">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default BrokerForm;
