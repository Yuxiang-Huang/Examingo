import React, { useState } from "react";
import Question from "./Question";
import CheckAnswerButton from "./CheckAnswerButton";
import { ChoiceAttributes } from "./MultipleChoiceSet";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { MultipleChoiceSetProperties } from "./pages/MultipleChoice";
import Counter from "./Counter";

interface SelectTextProps {
  setGenerated: (generated: boolean) => void;
  setQuestionSets: (
    questionSets:
      | MultipleChoiceSetProperties[]
      | ((
          prevQuestionSets: MultipleChoiceSetProperties[]
        ) => MultipleChoiceSetProperties[])
  ) => void;
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

export const getContext = async () => {
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

interface JSONQuestionSet {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correctAnswerChoice: "a" | "b" | "c" | "d";
}

const SelectText: React.FC<SelectTextProps> = ({
  setGenerated,
  setQuestionSets,
}) => {
  const [warning, setWarning] = useState<boolean>(false);
  const [questionsCount, setQuestionsCount] = useState<number>(2);

  const generate = () => {
    setGenerated(true);
    getContext().then((result) => {
      if (result !== undefined) {
        summarize(result.context).then((summary) => {
          getQuestionSet({
            context: summary.body,
            numQuestions: questionsCount,
          }).then((questionSets) => {
            const data = JSON.parse(questionSets);
            const questionsArray = data.questions as JSONQuestionSet[];
            questionsArray.forEach((questionSet) => {
              setQuestionSets((prevQuestionSets) => [
                ...prevQuestionSets,
                {
                  question: questionSet.question,
                  choices: [
                    {
                      text: questionSet.a,
                      isCorrect: questionSet.correctAnswerChoice === "a",
                    },
                    {
                      text: questionSet.b,
                      isCorrect: questionSet.correctAnswerChoice === "b",
                    },
                    {
                      text: questionSet.c,
                      isCorrect: questionSet.correctAnswerChoice === "c",
                    },
                    {
                      text: questionSet.d,
                      isCorrect: questionSet.correctAnswerChoice === "d",
                    },
                  ],
                },
              ]);
            });
          });
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Question questionText="Multiple Choice" />
      {warning && (
        <Question questionText="Website too large. Please select text." />
      )}
      <div className="mt-2 mx-auto w-9/12">
        <Counter count={questionsCount} setCount={setQuestionsCount} />
        <CheckAnswerButton
          checkAnswerFunction={generate}
          buttonText="Generate Questions"
        />
      </div>
    </div>
  );
};

export default SelectText;
