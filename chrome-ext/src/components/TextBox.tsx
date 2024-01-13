import React, { useState, useEffect, useRef } from "react";

type TextBoxProps = {
  text: string;
  setText: (newText: string) => void;
  isReadOnly: boolean;
};

const TextBox: React.FC<TextBoxProps> = ({
  text,
  setText,
  isReadOnly,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(
    document.createElement("textarea")
  );

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [text]);

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
