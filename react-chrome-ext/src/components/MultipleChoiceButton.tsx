import React, { useState, useEffect } from 'react';

interface MultipleChoiceButtonProps {
    optionText: string;
}

const MultipleChoiceButton: React.FC<MultipleChoiceButtonProps> = ({  }) => {
    const [selected, setSelected] = useState<boolean>();
    const [incorrect, setIncorrect] = useState<boolean>();
    const [correct, setCorrect] = useState<boolean>();
    useEffect(() => {
        // setEditable();
    }, []);

    return (
        <>
            
        </>
    );
};

export default MultipleChoiceButton;
