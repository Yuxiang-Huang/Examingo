import React from "react";

interface NavButtonProps {
  buttonText: string;
  clickFunction: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ buttonText, clickFunction }) => {
  return (
    <button onClick={clickFunction} className=" border-2 p-2 m-4">
      {buttonText}
    </button>
  );
};

export default NavButton;
