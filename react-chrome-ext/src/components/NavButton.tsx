import React from "react";

interface NavButtonProps {
    buttonText: string;
    clickFunction: () => void;
}

// Create a button with a custom svg shape with a gradient background
const NavButton: React.FC<NavButtonProps> = ({ buttonText, clickFunction }) => {
    return (
        <button onClick={clickFunction} className="w-11/12 relative my-3 p-2">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-red -skew-x-24 rounded-lg shadow-main"></div>
            <span className="relative">{buttonText}</span>
        </button>
    );
};

export default NavButton;
