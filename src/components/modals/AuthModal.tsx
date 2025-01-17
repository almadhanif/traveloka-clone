import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PulseLoader } from "react-spinners";
import GoogleIcon from "@/assets/icon/google.png";
import FacebookIcon from "@/assets/icon/facebook.png";
import { XMarkIcon } from "@heroicons/react/16/solid";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue === "") {
      setError("");
      setIsValid(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (!isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 485);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const validateInput = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError("");
      setIsValid(true);
    } else {
      setError("Invalid email format/phone number.");
      setIsValid(false);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsLoading(true);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      validateInput(value);
    }, 500);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`${!isOpen && "hidden"} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`} onClick={handleOverlayClick}>
      <div ref={modalRef} className={`bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative transform transition-all duration-500 ease-in-out ${isOpen ? "animate-slideIn" : isAnimating ? "animate-slideOut" : "opacity-0"}`}>
        <button className="absolute top-2 right-2 text-gray-400 hover:text-black" onClick={onClose}>
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Log in/Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email/Mobile Number</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className={`border rounded-lg w-full p-2 hover:border-black transition-col ors duration-300 ease-in-out ${error && inputValue !== "" ? "border-red-500" : "focus:border-blue-400"}`}
              placeholder="Example: +62812345678 or yourname@email.com"
            />
            {error && inputValue !== "" && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`font-semibold py-4 rounded-full w-full flex justify-center items-center gap-x-1 ${isValid && !isLoading ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          >
            {isLoading ? <PulseLoader color="gray" /> : "Continue"}
          </button>
        </form>
        <div className="flex flex-col justify-center items-center py-2">
          <div className="relative text-center my-4 w-[80%]">
            <span className="relative z-10 bg-white px-4 w-max">or log in/register with</span>
            <div className="absolute inset-x-0 top-1/2 border-1 border-t border-black z-0 w-full"></div>
          </div>

          <div className="space-y-3 w-full py-2 font-semibold">
            <button className="py-4 px-6 flex items-center justify-between rounded-full w-full bg-blue-200 text-blue-800">
              <span className="flex-grow text-center -mr-5">Google</span>
              <Image src={GoogleIcon} alt="Google Logo" className="w-6 h-6" />
            </button>
            <button className="py-4 px-6 flex items-center justify-between rounded-full w-full bg-blue-200 text-blue-800">
              <span className="flex-grow text-center -mr-5">Facebook</span>
              <Image src={FacebookIcon} alt="Facebook Logo" className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center">
            By continuing, you agree to this <span className="text-blue-600">Terms & Conditions</span> and acknowledge that you have been informed about our <span className="text-blue-600">Privacy Notice</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
