import React, { useState } from "react";
import LogoText from "./LogoText";
import Question from "./Question";

interface SelectTextProps {
  setGenerated: (generated: boolean) => void;
  setQuestion: (question: string) => void;
  setChoices: (choices: string[]) => void;
}

const getOutput = () => {
  chrome.tabs
    .query({ active: true, currentWindow: true })
    .then(function (tabs) {
      var activeTab = tabs[0];
      var activeTabId = activeTab.id;
      if (activeTabId != undefined)
        return chrome.scripting.executeScript({
          target: { tabId: activeTabId },
          func: DOMtoString,
        });
    })
    .then(function (results) {
      if (results != undefined) {
        console.log(results[0].result);
      }
    })
    .catch(function (error) {
      alert("There was an error injecting script : \n" + error.message);
    });
};

function DOMtoString() {
  if (window.getSelection) {
    return window.getSelection()?.anchorNode?.textContent;
  }
  return "";
}

const SelectText: React.FC<SelectTextProps> = ({
  setGenerated,
  setQuestion,
  setChoices,
}) => {
  const generate = () => {
    setGenerated(true);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Question questionText="Select Passage to Generate Questions From" />
      <button className="border" onClick={generate}>
        Generate
      </button>
    </div>
  );
};

export default SelectText;
