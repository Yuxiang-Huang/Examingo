import React, { useState } from "react";
import LogoText from "./LogoText";
import Question from "./Question";

interface SelectTextProps {
  setGenerated: (generated: boolean) => void;
  setQuestion: (question: string) => void;
  setChoices: (choices: string[]) => void;
}

interface InputDataForMC {
  context: string;
}

const getQuestionSet = async (inputContext: InputDataForMC) => {
  return fetch(
    "https://gtevhdluc3.execute-api.us-east-1.amazonaws.com/default/examingoChatGPT",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputContext),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json() as Promise<any>;
    })
    .then((data) => {
      return data.body;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const getContext = async () => {
  return chrome.tabs
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
      if (results != undefined && results[0].result != undefined) {
        return {
          context: results[0].result,
        };
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
    getContext().then((result) => {
      if (result?.context != undefined)
        getQuestionSet({ context: result?.context }).then((questionSet) => {
          console.log(questionSet);
          console.log(JSON.stringify(questionSet));
          // let array = questionSet.split("\n");
          // setQuestion(array[{"\n  \"question\"]);
        });
    });
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
