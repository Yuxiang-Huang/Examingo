import React, { useState } from "react";
import Question from "./Question";
import CheckAnswerButton from "./CheckAnswerButton";
import { ChoiceAttributes } from "./MultipleChoiceSet";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface SelectTextProps {
  setGenerated: (generated: boolean) => void;
  setQuestion: (question: string) => void;
  setChoices: (choices: ChoiceAttributes[]) => void;
}

interface InputDataForMC {
  context: string;
  numQuestions?: number;
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
  return document.body.innerHTML;
}

const summarize = async (text: string) => {
  try {
    const config: AxiosRequestConfig = {
      method: "post",
      url: "https://1t12e8sn7i.execute-api.us-east-1.amazonaws.com/Dev",
      data: {
        html_doc: text,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response: AxiosResponse = await axios(config);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const SelectText: React.FC<SelectTextProps> = ({
  setGenerated,
  setQuestion,
  setChoices,
}) => {
  const [warningDisplay, setWarningDisplay] = useState<boolean>(false);

  const generate = () => {
    setGenerated(true);
    getContext().then((result) => {
      if (result !== undefined) {
        summarize(result.context).then((summary) => {
          getQuestionSet({ context: summary.body, numQuestions: 1 }).then(
            (questionSets) => {
              const data = JSON.parse(questionSets);
              const questionOne = data.questions[0];
              setQuestion(questionOne.question);
              setChoices([
                {
                  text: questionOne.a,
                  isCorrect: questionOne.correctAnswerChoice === "a",
                },
                {
                  text: questionOne.b,
                  isCorrect: questionOne.correctAnswerChoice === "b",
                },
                {
                  text: questionOne.c,
                  isCorrect: questionOne.correctAnswerChoice === "c",
                },
                {
                  text: questionOne.d,
                  isCorrect: questionOne.correctAnswerChoice === "d",
                },
              ]);
            }
          );
        });
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
