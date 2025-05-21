import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = ({ label, placeholder, name, value, onChange }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="my-4 relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    id={name}
                    name={name}
                    autoComplete="off"
                    value={value}
                    onChange={onChange}
                    className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
    )
}

export default PasswordField