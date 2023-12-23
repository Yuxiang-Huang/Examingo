import React from "react";

interface NavButtonProps {
    buttonText: string;
    clickFunction: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ buttonText, clickFunction }) => {
    return (
        <button onClick={clickFunction} className=" w-full relative border-primary-red border-8">
            <svg className="absolute" width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="button-gradient">
                        <stop offset="0%" stop-color="red" />
                        <stop offset="100%" stop-color="purple" />
                    </linearGradient>
                </defs>
                <polygon fill="url(#button-gradient)"points="0,0 0,100 100,100 100,0" />
            </svg>
            {buttonText}
        </button>
    );
};

export default NavButton;
