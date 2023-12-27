import React, { useState } from "react";
import LogoText from "./LogoText";
import Question from "./Question";
import CheckAnswerButton from "./CheckAnswerButton";

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

const SelectText = () => {
  return (
    <div>
      <Question questionText="Select Passage to Generate Questions From" />
      <div className="mt-12 h-4 mx-auto w-9/12">
        <CheckAnswerButton checkAnswerFunction={getOutput} buttonText="Generate Question"/>
      </div>
    </div>
  );
};

export default SelectText;
