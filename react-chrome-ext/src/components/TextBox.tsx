import React, { useState, useEffect, useRef } from "react";

type TextBoxProps = {
  initialText: string;
  isReadOnly: boolean;
  textFunction: () => void;
};

const TextBox: React.FC<TextBoxProps> = ({
  initialText,
  isReadOnly,
  textFunction,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(
    document.createElement("textarea")
  );
  const [text, setText] = useState<string>(initialText);

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    textFunction();
  }, [text, textFunction]);

  return (
    <textarea
      className="text-black bg-gradient-to-r from-primary-purple-50 to-primary-red-50 rounded-lg border-none py-2 px-4 outline-none overflow-auto resize-none w-full shadow-inner-white"
      readOnly={isReadOnly}
      value={text}
      ref={textAreaRef}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
};

export default TextBox;
