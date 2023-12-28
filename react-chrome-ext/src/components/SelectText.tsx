import React, { useState } from "react";
import Question from "./Question";
import CheckAnswerButton from "./CheckAnswerButton";
import { ChoiceAttributes } from "./MultipleChoiceSet";

interface SelectTextProps {
  setGenerated: (generated: boolean) => void;
  setQuestion: (question: string) => void;
  setChoices: (choices: ChoiceAttributes[]) => void;
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
      if (activeTabId !== undefined)
        return chrome.scripting.executeScript({
          target: { tabId: activeTabId },
          func: DOMtoString,
        });
    })
    .then(function (results) {
      if (
        results !== undefined &&
        results[0].result !== undefined &&
        results[0].result !== null
      ) {
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
  const [warningDisplay, setWarningDisplay] = useState<boolean>(false);

  const generate = () => {
    getContext().then((result) => {
      if (result?.context !== undefined) {
        if (result.context !== "") {
          setGenerated(true);
          getQuestionSet({ context: result?.context }).then((questionSet) => {
            const data = JSON.parse(questionSet);
            setQuestion(data.question);
            setChoices([
              { text: data.a, isCorrect: data.correctAnswerChoice === "a" },
              { text: data.b, isCorrect: data.correctAnswerChoice === "b" },
              { text: data.c, isCorrect: data.correctAnswerChoice === "c" },
              { text: data.d, isCorrect: data.correctAnswerChoice === "d" },
            ]);
          });
        } else {
          setWarningDisplay(true);
        }
      } else {
        setWarningDisplay(true);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Question questionText="Select Passage to Generate Questions From" />
      {warningDisplay && <Question questionText="Please select text!" />}
      <div className="mt-12 h-4 mx-auto w-9/12">
        <CheckAnswerButton
          checkAnswerFunction={generate}
          buttonText="Generate Question"
        />
      </div>
    </div>
  );
};

export default SelectText;
