import React, { useState, useEffect } from "react";

type TextBoxProps = {
  text: string;
};

const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  const [editable, setEditable] = useState<string>();
  useEffect(() => {
    // setEditable();
  }, []);

  return <input className="bg-blue-500" />;
};

export default TextBox;
