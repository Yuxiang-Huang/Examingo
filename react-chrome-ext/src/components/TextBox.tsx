import React, { useState, useEffect } from "react";

type TextBoxProps = {
  initialText: string;
  isReadOnly: boolean;
  textFunction: () => void;
};

const TextBox: React.FC<TextBoxProps> = ({ initialText, isReadOnly, textFunction }) => {
  const [text, setText] = useState<string>(initialText);
  const [resize, setResize] = useState<string>("");
  
  useEffect(() => {
    setResize(`h-${Math.ceil(text.length / 50) * 12}`);
    textFunction();
  }, [text]);

  return <textarea className={resize + " " + "bg-gradient-to-r from-primary-red-50 to-primary-purple-50 rounded-lg border-none outline-none overflow-auto resize-none w-full"} readOnly={false} value={text} onChange={e => setText(e.target.value)}></textarea>;
};

export default TextBox;
