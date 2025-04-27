import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const PropertyForm = () => {

    return (
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <InputField
                label={"Property Unit Number"}
                required={true} />
            <InputField
                label={"Community"}
                required={true} />
            <InputField
                label={"Sub Community"}
                required={true} />
            <InputField
                label={"Type"}
                required={true} />
            <InputField
                label={"Area (Sq Meter)"}
                required={true} />
            <InputField
                label={"View"}
                required={true} />
            <InputField
                label={"Balcony"}
                required={true} />
            <InputField
                label={"Parking Number"}
                required={true} />
            <InputField
                label={"Electrical Meter No"}
                required={true} />
            <InputField
                label={"Sui Gas Meter No"}
                required={true} />
            <InputField
                label={"Services Charges Account Number"}
                required={false} />
            <InputField
                label={"Developer Name"}
                required={true} />


            <div className="col-span-3 space-y-3 items-center pt-6 pb-4">
                <label className="font-medium">Owner & Broker</label>
                <hr />
            </div>


            <InputField
                label={"Owner"}
                required={true} />
            <InputField
                label={"Power of Attorney"}
                required={false} />
            <InputField
                type="file"
                label={"Upload PoA"}
                required={false} />

            <InputField
                label={"Broker"}
                required={true} />
            <SelectField
                label={"Property Management Contract"}
                required={false} />
            <InputField
                type="file"
                label={"Upload PMC"}
                required={false} />

            <div className="col-span-3 space-y-3 items-center pt-6 pb-4">
                <label className="font-medium">Management Fee</label>
                <hr />
            </div>

            <InputField
                label={"Percentage"}
                required={false} />
            <InputField
                label={"Ammount"}
                required={false} />

            <div className="col-span-3 space-y-3 items-center pt-6 pb-4">
                <label className="font-medium">Tenant</label>
                <hr />
            </div>

            <InputField
                label={"Tenant"}
                required={false} />
            <InputField
                label={"Power of Attorney"}
                required={false} />
            <InputField
                type="file"
                label={"Upload PoA"}
                required={false} />
            <InputField
                label={"Contract Value"}
                required={false} />
            <InputField
                label={"Annual Rent"}
                required={false} />
            <InputField
                label={"Security Deposite"}
                required={false} />
            <InputField
                label={"Number of Cheques"}
                required={false} />
            <InputField
                type="date"
                label={"Contract Start Date"}
                required={false} />
            <InputField
                type="date"
                label={"Contract End Date"}
                required={false} />

            <textarea className="input col-span-3" placeholder="Remarks" rows="3" />

            <div className="col-span-3 text-right">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default PropertyForm;
