import React from "react";

interface InputFieldProps {
  label: string;
  textRef: React.RefObject<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({ label, textRef }) => {
  return (
    <div>
      <label>{label}:</label>
      <input className="bg-cyan-500" type="text" ref={textRef} />
    </div>
  );
};

export default InputField;
