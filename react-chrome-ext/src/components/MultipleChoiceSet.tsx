import React, { useState } from "react";
import MultipleChoiceButton from "./MultipleChoiceButton";
import SaveQuestionButton from "./SaveQuestionButton";
import Question from "./Question";

interface MultipleChoiceSetProps {
    isRevealed: boolean;
    setIsRevealed: (isRevealed: boolean) => void;
    question: string;
    choices: string[];
}

const MultipleChoiceSet: React.FC<MultipleChoiceSetProps> = ({ isRevealed, setIsRevealed, question, choices }) => {
    const renderMultipleChoiceButtons = (choices: string[]) => {
        return choices.map((choice) => {
            return (
                <MultipleChoiceButton
                    optionText={choice}
                    isCorrect={false}
                    isRevealed={isRevealed}
                    setIsRevealed={setIsRevealed}
                />
            );
        });
    }

    return (
        <>
            <Question questionText={question} />
            {renderMultipleChoiceButtons(choices)}
            <SaveQuestionButton saveFunction={() => false} />
        </>
    );
};

export default MultipleChoiceSet;
