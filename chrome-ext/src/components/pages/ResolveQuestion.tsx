import { useState } from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import LogoText from "../LogoText";
import Question from "../Question";
import SaveQuestionButton from "../SaveQuestionButton";
import TextBox from "../TextBox";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getContext } from "../SelectText";

const ResolveQuesiton = () => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [queryText, setQueryText] = useState("");
  const [answerText, setAnswerText] = useState("...");

  const getTab = async () => {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        resolve(tabs[0].url);
      });
    });
  }

  const getSentences = async (html_doc: string) => {
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "https://3labpwz4y4.execute-api.us-east-1.amazonaws.com/Dev",
        data: {
          html_doc: html_doc,
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
  }

  const answerQuestionHandler = async () => {
    const url = await getTab();
    console.log(url);
    const html_doc = (await getContext())?.context as string;
    const websiteText = (await getSentences(html_doc))?.body;
    console.log(websiteText);
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "https://0ew9gib4sb.execute-api.us-east-1.amazonaws.com/default/questionAnswerer",
        data: {
          url: url,
          websiteText: websiteText,
          queryText: queryText,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response: AxiosResponse = await axios(config);
      console.log(response);
      setAnswerText(response.data.body);
      setDisplayAnswer(true);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <LogoText />
      <Question questionText="Type Your Question" />
      <TextBox
        text={queryText}
        setText={setQueryText}
        isReadOnly={displayAnswer}
      />
      {displayAnswer && (
        <TextBox
          text={answerText}
          setText={setAnswerText}
          isReadOnly={true}
        />
      )}
      {!displayAnswer && (
        <CheckAnswerButton
          buttonText="Answer"
          checkAnswerFunction={answerQuestionHandler}
        />
      )}
      <SaveQuestionButton saveFunction={() => false} />
    </div>
  );
};

export default ResolveQuesiton;
