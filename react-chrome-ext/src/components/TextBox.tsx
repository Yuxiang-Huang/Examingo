import React, { useState, useEffect, useRef } from "react";

type TextBoxProps = {
  initialText: string;
  isReadOnly: boolean;
  textFunction: () => void;
};

const TextBox: React.FC<TextBoxProps> = ({ initialText, isReadOnly, textFunction }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(document.createElement("textarea"));
  const [text, setText] = useState<string>(initialText);
  
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    textFunction();
  }, [text]);

  return <textarea className="text-black bg-gradient-to-br from-primary-red-50 to-primary-purple-50 rounded-lg border-none p-5 outline-none overflow-auto resize-none w-full shadow-main" readOnly={isReadOnly} value={text} ref={textAreaRef} onChange={e => setText(e.target.value)}></textarea>;
};

export default TextBox;
