import React, { useState, useEffect } from "react";

interface TextBoxProps {
  editable: boolean;
  text: string;
}

const TextBox: React.FC<TextBoxProps> = ({ editable, text }) => {
  const getText = () => {
    if (!editable) return text;
  };

  return (
    <textarea
      readOnly={!editable}
      rows={5}
      className="bg-gradient-to-r from-primary-purple to-primary-red rounded-xl"
    >
      {getText()}
    </textarea>
  );
};

export default TextBox;
