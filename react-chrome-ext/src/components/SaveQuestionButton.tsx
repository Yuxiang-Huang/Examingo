import React from "react";

const SaveQuestionButton = () => {
  return (
    <div>
      <button className="rounded-full p-1px mb-3 bg-gradient-to-r from-primary-purple to-primary-red">
        <span className="flex w-full rounded-full p-2 bg-button-bg">
          <span className="bg-gradient-to-r from-primary-red to-primary-purple text-transparent bg-clip-text text-base">
            Save Question
          </span>
        </span>
      </button>
    </div>
  );
};

export default SaveQuestionButton;
