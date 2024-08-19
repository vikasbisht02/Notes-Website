/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative flex items-center bg-transparent border-[1.5px] border-gray-300 rounded mt-3">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm sm:text-base bg-transparent py-2 sm:py-3 px-3 sm:px-4 rounded outline-none"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary"
        onClick={toggleShowPassword}
      >
        {isShowPassword ? (
          <FaRegEyeSlash size={20} />
        ) : (
          <FaRegEye size={20} />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
