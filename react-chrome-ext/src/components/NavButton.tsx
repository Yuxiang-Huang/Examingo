import React from "react";

interface NavButtonProps {
    buttonText: string;
    clickFunction: () => void;
}

// Create a button with a custom svg shape with a gradient background
const NavButton: React.FC<NavButtonProps> = ({ buttonText, clickFunction }) => {
    return (
        <button onClick={clickFunction} className="w-full relative my-3 py-1 em:text-xl em:leading-7">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-red -skew-x-24 rounded-xl shadow-main"></div>
            <span className="relative tracking-wider">{buttonText}</span>
        </button>
    );
};

export default NavButton;
