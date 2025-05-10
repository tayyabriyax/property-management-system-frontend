import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const RentalsForm = () => {

    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <InputField
                label={"Property"}
                required={true} />
            <InputField
                label={"Owner"}
                required={true} />
            <InputField
                label={"Broker"}
                required={true} />
            <InputField
                label={"Tenant"}
                required={true} />
            <InputField
                label={"Tenant PoA"}
                required={false} />
            <InputField
                type="file"
                label={"Upload Tenant PoA"}
                required={true} />

            <div className="col-span-3 space-y-3 items-center pt-6 pb-4">
                <label className="font-medium">Contract Details</label>
                <hr />
            </div>


            <InputField
                label={"Contract Value"}
                required={true} />
            <InputField
                label={"Annual Rent"}
                required={false} />
            <InputField
                label={"Security Deopsite"}
                required={true} />
            <SelectField
                label={"Number of Cheques"}
                required={true} />
            <InputField
                type="date"
                label={"Contract Start Date"}
                required={true} />
            <InputField
                type="date"
                label={"Contract End Date"}
                required={true} />

            <div className="col-span-3 space-y-3 items-center pt-6 pb-4">
                <hr />
            </div>

            <textarea className="input col-span-3" placeholder="Remarks" rows="3" />

            <div className="col-span-3 text-right">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default RentalsForm;
